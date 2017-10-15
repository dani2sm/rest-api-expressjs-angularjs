<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Post;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

class PostController extends Controller
{
    /**
     * @Rest\Get(
     *     path="/posts/{id}",
     *     name="show_post",
     *     requirements={"id" = "\d+"}
     * )
     * @Rest\View
     */
    public function showAction(Post $post)
    {
        $data = $this->getDoctrine()
            ->getManager()
            ->getRepository('AppBundle\Entity\Post')
            ->find($post->getId());
        return $data ;
    }

    /**
     * @Rest\Get()
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
     * @Rest\Get(
     *     path="/posts",
     *     name="list_posts"
     * )
     * @Rest\View
     */
    public function listAction()
    {
        $posts = $this->getDoctrine()
            ->getRepository('AppBundle:Post')
            ->findAll();
        return $posts ;

    }
}
