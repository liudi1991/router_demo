<template>
  <div>
    <ul>
      <li v-for="message of messages" :key="message">{{message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages:[
        "message1",
        "message2",
        "message3",
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
