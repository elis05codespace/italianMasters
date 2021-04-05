<?php

namespace App\Controller;

use App\Entity\Query;
use App\Form\QueryType;
use App\Repository\QueryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;


/**
 * @Route("/query")
 */
class QueryController extends AbstractController
{
    /**
     * @Route("/", name="query_index", methods={"POST"})
     */
    public function index(QueryRepository $queryRepository, EntityManagerInterface $em, Request  $request): Response
    {
        $name = $request->request->get('name');
        $email = $request->request->get('email');
        $message = $request->request->get('message');
       

        $query = new Query();
        $query->setName($name);
        $query->setEmail($email);
        $query->setMessage($message);
       
        
        $em->persist($query);
        $em->flush();


        $respuesta =[];
        $respuesta['id'] = $query->getId();
        $respuesta['name'] = $query->getName();
        $respuesta['email'] = $query->getEmail();
        $respuesta['more'] = $query->getMessage();
        


        return $this->json($respuesta);
    }

    

    /**
     * @Route("/new", name="query_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $query = new Query();
        $form = $this->createForm(QueryType::class, $query);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($query);
            $entityManager->flush();

            return $this->redirectToRoute('query_index');
        }

        return $this->render('query/new.html.twig', [
            'query' => $query,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="query_show", methods={"GET"})
     */
    public function show(Query $query): Response
    {
        return $this->render('query/show.html.twig', [
            'query' => $query,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="query_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Query $query): Response
    {
        $form = $this->createForm(QueryType::class, $query);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('query_index');
        }

        return $this->render('query/edit.html.twig', [
            'query' => $query,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="query_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Query $query): Response
    {
        if ($this->isCsrfTokenValid('delete'.$query->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($query);
            $entityManager->flush();
        }

        return $this->redirectToRoute('query_index');
    }
}
