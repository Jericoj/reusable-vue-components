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
  dataWorkstations: null
}

// getters
const getters = {
  getLoaderWorkstationsState () {
    return state.loading
  },
  getDataLoadedWorkstationsState () {
    return state.dataLoaded
  },
  getDataAddWorkstationsState () {
    return state.dataAdd
  },
  getDataRemoveWorkstationsState () {
    return state.dataRemove
  },
  getDataModifyWorkstationsState () {
    return state.dataModify
  },
  getErrorsStateWorkstations () {
    return state.errors
  },
  getDataWorkstations () {
    return state.dataWorkstations
  }
}

// actions
const actions = {
  getVisorAllWorkstations ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_WORKSTATIONS', {dataWorkstations: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/workstationsconfig/' + VERSION + '/visorall', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_WORKSTATIONS', {dataWorkstations: result.data})
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
  getAllWorkstations ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_WORKSTATIONS', {dataWorkstations: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/workstationsconfig/' + VERSION + '/all', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_WORKSTATIONS', {dataWorkstations: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_ERRORS', {errors: true})
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_ERRORS', {errors: true})
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  getOneWorkstation ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_WORKSTATIONS', {dataWorkstations: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/workstationsconfig/' + VERSION + '/one', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_WORKSTATIONS', {dataWorkstations: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_ERRORS', {errors: true})
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_ERRORS', {errors: true})
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  modifyWorkstation ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_MODIFY', {dataModify: false})
      commit('SET_DATA_WORKSTATIONS', {dataWorkstations: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/workstationsconfig/' + VERSION + '/modify', data)
        .then(result => {
          // console.log('modifyWorkstation')
          // console.log(state.errors)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_MODIFY', {dataModify: true})
          commit('SET_DATA_WORKSTATIONS', {dataWorkstations: result.data})
          // console.log('Errors :' + state.errors)
          // console.log('DataModify :' + state.dataModify)
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_ERRORS', {errors: true})
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_ERRORS', {errors: true})
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  addWorkstation ({ commit }, data) {
    try {
      // console.log('addBin')
      // console.log(data)
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_ADD', {dataAdd: false})
      commit('SET_DATA_WORKSTATIONS', {dataWorkstations: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/workstationsconfig/' + VERSION + '/add', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_ADD', {dataAdd: true})
          commit('SET_DATA_WORKSTATIONS', {dataWorkstations: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_ERRORS', {errors: true})
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_ERRORS', {errors: true})
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  removeWorkstation ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_REMOVE', {dataRemove: false})
      commit('SET_DATA_WORKSTATIONS', {dataWorkstations: null})
      commit('SET_ERRORS', {errors: false})
      $axios.post('/workstationsconfig/' + VERSION + '/remove', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_REMOVE', {dataRemove: true})
          commit('SET_DATA_WORKSTATIONS', {dataWorkstations: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_ERRORS', {errors: true})
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_ERRORS', {errors: true})
      commit('SET_LOADER', {loader: false})
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
  dataWorkstations ({ commit }, actions) {
    commit('SET_DATA_WORKSTATIONS', actions)
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
  'SET_DATA_WORKSTATIONS' (state, actions) {
    state.dataWorkstations = actions.dataWorkstations
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
