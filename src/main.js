import Vue from 'vue'
import App from './App.vue'
import { library } from  "@fortawesome/fontawesome-svg-core"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from './plugins/vuetify'

library.add(faPlus, faCheck, faTrash)

Vue.component("font-awesome-icon" , FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
        vuetify,
        render: (h) => h(App),
}).$mount('#app');
