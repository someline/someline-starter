<?php
/**
 * Created for someline-server.
 * User: Libern
 */

namespace Someline\Observers;


use Someline\Models\Interfaces\BaseModelEventsInterface;
use Someline\Models\Traits\BaseModelEvents;

/**
 * Whenever a new model is saved for the first time,
 * the creating and created events will fire.
 * If a model already existed in the database and the save method is called,
 * the updating / updated events will fire.
 * However, in both cases, the saving / saved events will fire.
 *
 * @CREATE: saving > creating > created > saved
 * @UPDATE: saving > updating > updated > saved
 *
 */
class BaseModelObserver
{
    public function creating(BaseModelEventsInterface $model)
    {
        $model->onCreating();
    }

    public function created(BaseModelEventsInterface $model)
    {
        $model->onCreated();
    }

    public function updating(BaseModelEventsInterface $model)
    {
        $model->onUpdating();
    }

    public function updated(BaseModelEventsInterface $model)
    {
        $model->onUpdated();
    }

    public function saving(BaseModelEventsInterface $model)
    {
        $model->onSaving();
    }

    public function saved(BaseModelEventsInterface $model)
    {
        $model->onSaved();
    }

    public function deleting(BaseModelEventsInterface $model)
    {
        $model->onDeleting();
    }

    public function deleted(BaseModelEventsInterface $model)
    {
        $model->onDeleted();
    }

    public function restoring(BaseModelEventsInterface $model)
    {
        $model->onRestoring();
    }

    public function restored(BaseModelEventsInterface $model)
    {
        $model->onRestored();
    }

}