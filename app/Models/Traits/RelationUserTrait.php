<?php namespace Someline\Models\Traits;

use Someline\Models\Foundation\User;

trait RelationUserTrait
{

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

}