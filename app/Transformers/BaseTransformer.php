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
        if ($user) {
            return $this->item($user, new UserTransformer(), 'user');
        }
        return null;
    }

    /**
     * Include User
     * @param BaseModel $model
     * @return \League\Fractal\Resource\Item
     */
    public function includeAuthUser(BaseModel $model)
    {
        $user = auth_user();
        if ($user) {
            return $this->item($user, new UserTransformer());
        }
        return null;
    }

}