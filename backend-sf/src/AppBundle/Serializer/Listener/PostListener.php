<?php

namespace AppBundle\Serializer\Listener\PostListener;

use JMS\Serializer\EventDispatcher\Events;
use JMS\Serializer\EventDispatcher\EventSubscriberInterface;
use JMS\Serializer\EventDispatcher\ObjectEvent;

class PostListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents(){
        return [
            'event' => Events::POST_SERIALIZE,
            'format' => 'json',
            'class' => 'AppBundle\Entity\Post',
            'method' => 'onePostSerialize'
        ];
    }
    public static function onPostSerialize(ObjectEvent $event){
        $date = new \DateTime();
        $event->getVisitor()->addData('serialized_at', $date->format('l jS \of F Y h:is A'));
    }

}