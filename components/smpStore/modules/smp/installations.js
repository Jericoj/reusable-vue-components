import $axios from '../../ApiConnectionSmp.js'

const VERSION = 'v1'
// state
const state = {
  installationsLoading: false,
  installationsDataLoaded: false,
  installationsData: null
}

// getters
const getters = {
  getLoaderInstallationsState () {
    return state.installationsLoading
  },
  getDataLoadedInstallationsState () {
    return state.installationsDataLoaded
  },
  getInstallationsData () {
    return state.installationsData
  }
}

// actions
const actions = {
  updateInstallations ({commit}, data) {
    try {
      commit('SET_LOADER_INSTALLATIONS', {installationsLoading: true})
      commit('SET_DATA_LOADED_INSTALLATIONS', {installationsDataLoaded: false})
      commit('SET_DATA_INSTALLATIONS', {installationsData: null})
      $axios.post('/instalations/' + VERSION + '/modify', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER_INSTALLATIONS', {installationsLoading: false})
          commit('SET_DATA_LOADED_INSTALLATIONS', {installationsDataLoaded: true})
          commit('SET_DATA_INSTALLATIONS', {installationsData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_INSTALLATIONS', {installationsLoading: false})
          commit('SET_DATA_LOADED_INSTALLATIONS', {installationsDataLoaded: true})
          commit('SET_DATA_INSTALLATIONS', {installationsData: error})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_INSTALLATIONS', {installationsLoading: false})
      return error
    }
  },
  getAllInstallations ({ commit }, data) {
    try {
      commit('SET_LOADER_INSTALLATIONS', {installationsLoading: true})
      commit('SET_DATA_LOADED_INSTALLATIONS', {installationsDataLoaded: false})
      commit('SET_DATA_INSTALLATIONS', {installationsData: null})
      $axios.post('/instalations/' + VERSION + '/all', data)
        .then(result => {
          // console.log('installations: ' + JSON.stringify(result.data, null, 4))
          commit('SET_LOADER_INSTALLATIONS', {installationsLoading: false})
          commit('SET_DATA_LOADED_INSTALLATIONS', {installationsDataLoaded: true})
          commit('SET_DATA_INSTALLATIONS', {installationsData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_INSTALLATIONS', {installationsLoading: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_INSTALLATIONS', {installationsLoading: false})
      return error
    }
  },
  loaderInstallations ({ commit }, actions) {
    commit('SET_LOADER_INSTALLATIONS', actions)
  },
  dataLoadeInstallations ({ commit }, actions) {
    commit('SET_DATA_LOADED_INSTALLATIONS', actions)
  },
  InstallationsData ({ commit }, actions) {
    commit('SET_DATA_INSTALLATIONS', actions)
  }
}

// mutations
const mutations = {
  'SET_LOADER_INSTALLATIONS' (state, actions) {
    state.installationsLoading = actions.installationsLoading === true
  },
  'SET_DATA_LOADED_INSTALLATIONS' (state, actions) {
    state.installationsDataLoaded = actions.installationsDataLoaded === true
  },
  'SET_DATA_INSTALLATIONS' (state, actions) {
    state.installationsData = actions.installationsData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
