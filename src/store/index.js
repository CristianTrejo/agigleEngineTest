import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/helpers/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    image: {}
  },
  mutations: {
    set_images (state, payload) {
      state.images = payload
    },
    set_image (state, payload) {
      state.image = payload
    }
  },
  actions: {
    getImages ({ commit }, page) {
      http.get('/images?page=' + page).then(res => {
        commit('set_images', res.data)
      }, err => { console.error(err) })
    },
    getImage ({ commit }, id) {
      http.get('/images/' + id).then(res => {
        commit('set_image', res.data)
      }, err => { console.error(err) })
    }
  },
  getters: {
    images: state => state.images,
    image: state => state.image
  },
  modules: {
  }
})
