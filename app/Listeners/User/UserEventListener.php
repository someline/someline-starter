<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Listeners\User;


use Someline\Events\User\UserLoggedInEvent;
use Someline\Events\User\UserRegisteredEvent;
use Someline\Models\BaseModel;

class UserEventListener
{

    public function __construct()
    {
    }


    /**
     * Handle user login events.
     * @param UserLoggedInEvent $event
     */
    public function onUserLogin(UserLoggedInEvent $event)
    {
    }

    /**
     * Handle user registered events.
     * @param UserRegisteredEvent $event
     */
    public function onUserRegistered(UserRegisteredEvent $event)
    {
    }

    /**
     * Handle user logout events.
     */
    public function onUserLogout($event)
    {
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            UserLoggedInEvent::class,
            'Someline\Listeners\User\UserEventListener@onUserLogin'
        );

        $events->listen(
            UserRegisteredEvent::class,
            'Someline\Listeners\User\UserEventListener@onUserRegistered'
        );

//        $events->listen(
//            'Someline\Events\UserLoggedOut',
//            'Someline\Listeners\UserEventListener@onUserLogout'
//        );
    }

}