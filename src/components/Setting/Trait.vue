<template>
   <h2>Trait</h2>

  <p>Trait là những đặc điểm chính của một nhân vật. Có thể coi là các Passive xuất hiện từ đầu đến cuối trận đấu và không thể bị xóa đi.</p>
  <p>Mỗi người có 1 hoặc vài Trait khác nhau. Một số Trait còn không có tác dụng gì cả.</p>
  <p>Some Trait:</p>

  <table>
    <tr>
      <td><img src="./../../assets/other/fire.png" class="icon"/></td>
      <td>Born in Fire: Giảm 50% sát thương lửa nhận vào (+50 Fire res), nhưng tăng 50% sát thương Ice nhận (-50 Ice Res).</td>
    </tr>
  </table>

<br/>
<br/>
<SettingBot/>
<br/>
<br/>

</template>

<style scoped>
a {
  color: #42b983;
}
.icon{
  width: 60px;
}

.table_icon{
  width: 100%;
}
.table_icon tr td{
  text-align: center;
}
.round_content{
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.493);
  border-radius: 20px;
}
</style>


<script>
import SettingBot from './SettingBot.vue';
export default {
    data: function () {
        return {
            users: [],
        };
    },
    methods: {
        increment() {
            this.$store.commit("increment");
            console.log(this.$store.state.count);
        }
    },
    components: { SettingBot }
}
 
</script>