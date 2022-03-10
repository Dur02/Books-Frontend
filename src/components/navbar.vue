<template>
    <el-row>
        <el-col v-if="this.$store.state.profile.role == 1" class="nav" :span="8" @click="changeFun(1)">
          图书录入
        </el-col>
        <el-col class="nav" :span="8" @click="changeFun(2)">
          搜索
        </el-col>
        <el-col class="nav" :span="8" @click="changeFun(3)">
          借还
        </el-col>
<!--      此处判断权限，可存放在localeStorage-->
    </el-row>
</template>

<script>
export default {
  name: "navbar",
  methods:{
    changeFun(num) {
      this.$store.commit("changeFun",num)
    }
  }
}
</script>

<style scoped>
.nav{
  margin: 0 auto;
  /*background-color: aqua;*/
  text-align: center;
  height: 10vh;
}
.nav:hover{
  cursor: pointer;
  color: darkcyan;
}
</style>