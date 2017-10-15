<?php

namespace AppBundle\Serializer\Handler;

use JMS\Serializer\GraphNavigator;
use JMS\Serializer\Handler\SubscribingHandlerInterface;

class PostHandler implements SubscribingHandlerInterface
{
    public static function getSubscribingMethods()
    {
        return [
            [
                'direction' => GraphNavigator::DIRECTION_SERIALIZATION,
                'format' => 'json',
                'type' => 'AppBundle\Entity\Article',
                'method' => 'serialize',
            ],
            [
                'direction' => GraphNavigator::DIRECTION_DESERIALIZATION,
                'format' => 'json',
                'type' => 'AppBundle\Entity\Article',
                'method' => 'deserialize',
            ]
        ];
    }

    public function serialize(JsonSerializationVisitor $visitor, Post $article, array $type, Context $context)
    {
        $date = new \Datetime();

        $data = [
            'title' => $article->getTitle(),
            'content' => $article->getContent(),
            'delivered_at' => $date->format('l jS \of F Y h:i:s A'),
        ];
        return $visitor->visitArray($data, $type, $context);
    }
    public function deserialize(JsonDeserializationVisitor $visitor, $data)
    {
        return new Post($data);
    }
}