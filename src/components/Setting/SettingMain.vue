<template>
   <h2>Setting game</h2>
   <table  class="table_content">
    <tr>
      <td>
        <h3>Character</h3>
        <ul>
          <li><router-link :to="{ name: 'level'}">Level</router-link></li>
          <li><router-link :to="{ name: 'attribute'}">Attribute</router-link></li>
           <li><router-link :to="{ name: 'skill'}">Skill</router-link></li>
          <li><router-link :to="{ name: 'trait'}">Trait</router-link></li>
           <li><router-link :to="{ name: 'ascen'}">Ascensions</router-link></li>
        </ul>
      </td>
      <td><h3>Battle</h3>
       <ul>
          <li><router-link :to="{ name: 'tactic'}">Tactic</router-link></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <h3>World</h3>
        <ul>
          <!-- <li><router-link :to="{ name: 'midgard'}">Midgard</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'asgard'}">Asgard</router-link></li> -->
          <li><router-link :to="{ name: 'alfheim'}">Alfheim</router-link></li>
          <!-- <li><router-link :to="{ name: 'vanaheim'}">Vanaheim</router-link></li> -->
          <li><router-link :to="{ name: 'muspelheim'}">Muspelheim</router-link></li>
          <!-- <li><router-link :to="{ name: 'svartalfheim'}">Svartalfheim</router-link></li> -->
          <li><router-link :to="{ name: 'jotunheim'}">Jotunheim</router-link></li>
          <!-- <li><router-link :to="{ name: 'nilfheim'}">Nilfheim</router-link></li> -->
          <!-- <li><router-link :to="{ name: 'helheim'}">Helheim</router-link></li> -->
        </ul>
      </td>
    </tr>
   </table>
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