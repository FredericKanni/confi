<template>
  <v-app>
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
      <navbar></navbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <snackbar/>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import snackbar from "../views/components/snackbar.vue";
// import {EventBus} from "../_helpers/event.bus";

/* import Dashboard from "../navigation/Dashboard"; */
export default {
  components: {
    Navbar,
    //Dashboard,
    Footer: Footer,
    snackbar
  },
//   mounted(){
// EventBus.$on('toto', (basket) => {
//           console.log(basket)
//         })
//   }
};

</script>