<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h2>Comfirmation de commande</h2>
    <p>votre commande a bien été validé:</p>
    <ul>
     
       <li> : {{ $contact['order']->user->name }}</li>

       a l adresse suivante 
      
       <li> : {{ $contact['order']->adresseLivraison["adresse"] }}</li>
       <li> : {{ $contact['order']->adresseLivraison["ville"] }}</li>
       <li> : {{ $contact['order']->adresseLivraison["code_postal"] }}</li>
    

      
    
   

     contenu de la commande :
    


    </ul>
  </body>
</html>