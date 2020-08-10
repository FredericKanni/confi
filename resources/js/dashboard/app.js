import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import Layout from './layouts/Layout';
import 'vuetify/dist/vuetify.min.css';
import VStripeElements from 'v-stripe-elements/lib';

// import vuetify from './src/plugin/vuetify'
// src/main.js
import LoadScript from 'vue-plugin-load-script'

Vue.use(LoadScript)



Vue.use(Vuetify);
Vue.use(VStripeElements);


const app = new Vue({
    el: '#admin',
    vuetify: new Vuetify({}),
    router: Routes,
    components: { Layout }
})


export default new Vuetify(app);