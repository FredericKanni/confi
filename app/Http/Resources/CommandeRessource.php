<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommandeRessource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // $user = new UsersResource($this->user);
        // $products = ProduitResource::collection($this->products);
        // return [
        //     'id' => $this->id,
        //     'user' => $user,
        //     'products' => $products,
        //     'date' => $this->created_at,
        // ];
    }
}
