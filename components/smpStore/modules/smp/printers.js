import $axios from '../../ApiConnectionSmp.js'

const VERSION = 'v1'
// state
const state = {
  loading: false,
  dataLoaded: false,
  dataAdd: false,
  dataRemove: false,
  dataModify: false,
  dataPrinters: null
}

// getters
const getters = {
  getLoaderPrintersState () {
    return state.loading
  },
  getDataLoadedPrintersState () {
    return state.dataLoaded
  },
  getDataAddPrintersState () {
    return state.dataAdd
  },
  getDataRemovePrintersState () {
    return state.dataRemove
  },
  getDataModifyPrintersState () {
    return state.dataModify
  },
  getDataPrinters () {
    return state.dataPrinters
  }
}

// actions
const actions = {
  getVisorAllPrinters ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_PRINTERS', {dataPrinters: null})
      $axios.post('/printers/' + VERSION + '/visorall', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_PRINTERS', {dataPrinters: result.data})
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
  getAllPrinters ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_PRINTERS', {dataPrinters: null})
      $axios.post('/printers/' + VERSION + '/all', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_PRINTERS', {dataPrinters: result.data})
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
  getOnePrinter ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_LOADED', {dataLoaded: false})
      commit('SET_DATA_PRINTERS', {dataPrinters: null})
      $axios.post('/printers/' + VERSION + '/one', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_LOADED', {dataLoaded: true})
          commit('SET_DATA_PRINTERS', {dataPrinters: result.data})
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
  modifyPrinter ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_MODIFY', {dataModify: false})
      commit('SET_DATA_PRINTERS', {dataPrinters: null})
      $axios.post('/printers/' + VERSION + '/modify', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_MODIFY', {dataModify: true})
          commit('SET_DATA_PRINTERS', {dataPrinters: result.data})
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
  addPrinter ({ commit }, data) {
    try {
      console.log('addBin')
      console.log(data)
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_ADD', {dataAdd: false})
      commit('SET_DATA_PRINTERS', {dataPrinters: null})
      $axios.post('/printers/' + VERSION + '/add', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_ADD', {dataAdd: true})
          commit('SET_DATA_PRINTERS', {dataPrinters: result.data})
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
  removePrinter ({ commit }, data) {
    try {
      commit('SET_LOADER', {loader: true})
      commit('SET_DATA_REMOVE', {dataRemove: false})
      commit('SET_DATA_PRINTERS', {dataPrinters: null})
      $axios.post('/printers/' + VERSION + '/remove', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER', {loader: false})
          commit('SET_DATA_REMOVE', {dataRemove: true})
          commit('SET_DATA_PRINTERS', {dataPrinters: result.data})
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
  dataPrinters ({ commit }, actions) {
    commit('SET_DATA_PRINTERS', actions)
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
  'SET_DATA_PRINTERS' (state, actions) {
    state.dataPrinters = actions.dataPrinters
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
