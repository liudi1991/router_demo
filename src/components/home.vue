<template>
  <div>
    <p>我是hello页</p>
    <router-link to='/home/message'>message页</router-link>
    <router-link to='/home/news'>news页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
