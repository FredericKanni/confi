<template>
    <div>
       <v-btn  :disabled="quantity==0" small color="primary" @click="add">ajouter</v-btn>


<div v-if="produit.quantity < 10 && produit.quantity != 0"> Reste : {{produit.quantity}}   </div>
<div v-if=" produit.quantity == 0"> Plus Disponible  </div>

        <v-text-field
        :disabled=" produit.quantity == 0"
            label="nombre de produits"
            type="number"
            single-line
            min="0"
            :max="quantityMax"
            value="produit.quantity"
            v-model="quantity"
           
          ></v-text-field>

    </div>
</template>
 


<script>

import{basketService} from "../../_services/basket.service";
export default {
    data(){
        return{
            quantity:0,
            quantityMax:'',
        }
    },

    props:{
       produit: {
           required:true,
        },
    },

    methods:{
        add(){


// if(//attention currentbasket re"cuperer le produit correspondant ds basket si eiste
// // this.produit.quantity > 10 && this.quantity <= 10
// // || this.produit.quantity < 10 && this.quantity <= this.produit.quantity
// )
// {
  basketService.add(this.produit,this.quantity,this.quantityMax);
             this.quantity=0;
// }

         

        }
    },

    created() {


        if(this.produit.quantity > 10){
this.quantityMax = 10
        }
        else if((this.produit.quantity <= 10)){
            this.quantityMax = this.produit.quantity
        }
         else if((this.produit.quantity == 0)){
            this.quantityMax = 0
        }
        
    },

    
}
</script>