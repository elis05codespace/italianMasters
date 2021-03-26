<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="user_new", methods={"GET","POST"})
     */
    public function new(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder) : Response
    {
        $bodyRequest= $request->getContent();
        $userObj = json_decode($bodyRequest);
        dump($userObj);

       

        $user = new User();
        $user->setFirstName($userObj->firstName);
        $user->setLastName($userObj->lastName);
        $user->setEmail($userObj->username);
        
        $encoded = $encoder->encodePassword($user, $userObj->password);
        $user->setPassword($encoded);


        $em->persist($user);
        $em->flush();


        return $this->json(["message" => "registration succesful"]);
    }

     /**
     * @Route("/products", name="user_get_products", methods={"GET"})
     */
    public function showProducts(): Response
    {
        $user = $this->getUser();
        $products = $user->getProducts();

        $productsArray = []; 
        foreach($products as $product) {
            $productArray = [
                'name'=>$product->getName(),
                'duration'=>$product->getDuration(),
                'description'=>$product->getDescription(),
                'schedule'=>$product->getSchedule(),
                'price'=>$product->getPrice(),
                'more'=>$product->getmore(),
                'id'=>$product->getId(),
                
            ];
            $productsArray[] = $productArray; //push al array
        }

        return new JsonResponse($productsArray);
        
    }

    /**
     * @Route("/{id}", name="user_show", methods={"GET"})
     */
    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    

    /**
     * @Route("/{id}", name="user_delete", methods={"DELETE"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }
}
