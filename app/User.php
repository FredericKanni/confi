<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    use Billable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','id_role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /*****/
    public function role()
    {
        return $this->belongsTo(Role::class, 'id_role');
    }
    
    public function producteur()
    {
        return $this->hasOne(Producteurs::class, 'id_users');
    }

    public function commande()

    {

        return $this->hasMany(Commandes::class, 'id_user');

    }

    public function adresses()

    {

        return $this->hasMany(Adresse::class, 'id_user');

    }
}
