import $axios from '../../ApiConnectionSmp.js'

const VERSION = 'v1'
// state
const state = {
  loading: false,
  dataLoaded: false,
  dataAdd: false,
  dataRemove: false,
  dataModify: false,
  errors: false,
  dataUsersMaintenance: null
}

// getters
const getters = {
  getLoaderUsersMaintenanceState () {
    return state.loading
  },
  getDataLoadedUsersMaintenanceState () {
    return state.dataLoaded
  },
  getDataAddUsersMaintenanceState () {
    return state.dataAdd
  },
  getDataRemoveUsersMaintenanceState () {
    return state.dataRemove
  },
  getDataModifyUsersMaintenanceState () {
    return state.dataModify
  },
  getErrorsStateUsersMaintenance () {
    return state.errors
  },
  getDataUsersMaintenance () {
    return state.dataUsersMaintenance
  }
}

// actions
const actions = {
  getAllUsersMaintenance ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/users/' + VERSION + '/all', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          commit('SET_ERRORS', {errors: true})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      commit('SET_ERRORS', {errors: true})
      return error
    }
  },
  getOneUserMaintenance ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/users/' + VERSION + '/one', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          commit('SET_ERRORS', {errors: true})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      commit('SET_ERRORS', {errors: true})
      return error
    }
  },
  modifyUserMaintenance ({ commit }, data) {
    try {
      // console.log('modifyUserMaintenance')
      // console.log(data)
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_MODIFY', {dataModify: false})
      commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/users/' + VERSION + '/modify', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_MODIFY', {dataModify: true})
          commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          commit('SET_ERRORS', {errors: true})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      commit('SET_ERRORS', {errors: true})
      return error
    }
  },
  addUserMaintenance ({ commit }, data) {
    try {
      // console.log('addUserMaintenance')
      // console.log(data)
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_ADD', {dataAdd: false})
      commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/users/' + VERSION + '/add', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_ADD', {dataAdd: true})
          commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          commit('SET_ERRORS', {errors: true})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      commit('SET_ERRORS', {errors: true})
      return error
    }
  },
  removeUserMaintenance ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_REMOVE', {dataRemove: false})
      commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/users/' + VERSION + '/remove', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_REMOVE', {dataRemove: true})
          commit('SET_DATA_USERS_MAINTENANCE', {dataUsersMaintenance: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          commit('SET_ERRORS', {errors: true})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      commit('SET_ERRORS', {errors: true})
      return error
    }
  },
  loader ({ commit }, actions) {
    commit('SET_LOADER', actions)
  },
  dataLoaded ({ commit }, actions) {
    commit('SET_DATA_LOADED', actions)
  },
  dataErrors ({ commit }, actions) {
    commit('SET_ERRORS', actions)
  },
  dataUsersMaintenance ({ commit }, actions) {
    commit('SET_DATA_USERS_MAINTENANCE', actions)
  }
}

// mutations
const mutations = {
  'SET_LOADER' (state, actions) {
    state.loading = actions.loader === true
  },
  'SET_DATA_LOADED' (state, actions) {
    state.dataLoaded = actions.dataLoaded === true
  },
  'SET_DATA_ADD' (state, actions) {
    state.dataAdd = actions.dataAdd === true
  },
  'SET_DATA_REMOVE' (state, actions) {
    state.dataRemove = actions.dataRemove === true
  },
  'SET_DATA_MODIFY' (state, actions) {
    state.dataModify = actions.dataModify === true
  },
  'SET_ERRORS' (state, actions) {
    state.errors = actions.errors === true
  },
  'SET_DATA_USERS_MAINTENANCE' (state, actions) {
    state.dataUsersMaintenance = actions.dataUsersMaintenance
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
