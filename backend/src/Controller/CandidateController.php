<?php

namespace App\Controller;

use App\Entity\Candidate;
use App\Form\CandidateType;
use App\Repository\CandidateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;


/**
 * @Route("/candidate")
 */
class CandidateController extends AbstractController
{
    /**
     * @Route("/", name="candidate_index", methods={"POST"})
     */
    public function index(CandidateRepository $candidateRepository, EntityManagerInterface $em, Request  $request): Response
    {
        $firstName = $request->request->get('firstName');
        $lastName = $request->request->get('lastName');
        $email = $request->request->get('email');
        $more = $request->request->get('more');
        $curriculum = $request->files->get('curriculum');

        $candidate = new Candidate();
        $candidate->setFirstName($firstName);
        $candidate->setLastName($lastName);
        $candidate->setEmail($email);
        $candidate->setMore($more);
        $candidate->setCurriculum('nombre_temporal.pdf');
        
        $em->persist($candidate);
        $em->flush();

        $id = $candidate->getId();


        $directorio= $this->getParameter('curriculum');
        // $nombreFichero = 'contacto.jpeg';
        // $nombreFichero = $foto->getClientOriginalName();
         $nombreFichero = 'candidate'.$id.'.'.$curriculum->getClientOriginalExtension();
         
        $curriculum->move($directorio, $nombreFichero);

        // dump($curriculum);
        $candidate->setCurriculum($nombreFichero);

        $em->persist($candidate);
        $em->flush();

        $respuesta =[];
        $respuesta['id'] = $candidate->getId();
        $respuesta['firstName'] = $candidate->getFirstName();
        $respuesta['lastName'] = $candidate->getLastName();
        $respuesta['email'] = $candidate->getEmail();
        $respuesta['more'] = $candidate->getMore();
        $respuesta['curriculum'] = $candidate->getCurriculum();


        return $this->json($respuesta);
    }

    /**
     * @Route("/new", name="candidate_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $candidate = new Candidate();
        $form = $this->createForm(CandidateType::class, $candidate);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($candidate);
            $entityManager->flush();

            return $this->redirectToRoute('candidate_index');
        }

        return $this->render('candidate/new.html.twig', [
            'candidate' => $candidate,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="candidate_show", methods={"GET"})
     */
    public function show(Candidate $candidate): Response
    {
        return $this->render('candidate/show.html.twig', [
            'candidate' => $candidate,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="candidate_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Candidate $candidate): Response
    {
        $form = $this->createForm(CandidateType::class, $candidate);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('candidate_index');
        }

        return $this->render('candidate/edit.html.twig', [
            'candidate' => $candidate,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="candidate_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Candidate $candidate): Response
    {
        if ($this->isCsrfTokenValid('delete'.$candidate->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($candidate);
            $entityManager->flush();
        }

        return $this->redirectToRoute('candidate_index');
    }
}
