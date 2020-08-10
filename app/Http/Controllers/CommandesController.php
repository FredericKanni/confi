<?php

namespace App\Http\Controllers;

use App\Adresse;
use App\Commandes;
use App\Mail\Contact;
use App\Produits;
use App\User;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class CommandesController extends Controller
{

    public function pay(Request $request)
    {
        $validator = $request->validate(
            [
              
                'paiement' => 'required',
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        );
// return $validator["paiement"]['id'];
     try
        {
            $charge = Stripe::charges()->create([

                'amount' => 20,
                'currency'=>'CAD',
                'source'=>$validator["paiement"]['id'],
                'description'=>'Description',
                // 'receipt_mail'=>$request->email,
                'metadata'=>[
                    'data1'=> 'metadata1',
                    'data2'=> 'metadata2',
                    'data3'=> 'metadata3',
                ],
            ]);
           return $charge;
        }
         catch(Exception $e){
            return $e;
         }
    }

    //  enregistre l adresse de livraison 

    /***
     * sert a stocker la commande ( et produit et leur quantite) en bdd 
     */
    public function pushOrder(Request $request)
    {

        //on recupere le order 
        $validator = $request->validate(
            [
                'order' => 'required',
                'livraison' => 'required',
                'facturation' => 'required',
                // 'paiement' => 'required',
            ],
            [
                'required' => 'Le champ :attribute est requis'
            ]
        );


        $user = $request->user();
        try {
            if ($user) {
                $createOrder = new Commandes;



                $user = $this->addUserToOrder($user, $createOrder);
                $this->addAdresseLivaison($validator['livraison'], $createOrder, $user);
                $this->addAdresseFacturation($validator['facturation'], $createOrder, $user);

                //TODO manque a rajouter l adresse de facturation et livraison 
                $createOrder->save();
            }
        } catch (Exception $e) {
            DB::rollBack();
            return $e->getMessage();
        }

        DB::commit();
     
        Mail::to( 'totoland@toto.com')->send(new Contact([
               
                'order' =>$createOrder
            
            ]));

           
        return  $createOrder;
    }

    public function addUserToOrder($user, &$order)
    {
        $loggedUser = User::where('id', '=', $user->id)->first();
        if (!$loggedUser) {
            throw new Exception('Pas connecté');
        }
        //rajoute une commande et remplis le chanp id user
        $order->user()->associate($loggedUser);
        return $user;
    }


    public function addAdresseLivaison($adresse, &$order, $user)
    {
        $adresse = $this->createAdresse($adresse, $user);
        $order->adresseLivraison()->associate($adresse);
    }


    public function addAdresseFacturation($adresse, &$order, $user)
    {
        $adresse = $this->createAdresse($adresse, $user);
        $order->adresseFacturation()->associate($adresse);
    }

    public function addProduitOrder($basket, &$order)
    {
        foreach ($basket as $_order) {

            $quantity = $_order['quantity'];
            
            $idProduct = $_order['id'];
            $product = Produits::find($idProduct); //si trouve pas return null
            //si null
            if (!$product) {
                throw new Exception('Produits incorrects');
            }
            //rajoute les produit et leur qUANTITE a la commande ds commande has produits
            $order->produits()->attach($product, ['quantity' => $quantity]);
        }
    }

    public function createAdresse($_adresse, $user)
    {

        $adresse = new Adresse;

        $adresse->adresse = $_adresse['adresse'];
        $adresse->ville = $_adresse['ville'];
        $adresse->code_postal = $_adresse['codePostal'];
        $adresse->pays = $_adresse['pays'];
        $adresse->user()->associate($user);
        $adresse->save();
        return $adresse;
    }
}
