<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class UserController extends Controller
{
    /**
     * @Route("/users/{id}", name="user_show")
     * @Method({"GET"})
     */
    public function showAction(User $user)
    {
        $data =  $this->get('serializer')->serialize($user, 'json');

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/users", name="user_create")
     * @Method({"POST"})
     */
    public function createAction(Request $request)
    {
        $data = $request->getContent();
        $user = $this->get('serializer')
            ->deserialize($data, 'AppBundle\Entity\User', 'json');

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new Response('', Response::HTTP_CREATED);
    }

    /**
     * @Route("/users", name="user_list")
     * @Method({"GET"})
     */
    public function listAction()
    {
        $users = $this->getDoctrine()
            ->getRepository('AppBundle:User')
            ->findAll();

        $data = $this->get('serializer')
            ->serialize($users, 'json');

        $response = new Response($$data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}