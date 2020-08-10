<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProducteursResource;
use App\Producteurs;
use Illuminate\Http\Request;

class ProducteursController extends Controller
{
    public function index()
    {
        $producteurs = Producteurs::with('user')->get();
        return ProducteursResource::collection($producteurs);      
    }
}
