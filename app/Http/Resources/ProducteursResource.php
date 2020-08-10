<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProducteursResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $user = new UsersResource($this->whenLoaded('user'));
        return [
            'id' =>$this->id,
            'name' => $this->name,
            'user' =>$user,
            
        ];
    }
}
