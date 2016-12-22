<?php

namespace Someline\Transformers;

use Someline\Models\Foundation\User;

/**
 * Class UserTransformer
 * @package namespace Someline\Transformers;
 */
class UserTransformer extends BaseTransformer
{

    /**
     * Transform the User entity
     * @param User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'user_id' => (int)$model->getUserId(),

            /* place your other model properties here */
            'name' => $model->name,
            'email' => $model->email,

            'created_at' => (string)$model->created_at,
            'updated_at' => (string)$model->updated_at
        ];
    }
}
