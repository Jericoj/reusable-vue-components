import $axios from '../../ApiConnectionSmp.js'

const VERSION = 'v1'
// state
const state = {
  loading: false,
  dataLoaded: false,
  dataAdd: false,
  dataRemove: false,
  dataModify: false,
  dataDevicesConfig: null
}

// getters
const getters = {
  getLoaderDevicesConfigState () {
    return state.loading
  },
  getDataLoadedDevicesConfigState () {
    return state.dataLoaded
  },
  getDataAddDevicesConfigState () {
    return state.dataAdd
  },
  getDataRemoveDevicesConfigState () {
    return state.dataRemove
  },
  getDataModifyDevicesConfigState () {
    return state.dataModify
  },
  getDataDevicesConfig () {
    return state.dataDevicesConfig
  }
}

// actions
const actions = {
  getAllDevicesConfig ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: null})
      $axios.post('/devicesconfig/' + VERSION + '/all', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_DEVICE-CONFIG', {dataDevicesConfig: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  getOneDeviceConfig ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: null})
      $axios.post('/devicesconfig/' + VERSION + '/one', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  modifyDeviceConfig ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_MODIFY', {dataModify: false})
      commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: null})
      $axios.post('/devicesconfig/' + VERSION + '/modify', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_MODIFY', {dataModify: true})
          commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  addDeviceConfig ({ commit }, data) {
    try {
      // console.log('addBin')
      // console.log(data)
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_ADD', {dataAdd: false})
      commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: null})
      $axios.post('/devicesconfig/' + VERSION + '/add', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_ADD', {dataAdd: true})
          commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
      commit('SET_LOADER', {loader: false})
      return error
    }
  },
  removeDeviceConfig ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_REMOVE', {dataRemove: false})
      commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: null})
      $axios.post('/devicesconfig/' + VERSION + '/remove', data)
        .then(result => {
          // console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_REMOVE', {dataRemove: true})
          commit('SET_DATA_DEVICE_CONFIG', {dataDevicesConfig: result.data})
          return result.data
        })
        .catch(error => {
          // console.log(error)
          commit('SET_LOADER', {loader: false})
          return error
        })
    } catch (error) {
      // console.log(error)
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
  dataDevicesConfig ({ commit }, actions) {
    commit('SET_DATA_DEVICE_CONFIG', actions)
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
  'SET_DATA_DEVICE_CONFIG' (state, actions) {
    state.dataDevicesConfig = actions.dataDevicesConfig
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
