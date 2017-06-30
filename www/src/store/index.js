import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  user: {},
  error: {},
  vault: {},
  vaults: [],
  keep: {},
  keeps: [],
  myKeeps: [],
}

let handleError = (err) => {
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,
  //Mutations are the only thing alowed to update the store directly through store.propName

  mutations: {

    setRegister(state, user) {
      state.user = user
    },   

    setLogin(state, user) {
      state.user = user
    },

    setAuth(state, user){
      state.user = user
    },

    setVaults(state, vaults){
      state.vaults = vaults
    },

    setVault(state, vault){
      state.vault = vault
    },

    setKeeps(state, keeps){
      state.keeps = keeps
    },

    setMyKeeps(state, myKeeps){
      state.myKeeps = myKeeps
    }
  },

  actions: {

    register({commit, dispatch}, user) {
      auth.post('register', user)
        .then(res => {         
          if (res.data.error) {
            return handleError(res.data.error)
          }          
          commit('setRegister', res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },

    getAuth({commit, dispatch}) {
      auth('authenticate')
        .then(res => {
          commit('setAuth',  res.data.data)
          router.push('/vaults')  
        }).catch(err => {
          router.push('/login')
        })
    },
    
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          commit('setLogin', res.data.data)
          router.push('/vaults')
        })
        .catch(handleError)
    },  

    getKeepsByVaultId({ commit, dispatch }, vaultId) {
      api('vaults/' + vaultId + '/keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
        .catch(handleError)
    }, 
    
    getVaults({commit, dispatch}) {
      api('uservaults')
        .then(res => {
          commit('setVaults', res.data.data)
        })
        .catch(handleError)
    },

    getVault({commit, dispatch}, id) {
      api('vaults/' + id)
        .then(res => {
          commit('setVault', res.data.data)
        })
        .catch(handleError)
    },

    createVault({commit, dispatch}, vault) {
      api.post('vaults/', vault)
        .then(res => {
          dispatch('getVaults')
        })
        .catch(handleError)
    },

    removeVault({commit, dispatch }, vault) {
      api.delete('vaults/' + vault._id)
        .then(res => {
          dispatch('getVaults')
        })
        .catch(handleError)
    },

    getKeeps({ commit, dispatch }) {
      api('keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
        .catch(handleError)
    },

    getMyKeeps({ commit, dispatch }) {
      api('userkeeps')
        .then(res => {
          commit('setMyKeeps', res.data.data)
        })
        .catch(handleError)
    },

    createKeep({commit, dispatch}, keep) {
      api.post('keeps/', keep)
        .then(res => {
          dispatch('getKeeps')
        })
        .catch(handleError)
    },

  }

})



