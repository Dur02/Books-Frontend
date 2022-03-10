import { createStore } from 'vuex'

export default createStore({
  state: {
    authorization:"",
    profile:{},
    function:2
  },
  mutations: {
    set_authorization (state,authorization){
      state.authorization = authorization
      localStorage.setItem("token",state.authorization)
      // 可保存在用户本地，提高体验
    },
    set_profile (state,profile){
      state.profile = profile
      sessionStorage.setItem("profile",state.profile)
    },
    changeFun (state,num) {
      state.function = num
    },
    removeAll (){
      localStorage.removeItem("token")
      sessionStorage.removeItem("profile")
    }
  },
  actions: {
  },
  modules: {
  }
})
