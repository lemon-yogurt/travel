<template>
<!-- 模板标签 -->
  <div id="app">
    <!-- 显示的是当前路由对应的内容 -->
    <!-- 路由加载过一次之后，就放到内存中，下一次再请求路由的时候，就不需要请求钩子，直接从内存中拿出来 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
