<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Events\User;


use Illuminate\Queue\SerializesModels;
use Someline\Models\Foundation\User;

class UserRegisteredEvent
{
    use SerializesModels;

    public $user;

    /**
     * Create a new event instance.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
