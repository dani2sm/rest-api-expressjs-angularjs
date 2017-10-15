<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Post;
use JMS\Serializer\SerializationContext;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

class PostController extends Controller
{
    /**
     * @Route("/posts/{id}", name="show_post")
     */
    public function showAction(Post $post)
    {
        $data = $this->get('jms_serializer')
            ->serialize($post, 'json', SerializationContext::create()->setGroups(array("detail")));

        $response = new Response($data);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/posts", name="create_post")
     * @Method({"POST"})
     */
    public function createAction(Request $request)
    {
        $data = $request->getContent();

        $article = $this->get('jms_serializer')
            ->deserialize($data, 'AppBundle\Entity\Post', 'json');

        $em = $this->getDoctrine()->getManager();
        $em->persist($article);
        $em->flush();

        return new Response('', Response::HTTP_CREATED);
    }

    /**
     * @Route("/posts", name="posts_list")
     * @Method({"GET"})
     */
    public function listAction()
    {
        $posts = $this->getDoctrine()
            ->getRepository('AppBundle:Post')
            ->findAll();
        $data = $this->get('jms_serializer')
            ->serialize($posts, 'json', SerializationContext::create()->setGroups(array("list")));

        $response = new Response($data);
        $response->headers
            ->set('Content-Type', 'application/json');
        return $response;

    }
}
