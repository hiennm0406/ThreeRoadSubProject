<template>
  <div class="data_container">
    <ul>
        <li> •<router-link :to="{ name: 'level'}">Level</router-link></li>
        <li> •<router-link :to="{ name: 'attribute'}">Attribute</router-link></li>
        <li> •<router-link :to="{ name: 'skill'}">Skill</router-link></li>
        <li> •<router-link :to="{ name: 'trait'}">Trait</router-link></li>
        <li> •<router-link :to="{ name: 'ascen'}">Ascensions</router-link></li>
        <li> •<router-link :to="{ name: 'tactic'}">Tactic</router-link></li>
      </ul>
  </div>
</template>

<style scoped>
.data_container{
    padding: 0 20px;
    border: 1px solid #00000017;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px;
}
ul li{
  display: inline;
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