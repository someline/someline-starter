<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Repositories\Interfaces;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\RepositoryInterface;

interface BaseRepositoryInterface extends RepositoryInterface
{

    /**
     * @return $this
     */
    public function byAuthUser();

    /**
     * @return mixed
     */
    public function authUserId();

    /**
     * @param array $attributes
     * @return void
     */
    public function validateCreate(array $attributes);

    /**
     * @param array $attributes
     * @return void
     */
    public function validateUpdate(array $attributes);

    /**
     * @param $validator
     */
    public function setValidator($validator);

    /**
     * @param $results
     * @return mixed
     */
    public function present($results);

    /**
     * @param Model $targetModel
     * @return $this
     */
    public function setRelateModel(Model $targetModel);

    /**
     * @return \Prettus\Repository\Contracts\PresenterInterface
     */
    public function getPresenter();

    /**
     * @param array $meta
     */
    public function setPresenterMeta(array $meta);

}