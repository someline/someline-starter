<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Models;

use Someline\Base\Models\BaseModel as Model;
use Someline\Models\Foundation\User;

class BaseModel extends Model
{

    /**
     * @return User
     */
    public function getUser()
    {
        return parent::getUser();
    }

    /**
     * @return User
     */
    public function getAuthUser()
    {
        return parent::getAuthUser();
    }

}