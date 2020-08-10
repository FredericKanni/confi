import { basketService } from "../_services/basket.service";
import { apiServices } from '../_services/api.services'
export default {
    data() {
        return {




        }
    },

    methods: {




        pushPanier() {

            let promise = basketService.pushBasket();

            promise.then(response => {
                    console.log("Données enregistrée")
                        //  console.log(response.data.order);
                    console.log(response);
                })
                .catch()

        },


    },


}