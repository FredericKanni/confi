export default {
    props: {
        producteur: {
            default: function() {
                return {

                }
            }
        },
        isModification: {
            default: false
        },
    },

    data() {
        return {

            prod: {

            },
            drawer: null,

        }
    },

    created() {
        console.log(this.producteur)
            // this.prod = this.producteur
    },



}