<template>
  <div class="data_tab">
    <el-table :data="history" border style="width: 69%;margin: 100px auto">
      <el-table-column prop="bookid" label="书名" />
      <el-table-column prop="number" label="数目" />
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-input-number v-model="num[scope.$index]" :min="1" :max="scope.row.number" />
          <el-button type="text" size="small" @click="giveback(scope.$index,scope.row,this.num[scope.$index])">
            还书
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {giveback, history, getBookByID} from "@/plugin/axios";
export default {
  name: "giveBack",
  data() {
    return {
      history:[],
      id:{id:this.$store.state.profile.id}, //用户id
      num:Array(1000).fill().map((e,i)=>1),
      book:{},
      temp:[]
    }
  },
  inject:['reload'],
  methods:{
    giveback(index,row,num) {
      row.number = num
      giveback(row)
      .then(res=>{
        console.log(res)
        if (res.data.data.number === 0){
          this.history.splice(index,1)
          this.reload()  //刷新页面
        }else {
          this.history[index] = res.data.data
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  beforeMount() {
    history(this.id)
    .then(res=>{
      this.history = res.data.data
      for (let item of this.history){
        getBookByID(item)
        .then(res=>{
          item.bookid = res.data
        })
        .catch(err=>{
          console.log(err)
        })
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>