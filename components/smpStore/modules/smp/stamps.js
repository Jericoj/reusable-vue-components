import $axios from '../../ApiConnectionSmp.js'

const VERSION = 'v1'
// state
const state = {
  loading: false,
  dataLoaded: false,
  dataAdd: false,
  dataRemove: false,
  dataModify: false,
  dataStamps: null
}

// getters
const getters = {
  getLoaderStampsState () {
    return state.loading
  },
  getDataLoadedStampsState () {
    return state.dataLoaded
  },
  getDataAddStampsState () {
    return state.dataAdd
  },
  getDataRemoveStampsState () {
    return state.dataRemove
  },
  getDataModifyStampsState () {
    return state.dataModify
  },
  getDataStamps () {
    return state.dataStamps
  }
}

// actions
const actions = {
  getVisorAllStamps ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_STAMPS', {dataStamps: null})
      $axios.post('/stamps/' + VERSION + '/visorall', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_STAMPS', {dataStamps: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  getAllStamps ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_STAMPS', {dataStamps: null})
      $axios.post('/stamps/' + VERSION + '/all', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_STAMPS', {dataStamps: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  getOneStamp ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_STAMPS', {dataStamps: null})
      $axios.post('/stamps/' + VERSION + '/one', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_STAMPS', {dataStamps: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  modifyStamp ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_MODIFY', {dataModify: false})
      commit('SET_DATA_STAMPS', {dataStamps: null})
      $axios.post('/stamps/' + VERSION + '/modify', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_MODIFY', {dataModify: true})
          commit('SET_DATA_STAMPS', {dataStamps: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  addStamp ({ commit }, data) {
    try {
      console.log('addBin')
      console.log(data)
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_ADD', {dataAdd: false})
      commit('SET_DATA_STAMPS', {dataStamps: null})
      $axios.post('/stamps/' + VERSION + '/add', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_ADD', {dataAdd: true})
          commit('SET_DATA_STAMPS', {dataStamps: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  removeStamp ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_REMOVE', {dataRemove: false})
      commit('SET_DATA_STAMPS', {dataStamps: null})
      $axios.post('/stamps/' + VERSION + '/remove', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_REMOVE', {dataRemove: true})
          commit('SET_DATA_STAMPS', {dataStamps: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      console.log(error)
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
  dataStamps ({ commit }, actions) {
    commit('SET_DATA_STAMPS', actions)
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
  'SET_DATA_STAMPS' (state, actions) {
    state.dataStamps = actions.dataStamps
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
