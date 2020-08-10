<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Commandes;
use Faker\Generator as Faker;

$factory->define(Commandes::class, function (Faker $faker) {
    return [
        // Rien dans commande
        "id_user" =>rand(1,5),
      
      
    ];
});
