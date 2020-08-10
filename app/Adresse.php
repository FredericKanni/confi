<?php

namespace App;

use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{

    protected $table = "adresses";
    protected $fillable = ['id','adresse' , 'ville', 'code_postal', 'pays','id_user'];
  
    public function user()
    {
        return $this->belongsTo(User::class,'id_user');
    }



  
  

}
