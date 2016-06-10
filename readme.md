# Someline Starter PHP Framework

Someline Starter is a framework for quick building Web Apps and Restful APIs, with modern PHP design pattern foundation, which is built on top of popular Laravel 5 framework, Vue.js, Restful API, Repository Design, OAuth2, JWT, Unit Tests, isolated front-end and back-end layer.

## Someline Starter is born for two reasons:

1. Quick application or Restful API starter without the need to build from scratch using Laravel.

2. Introduce modern design pattern, which have a better foundation when starting, for PHP projects.

## Framework Overview

Someline Starter is suitable for Restful API oriented projects.

The Restful APIs as a backend layer which provide simple unified interfaces for frontend: Web and Mobile apps.

It utilized both OAuth2 and JWT for authentication purpose and protecting resources.

For Web frontend: `JWT` is used.

For Mobile frontend or third-party: `OAuth2` is used.

It also provides Unit Tests for API testing and framework testing.

It is shipped with Angulr Theme and features in every part that you can easily reference.

It is fully utilised Repository Design pattern.

## Out-of-box Components

##### If you are not familiar with any of these packages, you are recommended to get to know them as they are really helpful when you needed. 

*Framework*
- Laravel 5.2 [laravel/framework](https://github.com/laravel/framework)
- Laravel IDE Helper [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper)
- Clockwork [itsgoingd/clockwork](https://github.com/itsgoingd/clockwork)

*Foundation*
- Redis [predis/predis](https://github.com/nrk/predis)
- GuzzleHTTP [guzzlehttp/guzzle](https://github.com/guzzle/guzzle)
- HTTP Status [lukasoppermann/http-status](https://github.com/lukasoppermann/http-status)

*Core*
- Restful API [dingo/api](https://github.com/dingo/api)
- L5 Repostory [prettus/l5-repository](https://github.com/andersao/l5-repository)
- Laravel Validation [prettus/laravel-validation](https://github.com/andersao/laravel-validator)
- Intervention Image [intervention/image](http://image.intervention.io/)
- Intervention Image Cache [intervention/imagecache](https://github.com/Intervention/imagecache)
- Image Validator [cviebrock/image-validator](https://github.com/cviebrock/image-validator)

*Authentication*
- OAuth2 Server [lucadegasperi/oauth2-server-laravel](https://github.com/lucadegasperi/oauth2-server-laravel)
- JWT Auth [tymon/jwt-auth](https://github.com/tymondesigns/jwt-auth)

*Theme*
- Angulr theme with Bootstrap and jQuery support. Please [buy a license](http://themeforest.net/item/angulr-bootstrap-admin-web-app-with-angularjs/8437259?ref=Flatfull) if you use this in your project. For Demo: [Angular version](http://flatfull.com/themes/angulr/angular/#/app/dashboard-v1) and [HTML version](http://flatfull.com/themes/angulr/html/)

*Frontend*
- [Vue.js](https://vuejs.org/) Reactive Components for Modern Web Interfaces

## Get Started

You can get started from either A or B option:

### A. Fork Repository

`Fork this repository` and `clone` to your working folder. 

After forked:

```
git clone https://github.com/username/someline-starter
```

Note: Change `https://github.com/username/someline-starter` to your own cloned git repository address.

### B. Manually add to another repository

Clone this project to your working folder and open the directory:

```
git clone https://github.com/libern/someline-starter
```

#### B.1. Add to another Git Repository

Change `https://github.com/username/repository-name.git` to your own git repository address.

```
git remote remove origin
git remote add origin https://github.com/username/repository-name.git
git push -u origin master
```

## Installation

### Development Requirements

- Laravel 5: https://laravel.com/docs/5.2/installation
- NodeJS: https://nodejs.org/en/
- Bower: https://bower.io/
- SQLite extention

### Install Essentials

Open `someline-starter` folder

```
cd someline-starter
```

*All these commands should be executed under the root of someline-starter project*

Install composer dependencies
```
composer install
```

Install npm dependencies
```
npm install
```

Install bower dependencies
```
bower install
```

Set-up Laravel, after these commands, please change `.env` file for your own environment settings
```
sudo cp .env.example .env
sudo chmod -R 777 storage
sudo chmod -R 777 bootstrap/cache
php artisan key:generate
php artisan jwt:generate
```

### Database & Seeding

You need to create a Database e.g. `someline_starter` with Encoding `utf8mb4` and Collation `utf8mb4_unicode_ci`.

Change database config in `.env` file to the match the database that your just created.

After having database configuration setup, you can now do migrations and seeding.

```
php artisan migrate

php artisan db:seed
```

### Ready to go

Until this point, you should be able to visit the home page. 

For example, if you have set the domain: `http://someline-starter.app/`.

Just visit: http://someline-starter.app/

It should prompt you for login, use:

```
libern@someline.com
Abc12345
```

You are free to change the seeding account information from the file: `database/seeds/UsersTableSeeder.php`

You are done. Yeah!

Explore and start to build on top of it.

## Development Process and Flow

##### Refresh Database Migrations and Seeding

When you added or changed to migration files or seedings, or you just simply want to refresh everything in database:

```
php artisan db:refresh --seed
```


## License

The Someline Starter framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
