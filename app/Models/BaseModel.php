<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Models;


use Carbon\Carbon;
use Someline\Models\Foundation\User;
use Someline\Models\Interfaces\BaseModelEventsInterface;
use Someline\Models\Interfaces\FriendStatusInterface;
use Someline\Models\Traits\BaseModelEvents;
use Illuminate\Database\Eloquent\Model;
use Someline\Models\Traits\FriendStatus;
use Prettus\Repository\Presenter\ModelFractalPresenter;

class BaseModel extends Model implements BaseModelEventsInterface
{
    use BaseModelEvents;

    /**
     * Indicates if the model should be auto set user_id.
     *
     * @var bool
     */
    protected $autoUserId = true;

    /**
     * Indicates if the model should be recorded ips.
     *
     * @var bool
     */
    public $ips = true;

    /**
     * Indicates if the model should be recorded users.
     *
     * @var bool
     */
    public $update_users = true;

    /**
     * Get the auth instance.
     *
     * @return \Dingo\Api\Auth\Auth
     */
    protected function api_auth()
    {
        return app('Dingo\Api\Auth\Auth');
    }

    /**
     * Get current auth user_id
     *
     * @return mixed|null
     */
    public function getAuthUserId()
    {
        $user_id = null;
        if ($this->api_auth()->check()) {
            $user_id = $this->api_auth()->user()->user_id;
        } else if (\Auth::check()) {
            $user_id = \Auth::user()->user_id;
        }
        return $user_id;
    }

    /**
     * Get current model's user_id
     *
     * @return mixed|null
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * Update the creation and update ips.
     *
     * @return void
     */
    protected function updateIps()
    {
        $ip = smart_get_client_ip();

        if (!$this->isDirty('updated_ip')) {
            $this->updated_ip = $ip;
        }

        if (!$this->exists && !$this->isDirty('created_ip')) {
            $this->created_ip = $ip;
        }
    }

    /**
     * Update the creation and update by users.
     *
     * @return void
     */
    protected function updateUsers()
    {
        $user_id = $this->getAuthUserId();
        if (!($user_id > 0)) {
            return;
        }

        if (!$this->isDirty('updated_by')) {
            $this->updated_by = $user_id;
        }

        if (!$this->exists && !$this->isDirty('created_by')) {
            $this->created_by = $user_id;
        }
    }

    /**
     * @return bool
     */
    public function isAuthUserOwner()
    {
        return $this->getAuthUserId() == $this->getUserId();
    }

    /**
     * @return Carbon
     */
    public function getNowUTCTime()
    {
        return Carbon::now('UTC');
    }

    /**
     * @return User|null
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @return User|null
     */
    public function getRelatedUser()
    {
        return $this->related_user;
    }

    /**
     * Set Model Presenter
     * @return $this
     */
    public function setModelPresenter()
    {
        $this->setPresenter(new ModelFractalPresenter());
        return $this;
    }

}