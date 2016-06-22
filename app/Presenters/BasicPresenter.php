<?php

namespace Someline\Presenters;

use Someline\Transformers\BasicTransformer;

/**
 * Class BasicPresenter
 *
 * @package namespace Someline\Presenters;
 */
class BasicPresenter extends BasePresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new BasicTransformer();
    }
}
