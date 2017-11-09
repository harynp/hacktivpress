import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

const state = {
  tmpArticles : []
}

const mutations = {
  setArticles (state, payload) {
    console.log('data di mutations', payload);
    state.tmpArticles = payload
  },
  saveArticles (state,payload) {
    console.log('ini payload',payload);
    state.tmpArticles.push(payload)
  }
}

const actions = {
  getArticles ({ commit }) {
    http.get('/articles')
    .then(({ data }) => {
      console.log('data di actions: ', data)
      commit('setArticles', data)
    })
    .catch(err => console.error(err))
  },
  submitArticles ({commit}, newArticles) {
    http.post('/articles', newArticles)
    .then(({ data })=>{
      commit('saveArticles', data)
    })
    .catch(err => console.error(err))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
