<?php

namespace Someline\Presenters;

use Someline\Transformers\UserTransformer;

/**
 * Class UserPresenter
 *
 * @package namespace Someline\Presenters;
 */
class UserPresenter extends BasePresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new UserTransformer();
    }
}
