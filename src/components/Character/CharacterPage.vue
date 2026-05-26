<template>
  <h3>Dkyrie</h3>
  <table>
  <tr>
    <td>
      <router-link :to="{ name: 'Character001'}">
        <img src="./../../assets/character/001.jpg" class="img_char"/>
        Trần Ngọc Minh
      </router-link>
    </td>
      <td>
      <img src="./../../assets/character/stefanie.png" class="img_char"/>
      Helena Stefanie
    </td>
      <td>
      <img src="./../../assets/character/VTQ.jpg" class="img_char"/>
      Vương Thiếu Quân
    </td>
      <td>
      <img src="./../../assets/character/Jopher.jpg" class="img_char"/>
        Ali Jopher
    </td>
      <td>
      <img src="./../../assets/character/Lucy.jpg" class="img_char"/>
        Lucy 
    </td>
      <td>
      <img src="./../../assets/character/Beaker.jpg" class="img_char"/>
        Grand Beaker 
    </td>
      <td>
      <img src="./../../assets/character/Suzuko.jpg" class="img_char"/>
        Suzuko 
    </td>
      <td>
      <img src="./../../assets/character/Sona.jpg" class="img_char"/>
        Sona Blinz
    </td>
      <td>
      <img src="./../../assets/character/Jacky.jpg" class="img_char"/>
        Jacky Mile
    </td>
  </tr>
</table>


<h3>Midgard</h3>
<p>Trái Đất năm 2050 được bao trùm bởi nền công nghệ tân tiến, ngay cả con người cũng tiến một bước dài trên bậc thang tiến hóa.</p>
<p>Trong đó nổi tiếng nhất là công nghệ Cybord, thay thế một phần cơ thể của con người bằng các dụng cụ máy móc tân tiến. Ngoài ra còn rất nhiều những công nghệ khác phụ trợ như sóng điện não, vũ khí tối tân, cường hóa giác quan.</p>

<div class="char_table">
  <div>
    <router-link :to="{ name: 'Character002'}">
      <img src="./../../assets/character/002.png" class="img_char"/>
      Rachel Carney
    </router-link>
  </div>
</div>

<h3>Jotunheim</h3>
<div class="char_table">
  <div>
    <router-link :to="{ name: 'Character003'}">
      <img src="./../../assets/character/003.jpg" class="img_char"/>
      Obri The Exalted
    </router-link>
  </div>
</div>

<h3>Helheim</h3>
<div class="char_table">
  <div>
    <router-link :to="{ name: 'Character004'}">
      <img src="./../../assets/character/004.jpg" class="img_char"/>
      The Spectre 004
    </router-link>
  </div>
</div>

<h3>Alfheim</h3>
<div class="char_table">
  <div>
    <router-link :to="{ name: 'Character005'}">
      <img src="./../../assets/character/005.jpg" class="img_char"/>
      Arya Vel'ximon
    </router-link>
  </div>
  <div>
    <router-link :to="{ name: 'Character006'}">
      <img src="./../../assets/character/006.jpg" class="img_char"/>
      Mya and Destroyer.XXI
    </router-link>
  </div>
  <div>
    <router-link :to="{ name: 'Character007'}">
      <img src="./../../assets/character/007.jpg" class="img_char"/>
      Proderes icer-viko Moonsong
    </router-link>
  </div>
</div>
<h3>Muspelheim</h3>
<div class="char_table">
  <div>
    <router-link :to="{ name: 'Character008'}">
      <img src="./../../assets/character/008.jpg" class="img_char"/>
      Archdemon A'rikhan
    </router-link>
  </div>
</div>

<h3>Vanaheim</h3>
<div class="char_table">
  <div>
    <router-link :to="{ name: 'Character009'}">
      <img src="./../../assets/character/009.jpg" class="img_char"/>
      Vana Liona
    </router-link>
  </div>
</div>


</template>

<style scoped>
a {
  color: #42b983;
}

.img_char{
  width: 100px;
}
table{
  border-collapse: collapse;
}
table, td, th {
  border: 1px solid rgba(0, 0, 0, 0.185);
}

.char_table div{
  width:120px;
  display: inline-block;
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