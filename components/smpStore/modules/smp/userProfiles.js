import $axios from '../../ApiConnectionSmp.js'

const VERSION = 'v1'
// state
const state = {
  userProfilesLoading: false,
  userProfilesDataLoaded: false,
  userProfilesData: null
}

// getters
const getters = {
  getLoaderUserProfilesState () {
    return state.userProfilesLoading
  },
  getDataLoadedUserprofilesState () {
    return state.userProfilesDataLoaded
  },
  getUserProfilesData () {
    return state.userProfilesData
  }
}

// actions
const actions = {
  updateUserProfiles ({commit}, data) {
    try {
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: true})
      commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: false})
      commit('SET_DATA_USERPROFILES', {userProfilesData: null})
      $axios.post('/profiles/' + VERSION + '/modify', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: error})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
      return error
    }
  },
  deleteUserProfiles ({commit}, data) {
    try {
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: true})
      commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: false})
      commit('SET_DATA_USERPROFILES', {userProfilesData: null})
      $axios.post('/profiles/' + VERSION + '/remove', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: error})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
      return error
    }
  },
  addUserProfiles ({ commit }, data) {
    try {
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: true})
      commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: false})
      commit('SET_DATA_USERPROFILES', {userProfilesData: null})
      $axios.post('/profiles/' + VERSION + '/add', data)
        .then(result => {
          console.log(result.data)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: error})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
      return error
    }
  },
  getAllUserProfiles ({ commit }, data) {
    try {
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: true})
      commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: false})
      commit('SET_DATA_USERPROFILES', {userProfilesData: null})
      $axios.post('/profiles/' + VERSION + '/all', data)
        .then(result => {
          // console.log('profiles: ' + JSON.stringify(result.data, null, 4))
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
      return error
    }
  },
  getTypesUserProfiles ({ commit }, data) {
    try {
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: true})
      commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: false})
      commit('SET_DATA_USERPROFILES', {userProfilesData: null})
      $axios.post('/profiles/' + VERSION + '/types/all', data)
        .then(result => {
          // console.log('profiles: ' + JSON.stringify(result.data, null, 4))
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          commit('SET_DATA_LOADED_USERPROFILES', {userProfilesDataLoaded: true})
          commit('SET_DATA_USERPROFILES', {userProfilesData: result.data})
          return result.data
        })
        .catch(error => {
          console.log(error)
          commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
          return error
        })
    } catch (error) {
      console.log(error)
      commit('SET_LOADER_USERPROFILES', {userProfilesLoading: false})
      return error
    }
  },
  loaderuserProfiles ({ commit }, actions) {
    commit('SET_LOADER_USERPROFILES', actions)
  },
  dataLoadeuserProfiles ({ commit }, actions) {
    commit('SET_DATA_LOADED_USERPROFILES', actions)
  },
  userProfilesData ({ commit }, actions) {
    commit('SET_DATA_USERPROFILES', actions)
  }
}

// mutations
const mutations = {
  'SET_LOADER_USERPROFILES' (state, actions) {
    state.userProfilesLoading = actions.userProfilesLoading === true
  },
  'SET_DATA_LOADED_USERPROFILES' (state, actions) {
    state.userProfilesDataLoaded = actions.userProfilesDataLoaded === true
  },
  'SET_DATA_USERPROFILES' (state, actions) {
    state.userProfilesData = actions.userProfilesData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
