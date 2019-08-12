<template>
    <div>
      <el-button v-on:click="clickName" type="primary">主要按钮</el-button>
      <el-button v-on:click="clickName2" type="success">成功按钮</el-button>
      <h3>testvuex</h3>
      <h3>{{this.$store.state.username}}</h3>
      <h3>{{this.$store.getters.getUserName}}</h3>
      <h3>{{this.$store.state.password}}</h3>
      <h3>{{passwords}}</h3>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'TestVuex',
    data(){return {
      msg: '12341234',
    }},
    methods:{
      clickName:function(){
        //this.$store.commit("method1")
        this.$store.dispatch('clickMethod1')
        //alert("1234")
      },
      clickName2:function(){
        //this.$store.commit("method2")
        this.$store.dispatch('clickMethod2')
        //alert("2234")
      }
    },
    computed: {
      ...mapState({
        passwords: state=> state.password
      })
    }
  }
</script>

<style scoped>
</style>
