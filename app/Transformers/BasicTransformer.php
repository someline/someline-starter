<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Transformers;


class BasicTransformer extends BaseTransformer
{

    /**
     * Transform the Any entity
     *
     * @param $value
     * @return mixed
     */
    public function transform($value)
    {
        return $value;
    }
    
}