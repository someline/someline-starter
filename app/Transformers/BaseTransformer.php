<?php
/**
 * Created for someline-server.
 * User: Libern
 */

namespace Someline\Transformers;


use League\Fractal\TransformerAbstract;
use Someline\Models\BaseModel;

class BaseTransformer extends TransformerAbstract
{


    /**
     * Include User
     * @param BaseModel $model
     * @return \League\Fractal\Resource\Item
     */
    public function includeUser(BaseModel $model)
    {
        $user = $model->user;
        return $this->item($user, new UserTransformer(), 'user');
    }

    /**
     * Include User
     * @param BaseModel $model
     * @return \League\Fractal\Resource\Item
     */
    public function includeAuthUser(BaseModel $model)
    {
        $user = auth_user();
        return $this->item($user, new UserTransformer());
    }

}