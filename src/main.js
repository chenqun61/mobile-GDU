import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'//导入路由
import './css/common.css'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({ store, router }).$mount('#app')