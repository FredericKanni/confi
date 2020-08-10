<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});  */

/*LOGIN/LOGOUT*/

Route::post('/login','AuthController@login');
Route::get('/logout','AuthController@logout')->middleware('auth:api');

/*LOGIN/LOGOUT*/

// Sécurisation de la route
Route::middleware(['auth:api','roles:Admin|Producteur'])->prefix('produits')->group(function () {
    Route::post('/', 'ProduitController@createOrUpdate'); 
}); 

// Récupère les produits du Producteur (accessible qu'au producteur)
Route::middleware(['auth:api','roles:Producteur'])->prefix('producteurs')->group(function () {
    Route::get('produits', 'ProduitController@getOfProducteur');
    Route::post('produits', 'ProduitController@createOrUpdate'); 
}); 

/****route currentUser****/

Route::post('/currentUser', 'UsersController@getCurrentUserDB');

/****route currentUser****/



Route::get('fruits', 'FruitsController@index');

Route::get('produits', 'ProduitController@index');


Route::get('producteurs', 'ProducteursController@index');


//Route::get('Fruits', 'FruitsController@index');

//Route::get('users', 'UsersController@index');



//TODO rajoute le role client 
Route::middleware(['auth:api','roles:Admin|Producteur|Client'])->prefix('basket')->group(function () {
   
    Route::post('/', 'CommandesController@pushOrder'); 
    Route::post('/pay', 'CommandesController@pay'); 
 
}); 

//adressse
Route::middleware(['auth:api','roles:Admin|Producteur|Client'])->prefix('adresse')->group(function () {
   
    Route::post('/', 'CommandesController@addAdresse'); 
}); 



