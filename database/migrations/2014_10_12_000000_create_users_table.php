<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('user_id');
//            $table->unsignedInteger('slid')->nullable();
            $table->string('name', 50);
            $table->char('gender', 1)->nullable();
            $table->date('birthday')->nullable();
            $table->char('country', 2)->default('US')->nullable();
            $table->string('timezone', 30)->default('UTC')->nullable();
            $table->string('locale', 15)->default('en')->nullable();
            $table->string('username', 50)->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email', 150)->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 190)->nullable();
            $table->rememberToken();
            $table->tinyInteger('status')->default(0);
            $table->unsignedInteger('created_by')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->ipAddress('created_ip')->nullable();
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->ipAddress('updated_ip')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
