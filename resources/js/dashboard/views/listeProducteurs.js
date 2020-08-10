import { apiServices } from '../_services/api.services'
import ProducteursNav from './components/ProducteursNav.vue'
export default {

    components: {
        ProducteursNav
    },

    data() {
        return {
            producteurs: [],

            headers: [
                { text: 'Nom', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'Actions', value: 'actions' },
            ],


        }
    },



    methods: {
        getProducteurs() {


            apiServices.get('/api/producteurs')
                .then(({ data }) => {
                    // console.log(data)

                    data.data.forEach(item => {
                        this.producteurs.push(item)
                    })
                })

            console.log(this.producteurs)

        }
    },

    created() {
        this.getProducteurs();
    },
}