<template>
  <div>
    <router-link v-for="(item,index) of items" :key="index" :to="'/home/news/'+index">new {{index+1}}页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["new1", "new2", "new3"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
