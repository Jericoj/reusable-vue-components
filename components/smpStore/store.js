import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import login from './modules/login'
import sessionParameters from './modules/sessionParameters'

//  smp
import workstationsConfig from './modules/smp/workStationsConfig'
import devicesConfig from './modules/smp/devicesConfig'
import printers from './modules/smp/printers'
import stamps from './modules/smp/stamps'
import userMaintenance from './modules/smp/userMaintenance'
import userProfiles from './modules/smp/userProfiles'
import installations from './modules/smp/installations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    sessionParameters,
    workstationsConfig,
    devicesConfig,
    printers,
    stamps,
    userMaintenance,
    userProfiles,
    installations
  }
})
