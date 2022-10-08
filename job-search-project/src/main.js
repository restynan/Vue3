//import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
//import Vue from 'vue'
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import App from "@/App.vue";
import "@/assets/tailwind.css";

//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)


library.add(faSearch)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

