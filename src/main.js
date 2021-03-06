import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2';

require('firebase/firestore')
Vue.use(VueFirestore)

window.Swal = Swal;

window.$ = window.jQuery = jQuery

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function() {

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }


});