import { basketService } from '../_services/basket.service'
import { apiServices } from '../_services/api.services'
export default {



    data() {
        return {

            e1: 1,

            selected: false,
            commandList: {},
            panel: [0],
            commande: {
                paiement: '',
                livraison: {
                    adresse: '',
                    ville: '',
                    codePostal: '',
                    pays: ''
                },

                facturation: {
                    adresse: '',
                    ville: '',
                    codePostal: '',
                    pays: ''
                },

            },

            source: null,
            apiKey: 'pk_test_51GubguEFBEwEutzrRD48zBSo4GaSGhtnhZmB6uIXPRHx6BFMEXtWfRwYHSVRASsPjYPkIneyRcAE4KWfpf1vry9t00LkBr0MTN',
            intentToken: ''
        }
    },

    created() {

        this.getPanier();
        console.log(this.commandList);


    },


    methods: {




        getPanier() {
            this.commandList = basketService.getCurrentBasket();
        },

        datasInput() {
            if (!this.selected) {
                _.assign(this.commande.facturation, this.commande.livraison)

            }
            this.e1 = 3
            console.log(this.commande)
            basketService.pushBasket(this.commande)


        },



        process() {
            console.log(this.source)


            // this.commande.paiement = this.source;

            // basketService.paiement(this.commande)
        }
    },




}