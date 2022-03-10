<template>
  <div class="mod_section">
    <el-form
        label-width="100px"
        :model="book"
        style="max-width: 460px"
    >
      <el-form-item label="书名">
        <el-input v-model="book.bookname"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="book.number"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="book.author"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button primary @click="update">录入</el-button>
      </el-form-item>
      <!--    可做表单验证、数字输入框限制等其他功能-->
    </el-form>
  </div>
</template>

<script>
import {update} from "@/plugin/axios";
export default {
  name: "insert",
  data() {
    return{
      book:{bookname: '', number: '', author: ''},
    }
  },
  methods:{
    update(){
      update(this.book)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
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