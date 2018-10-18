import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
const Logine = () =>
  import('@/views/Logine')
const Register = () =>
  import('@/views/Register')
const Index = () =>
  import('@/views/Index')

const Details = () =>
  import('@/views/Details')

const Inquiry = () =>
  import('@/views/Inquiry')

const Img = () =>
  import('@/views/Img')

const Colour = () =>
  import('@/views/Colour')

const CarModel = () =>
  import('@/views/CarModel')
Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/logine',
    name: 'Logine',
    component: Logine
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/details',
    name: 'Details',
    component: Details
  }, {
    path: '/inquiry',
    name: 'Inquiry',
    component: Inquiry
  }, {
    path: '/img',
    name: 'Img',
    component: Img
  }, {
    path: '/colour',
    name: 'Colour',
    component: Colour
  }, {
    path: '/carModel',
    name: 'CarModel',
    component: CarModel
  }, {
    path: '/',
    redirect: '/logine'
  }]
})

router.beforeEach((to, from, next) => {
  store.commit('changeLoading', true);
  next();
})

router.afterEach(() => {
  store.commit('changeLoading', false)
})
export default router