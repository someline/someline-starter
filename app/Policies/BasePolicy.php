<?php

namespace Someline\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Someline\Models\BaseModel;
use Someline\Models\Foundation\User;

trait BasePolicy
{

    /**
     * @param User $user
     * @param BaseModel $model
     * @return bool
     */
    public function owner(User $user, BaseModel $model)
    {
        return $model->getUserId() == $user->getUserId();
    }

}
