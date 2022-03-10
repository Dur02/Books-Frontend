<template>
  <div class="search_bar">
    <el-input v-model="input.key" placeholder="Please input"/>
    <el-button type="primary" @click="search(this.input)">搜索</el-button>
  </div>

  <div class="data_tab">
    <el-table :data="book" border style="width: 69%;margin: 100px auto">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="bookname" label="书名" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="number" label="数目" />
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-input-number v-model="num[scope.$index]" :min="1" :max="scope.row.number" />
          <el-button type="text" size="small" @click="borrow(scope.$index,scope.row,this.num[scope.$index])">
            借书
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {books,search,borrow} from "@/plugin/axios";

export default {
  name: "",
  data () {
    return{
      input:{key:""},
      book:[],
      num:Array(1000).fill().map((e,i)=>1)
    }
  },
  methods:{
    search(key) {
      if (this.$store.state.profile.id !== undefined){
        search(key)
            .then(res=>{
              this.book = res.data.data
            })
            .catch(err=>{
              console.log(err)
            })
      }
    },
    borrow(index,row,num) {
      if (this.$store.state.profile.id !== undefined){
        row.number = num
        // console.log(row.number)
        // 当手动输入超过总量的数目，组件会把值自动设为最大值，避免超过库存量
        borrow(row)
            .then(res=>{
              row.number = res.data.data.number
            })
            .catch(err=>{
              console.log(err)
            })
      }
    }
  },
  beforeMount() {
    // console.log(this.$store.state.profile.id)
    if (this.$store.state.profile.id !== undefined){
      books()
          .then(res=>{
            this.book = res.data.data
          })
          .catch(err=>{
            console.log(err)
          })
    }
  },
  watch:{
    input:{
      handler(newValue,oldValue) {
        if (this.$store.state.profile.id !== undefined){
          if (newValue.key === ""){
            books()
                .then(res=>{
                  this.book = res.data.data
                })
                .catch(err=>{
                  console.log(err)
                })
          }
        }
      },
      deep:true
    }
  }
}
</script>

<style scoped>
.search_bar{
  width: 40%;
  margin: 0 auto;
}
.el-input{
  width: 80%;
}
.data_tab{
  margin: 0 auto;
  text-align: center;
}
</style>