<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Repositories\Eloquent;


use Someline\Presenters\BasePresenter;
use Prettus\Repository\Contracts\RepositoryCriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Someline\Repositories\Criteria\AuthUserCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Contracts\ValidatorInterface;

abstract class BaseRepository extends \Prettus\Repository\Eloquent\BaseRepository
{
    /**
     * @var Model
     */
    protected $relateModel;

    /**
     * @var Relation
     */
    protected $relation;

    public function byAuthUser()
    {
        $this->pushCriteria(new AuthUserCriteria());
        return $this;
    }

    public function authUserId()
    {
        return auth_user()->user_id;
    }

    public function validateCreate(array $attributes)
    {
        if (!is_null($this->validator)) {
            $this->validator->with($attributes)
                ->passesOrFail(ValidatorInterface::RULE_CREATE);
        }
    }

    public function validateUpdate(array $attributes)
    {
        if (!is_null($this->validator)) {
            $this->validator->with($attributes)
                ->passesOrFail(ValidatorInterface::RULE_UPDATE);
        }
    }

    public function present($results)
    {
        return $this->parserResult($results);
    }

    /**
     * @param Model $relateModel
     * @return $this
     */
    public function setRelateModel(Model $relateModel)
    {
        $this->relateModel = $relateModel;
        if ($relateModel) {
            $this->makeModel();
        }
        return $this;
    }

    /**
     * @return Relation
     */
    public function relation()
    {
        return null;
    }

    /**
     * @return Model
     * @throws RepositoryException
     */
    public function makeModel()
    {
        $model = $this->relateModel ? $this->relation() : $this->app->make($this->model());

        if (!($model instanceof Model || $model instanceof Relation)) {
            throw new RepositoryException("Class " . get_class($model) . " must be an instance of Illuminate\\Database\\Eloquent\\Model");
        }

        return $this->model = $model;
    }


    /**
     * Retrieve data array for populate field select
     *
     * @param string $column
     * @param string|null $key
     *
     * @return \Illuminate\Support\Collection|array
     */
    public function lists($column, $key = null)
    {
        $this->applyCriteria();
        $this->applyScope();

        $lists = $this->model->lists($column, $key);

        $this->resetModel();

        return $lists;
    }

    /**
     * Retrieve all data of repository
     *
     * @param array $columns
     * @return mixed
     */
    public function all($columns = array('*'))
    {
        $this->applyCriteria();
        $this->applyScope();

        if ($this->model instanceof \Illuminate\Database\Eloquent\Builder
            || $this->model instanceof \Illuminate\Database\Eloquent\Relations\Relation
        ) {
            $results = $this->model->get($columns);
        } else {
            $results = $this->model->all($columns);
        }

        $this->resetModel();

        return $this->parserResult($results);
    }


    /**
     * Add a basic where clause to the model.
     *
     * @param  string|array|\Closure $column
     * @param  mixed $value
     * @return $this
     */
    protected function modelWhere($column, $value = null)
    {
        $this->model = $this->model->where($column, $value);
        return $this;
    }

    /**
     * @return \Prettus\Repository\Contracts\PresenterInterface
     */
    public function getPresenter()
    {
        return $this->presenter;
    }

    /**
     * @param array $meta
     */
    public function setPresenterMeta(array $meta)
    {
        if ($this->presenter instanceof BasePresenter) {
            $this->presenter->setMeta($meta);
        }
    }

}