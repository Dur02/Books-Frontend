<template>
    <el-container>
        <el-header>
            <navbar></navbar>
        </el-header>
        <el-main>
            <insert v-if="this.$store.state.function === 1"></insert>
            <search v-if="this.$store.state.function === 2"></search>
            <give-back v-if="this.$store.state.function === 3"></give-back>
        </el-main>
    </el-container>
</template>

<script>
import navbar from "./navbar";
import insert from "./insert";
import search from "./search";
import giveBack from "@/components/giveBack";
export default {
    name: "book",
    components:{navbar,insert,search,giveBack},
}
</script>

<style scoped>
</style>