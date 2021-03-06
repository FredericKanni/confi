import { basketService } from "../../_services/basket.service"

export default {
    data() {
        return {
            e1: 1,
            orderList: [],
            nom: '',
            prenom: '',
            ville: '',
            codePostal: '',
            pays: '',
            adresse: '',
            hidden: true,
            checkbox: false,
        }
    },

    created() {
        this.getOrder();
    },
    methods: {
        getOrder() {
            this.orderList = basketService.getCurrentBasket();
        },
        displayInputs() {
            if (this.checkbox === true) {
                this.hidden = false;
            } else {
                this.hidden = true;
            }
        }
    }
}