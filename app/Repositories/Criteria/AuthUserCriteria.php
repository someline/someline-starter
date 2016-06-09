<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Repositories\Criteria;

use Prettus\Repository\Contracts\RepositoryInterface;
use Prettus\Repository\Contracts\CriteriaInterface;

class AuthUserCriteria implements CriteriaInterface
{

    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->where('user_id', '=', auth_user()->user_id);
        return $model;
    }

}