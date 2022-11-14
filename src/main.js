import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { locale });

import $ from 'jquery'
global.$ = $
global.jQuery = $

import axios from 'axios'
import './assets/tailwind.css'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
Vue.use(axios)

global.axios = axios

import AppNavbar from './components/AppNavbar.vue';
import AppAside from './components/AppAside.vue';
import Check from './components/check.vue'
import Vuelidate from 'vuelidate'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(Vuelidate)
Vue.component('AppAside', AppAside);
Vue.component('AppNavbar', AppNavbar);
Vue.component('check', Check);

Vue.config.productionTip = false

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent
} from 'echarts/components'

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
]);
Vue.component('v-chart', ECharts)


import '@progress/kendo-theme-default/dist/all.css';


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')