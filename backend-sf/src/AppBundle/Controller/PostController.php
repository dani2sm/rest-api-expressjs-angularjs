<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Post;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcherInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
/**
 * @Route("/api")
 */
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
     * @Rest\Get("/articles", name="list_pots")
     * @Rest\QueryParam(
     *     name="keyword",
     *     requirements="[a-zA-Z0-9]",
     *     nullable=true,
     *     description="The keyword to search for."
     * )
     * @Rest\QueryParam(
     *     name="order",
     *     requirements="asc|desc",
     *     default="asc",
     *     description="Sort order (asc or desc)"
     * )
     * @Rest\QueryParam(
     *     name="limit",
     *     requirements="\d+",
     *     default="15",
     *     description="Max number of movies per page."
     * )
     * @Rest\QueryParam(
     *     name="offset",
     *     requirements="\d+",
     *     default="0",
     *     description="The pagination offset"
     * )
     * @Rest\View()
     */
    public function listAction(ParamFetcherInterface $paramFetcher)
    {
        $pager = $this->getDoctrine()->getRepository('AppBundle:Article')->search(
            $paramFetcher->get('keyword'),
            $paramFetcher->get('order'),
            $paramFetcher->get('limit'),
            $paramFetcher->get('offset')
        );

        return $pager->getCurrentPageResults();

        /*$posts = $this->getDoctrine()
            ->getRepository('AppBundle:Post')
            ->findAll();
        return $posts ;*/
    }
}
