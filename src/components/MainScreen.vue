<template>
    <router-link class="link" to="/history">
        <p class="item-menu">
            History
        </p>
    </router-link>
    <button @click="increment">123</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<script>
export default {
  data: function() {
    return {
      users: [],
    };
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
 
</script>