<template>
  <router-link to="/"></router-link>
  <router-view/>
</template>

<script>
export default {
  name:'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isShow:true
    }
  },
  methods:{
    reload(){
      this.isShow=false
      this.$nextTick(function () {
        this.isShow = true
      })
    }
  }
}
</script>
<style>

</style>
