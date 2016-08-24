<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Models;

use Someline\Base\Models\BaseModel as Model;

class BaseModel extends Model
{

    /**
     * @return \Someline\Models\Foundation\User
     */
    public function getAuthUser()
    {
        return auth_user();
    }

}