import Vue from 'vue'
import VueRouter from 'vue-router'
import Images from '../views/Images.vue'
import ImageDetail from '../views/ImageDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'images',
    component: Images
  },
  {
    path: '/image/:id',
    name: 'imageDetails',
    component: ImageDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
