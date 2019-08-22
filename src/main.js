import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/index';
import Vant from 'vant';
import loadsh from 'lodash';
import moment from 'moment';
import 'vant/lib/index.css';
import "amfe-flexible";

Vue.use(Vant);

Vue.config.productionTip = false;
Vue.prototype._ = loadsh;
Vue.prototype.$moment = moment;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
