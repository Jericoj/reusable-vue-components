import $axios from '../ApiConnectionSmp3A.js'
import axios from 'axios'

const VERSION = 'v1'

const axiosConfig = {
  baseURL: './static/fake-login.json'
}
const HTTP = axios.create(axiosConfig)

// state
const state = {
  loading: false,
  isPasswordText: false,
  mqPhone: window.matchMedia('(max-width: 767px)'),
  instalations: null
}

// getters
const getters = {
  getLoaderState () {
    return state.loading
  },
  getIsMobile () {
    return state.mqPhone.matches
  },
  getIsPasswordForm () {
    return state.isPasswordText
  },
  getInstalations () {
    return state.instalations
  }
}

// actions
const actions = {
  async login ({ commit }, data) {
    try {
      const response = await $axios.post('/authentication/' + VERSION + '/execute', data)
      // console.log('login: response = ' +  JSON.stringify(response, null, 4))
      if (response.data.body != null && response.data.errors == null) {
        return response.data
      } else {
        throw new Error('Incorrect username or password')
      }
    } catch (error) {
      // console.log('login: error = ' +  JSON.stringify(error, null, 4))
      console.log(error)
      return error
    }
  },
  async loginFake ({ commit }, data) {
    /********************************************
    // Bloque a modificar con la API del proyecto
    ********************************************/
    let endPoint = data.email ? 'password' : 'login'
    try {
      const response = await HTTP.get() // esto será un post
      if (endPoint === 'login' && response.data[endPoint].user === data.username &&
        response.data[endPoint].password === data.password) {
        response.data = response.data[endPoint]
        return response
      } else if (endPoint === 'password' && response.data[endPoint].email === data.email) {
        response.data = response.data[endPoint]
        return response
      } else {
        throw new Error('Incorrect username or password')
      }
    } catch (error) {
      console.log(error)
      return error
    }
  },
  loader ({ commit }, actions) {
    commit('SET_LOADER', actions)
  },
  instalations ({ commit }, actions) {
    commit('SET_INSTALATIONS', actions)
  }

}

// mutations
const mutations = {
  'SET_LOADER' (state, actions) {
    state.loading = actions.loader === true
    state.isPasswordText = actions.password === true
  },
  'SET_INSTALATIONS' (state, actions) {
    state.instalations = actions.instalations
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
