import { EventBus } from "../../_helpers/event.bus";
import { basketService } from "../../_services/basket.service";
import {apiServices} from '../../_services/api.services'
export default {
    data() {
        return {

            quantity: "0",
            //itempanier
            itemBasket: [],

            idProduitQuantite:[]



        }
    },

    methods: {



        initTable(itemBasket) {
            this.itemBasket = []
            let counter = 0
            let BreakException = {}
            try {
                for (var key in itemBasket) {
                    var item = itemBasket[key]
                    this.itemBasket.push(item)
                    counter++
                    if (counter === 3) {
                        throw BreakException
                    }
                }
            } catch (e) {
                if (e !== BreakException) {
                    throw e
                }
            }
        },


// pushBasket(){
    
// basketService.pushBasket();
    
//         },












        updateQuantity(product) {

            if (product.quantity == 0) {
                if (confirm("supprimer ?")) {
                    basketService.replaceQuantity(product)
                } 
                 else {
                    product.quantity = 1
                
                 }
            }
          //  console.log(product.quantity)
//console.log(product)
        },

        initQuantity() {
            this.quantity = basketService.basketSizeRecup();

            //bus de communication le $emit vient de basket.service.js
            EventBus.$on('basketSize', basketSize => {


                this.quantity = basketSize
                this.initTable(basketService.getCurrentBasket())
            });

        },

    },

    created() {

        this.initQuantity();
        this.initTable(basketService.getCurrentBasket())
        // console.log(this.itemBasket)

    },
}