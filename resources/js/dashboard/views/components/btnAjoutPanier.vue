<template>
    <div>
       <v-btn  :disabled="quantity==0" small color="primary" @click="add">ajouter</v-btn>

        <v-text-field
            label="nombre de produits"
            type="number"
            single-line
            min="0"
            max="50"
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
        }
    },

    props:{
       produit: {
           required:true,
        },
    },

    methods:{
        add(){
           basketService.add(this.produit,this.quantity);
             this.quantity=0;

        }
    }

    
}
</script>