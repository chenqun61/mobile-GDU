import App from './app'
import Home from './home/index'
import AboutUs from './aboutUs/index'
import Dealer from './dealer/index'
import Sdk from './sdk/index'
import Gimbal from './gimbal/index'
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home', //home
                component: Home
            },
            {
                path: '/aboutUs', //aboutUs
                component: AboutUs
            },
            {
                path: '/sdk', //sdk
                component: Sdk
            },
            {
                path: '/gimbal', //gimbal
                component: Gimbal
            },
            {
                path: '/dealer', //dealer
                component: Dealer
            },
            {
                path: '*', //其他页面，强制跳转到home
                redirect: '/home'
            }
        ]
    }
]