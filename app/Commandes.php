<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Commandes extends Model
{
    protected $table = "commande";
    protected $fillable = ['id','id_user'];
    public $timestamps = false;
    
    function produits()
    {
        return $this->belongsToMany('App\Produits', 'commande_has_produit', 'id_commande','id_produit');
    }
    
    function user()
    {
        return $this->belongsTo(User::class,'id_user');
    }


    


    //soit en haut soit en bas
    public function adresseLivraison()
    {
        return $this->belongsTo(Adresse::class,'id_adresse_livraison',);
    }

    public function adresseFacturation()
    {
        return $this->belongsTo(Adresse::class,'id_adresse_facturation');
    }
  
}
