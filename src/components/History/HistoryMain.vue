<template>
   <h1>Kỷ xa xưa</h1>
   <ul>
      <li><router-link :to="{ name: 'firstRagnarok'}">Ragnarokr lần đầu tiên</router-link></li>
      <li><router-link :to="{ name: 'TheUnion'}">Ngày tái hợp</router-link></li>
      <li><router-link :to="{ name: 'MuspelheimHis'}">Muspelheim: Tái sinh trong lửa</router-link></li>
      <li><router-link :to="{ name: 'SecondRagnarok'}">Ragnarok lần thứ hai</router-link></li>
   </ul>
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