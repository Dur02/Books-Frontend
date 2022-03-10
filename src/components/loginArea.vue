<template>
  <div class="mod_section">
    <el-form
        label-position="top"
        label-width="100px"
        :model="accountInf"
        style="max-width: 500px;"
    >
      <el-form-item label="用户名">
        <el-input v-model="accountInf.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="accountInf.password"></el-input>
      </el-form-item>
      <el-form-item v-if="alertInf !=='' " label="">
        <p class="alert">{{alertInf}}</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round style="margin: 0 auto" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
<!--    此处表单可加验证功能，样式也可进一步修改，为加快效率，此处先省略，之后改进-->
<!--    此处部分错误登录操作后端会返回bad request，为提高体验也可后端返回其余信息提示用户-->
  </div>
<!--  <el-button danger @click="clear">清除缓存</el-button>-->
</template>

<script>
import {login} from "@/plugin/axios";

export default {
  name: "loginArea",
  data () {
    return {
      accountInf:{
        username:"Dur02",
        password:"02468"
      },
      alertInf:""
    }
  },
  methods:{
    login() {
      login(this.accountInf)
          .then(res=>{
            console.log(res)
            if (res.data.code === 200) {
              this.$store.commit('set_authorization',res.headers.authorization)
              this.$store.commit('set_profile',res.data.data)
              this.$router.push("/Home")
              // console.log(this.$store.state.authorization)
            }else{
              this.alertInf = res.data.msg
            }
          })
          .catch(err=>{
            // console.log(err)
            this.alertInf = "登录失败，请检查错误"
          })
    },
    // clear(){
    //   console.log(localStorage.getItem("token"))
    //   console.log(sessionStorage.getItem("profile"))
    //   localStorage.removeItem("token")
    //   sessionStorage.removeItem("profile")
    //   console.log(localStorage.getItem("token"))
    //   console.log(sessionStorage.getItem("profile"))
    // }
  }
}
</script>

<style scoped>
.mod_section{
  position: absolute;
  top: 50%;
  left: 50%;
  /*width: 900px;*/
  /*background-color: aqua;*/
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
.alert{
  margin: 0 auto;
}
</style>