// state
const state = {
  sessionToken: null,
  entity: '',
  entityName: '',
  installation: '',
  channel: '',
  channelName: '',
  language: '',
  userId: '',
  userName: 'Front Obps',
  userEmail: 'frontobps@minsait.com'
}

// getters
const getters = {
  getSessionToken (state, getters) {
    if (state.sessionToken === '') {
      state.sessionToken = sessionStorage.getItem('sessionToken')
    }
    console.log('sessionToken=' + state.sessionToken)
    return state.sessionToken
  },
  getInstallation (state, getters) {
    if (state.installation === '') {
      state.installation = sessionStorage.getItem('installation')
    }
    console.log('installation=' + state.installation)
    return state.installation
  },
  getEntity (state, getters) {
    if (state.entity === '') {
      state.entity = sessionStorage.getItem('entity')
    }
    console.log('entity=' + state.entity)
    return state.entity
  },
  getEntityName (state, getters) {
    if (state.entityName === '') {
      state.entityName = sessionStorage.getItem('entityName')
    }
    console.log('entityName=' + state.entityName)
    return state.entityName
  },
  getChannel (state, getters) {
    if (state.channel === '') {
      state.channel = sessionStorage.getItem('channel')
    }
    console.log('channel=' + state.channel)
    return state.channel
  },
  getChannelName (state, getters) {
    if (state.channelName === '') {
      state.channelName = sessionStorage.getItem('channelName')
    }
    console.log('channelName=' + state.channelName)
    return state.channelName
  },
  getLanguage (state, getters) {
    console.log(getters)
    if (state.language === '') {
      state.language = sessionStorage.getItem('language')
    }
    console.log('language=' + state.language)
    return state.language
  },
  getUserId (state, getters) {
    if (state.userId === '') {
      state.userId = sessionStorage.getItem('userId')
    }
    console.log('userId=' + state.userId)
    return state.userId
  },
  getUserName (state, getters) {
    return state.userName
  },
  getUserEmail (state, getters) {
    return state.userEmail
  }
}

// actions
const actions = {
  setStorage ({ commit }, storageData) {
    console.log('setStorage')
    console.log(storageData)
    if (storageData.data === null) {
      sessionStorage.removeItem(storageData.name)
    } else {
      sessionStorage.setItem(storageData.name, `${storageData.data}`)
    }
  },
  setSessionToken ({ commit, dispatch }, data) {
    dispatch('setStorage', {name: 'sessionToken', data: data})
    commit('SET_TOKEN', {sessionToken: data})
  },
  setEntity ({ commit, dispatch }, data) {
    // console.log(data)
    dispatch('setStorage', {name: 'entity', data: data})
    commit('SET_ENTITY', {entity: data})
  },
  setEntityName ({ commit, dispatch }, data) {
    // console.log(data)
    dispatch('setStorage', {name: 'entityName', data: data})
    commit('SET_ENTITY_NAME', {entityName: data})
  },
  setInstallation ({ commit, dispatch }, data) {
    // console.log(data)
    dispatch('setStorage', {name: 'installation', data: data})
    commit('SET_INSTALLATION', {installation: data})
  },
  setChannelName ({ commit, dispatch }, data) {
    // console.log(data)
    dispatch('setStorage', {name: 'channelName', data: data})
    commit('SET_CHANNEL_NAME', {channelName: data})
  },
  setChannel ({ commit, dispatch }, data) {
    // console.log(data)
    dispatch('setStorage', {name: 'channel', data: data})
    commit('SET_CHANNEL', {channel: data})
  },
  setLanguage ({ commit, dispatch }, data) {
    // console.log(data)
    dispatch('setStorage', {name: 'language', data: data})
    commit('SET_LANGUAGE', {language: data})
  },
  setUserId ({ commit, dispatch }, data) {
    dispatch('setStorage', {name: 'userId', data: data})
    commit('SET_USER_ID', {userId: data})
  },
  setUserName ({ commit, dispatch }, data) {
    dispatch('setStorage', {name: 'userName', data: data})
    commit('SET_USER_NAME', {userName: data})
  },
  setUserEmail ({ commit, dispatch }, data) {
    dispatch('setStorage', {name: 'userEmail', data: data})
    commit('SET_USER_EMAIL', {userEmail: data})
  }
}

// mutations
const mutations = {
  'SET_TOKEN' (state, actions) {
    state.sessionToken = actions.sessionToken
  },
  'SET_INSTALLATION' (state, actions) {
    state.installation = actions.installation
  },
  'SET_ENTITY' (state, actions) {
    state.entity = actions.entity
  },
  'SET_ENTITY_NAME' (state, actions) {
    state.entityName = actions.entityName
  },
  'SET_CHANNEL' (state, actions) {
    state.channel = actions.channel
  },
  'SET_CHANNEL_NAME' (state, actions) {
    state.channelName = actions.channelName
  },
  'SET_LANGUAGE' (state, actions) {
    state.language = actions.language
  },
  'SET_USER_ID' (state, actions) {
    state.userId = actions.userId
  },
  'SET_USER_NAME' (state, actions) {
    state.userName = actions.userName
  },
  'SET_USER_EMAIL' (state, actions) {
    state.userEmail = actions.userEmail
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
