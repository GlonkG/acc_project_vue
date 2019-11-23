// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import preview from 'vue-photo-preview'
//导入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import Vuex from 'vuex'
import Axios from 'axios'

//导入vant
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);


import { Popup } from 'vant';
Vue.use(Popup);
//引入百度地图
/*import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import BmMarkerClusterer from  'vue-baidu-map/components/extra/MarkerClusterer'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'*/

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = Axios
Vue.use(preview)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
