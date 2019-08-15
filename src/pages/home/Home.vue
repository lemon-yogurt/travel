<template>
<div>
    <home-header></home-header>

    <!-- 跳转 -->
    <!-- <router-link to="/list">列表页</router-link> -->
</div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader
  }
}
</script>

<style scoped>
</style>
