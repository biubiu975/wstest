import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    username:1234,
    password: '1132',
  },
  getters:{
    getUserName: function(state){
      return state.username + 223344;
    }
  },
  mutations:{
    method1: function(state){
      state.password = 'password1'
    },
    method2: function(state){
      state.password = 'password2'
    }
  },
  actions:{
    clickMethod1(context){
      context.commit('method1');
    },
    clickMethod2(context){
      context.commit('method2');
    }
  }
})

export default store
