<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(\Someline\Models\Foundation\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'gender' => $faker->randomElement(['M', 'F']),
        'birthday' => $faker->dateTimeBetween('-60 years', '-10 years'),
        'country' => $faker->countryCode,
        'timezone' => $faker->timezone,
        'locale' => $faker->locale,
        'username' => $faker->userName,
        'phone_number' => $faker->phoneNumber,
        'status' => 1,
    ];
});
