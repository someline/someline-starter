<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Transformers;


use Someline\Base\Models\BaseModel;
use Someline\Base\Transformers\Transformer;

class BaseTransformer extends Transformer
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