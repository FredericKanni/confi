<template>
  <div>
    <v-menu  :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-4 deep-orange" v-bind="attrs" v-on="on">
          <v-badge color="green" :content="quantity">
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list width="400">

        <v-list-item  v-for="produit in itemBasket"  :key="produit.id">
          <v-list-item-title>{{produit.name}}   
            
          </v-list-item-title>

          <v-spacer><v-list-item-title> <v-text-field  type="number"
            single-line
            
            min="0"
            max="50"
            
                v-model="produit.quantity"
            @input='updateQuantity(produit )'
              > </v-text-field >  
               </v-list-item-title>
               </v-spacer>
 

         
        </v-list-item>

     <v-list-item>
<!-- <v-btn 


 @click='pushBasket'> voir tous le panier</v-btn> -->

 <!-- <v-btn 

to="/touspannier"

> voir tous le panier</v-btn> -->
 <v-btn 

to="/basket"

> voir tous le panier</v-btn>

     </v-list-item>
       

      </v-list>
  
    </v-menu>
  </div>
</template>

<script src="./panier.js">
</script>