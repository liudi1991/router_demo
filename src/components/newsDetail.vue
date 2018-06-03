<template>
  <div>
    <p>我是newDetail,参数是:{{$route.params.id}}</p>
    <p> 路径是：{{$route.path}}</p>
    <p> 参数：{{$route.query }}</p>
    <p> 路由是：{{$route.router}}</p>
   <!--  <p> 路径是：{{$route.matched }}</p>
    <p> 路径是：{{$route.name }}</p> -->
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
