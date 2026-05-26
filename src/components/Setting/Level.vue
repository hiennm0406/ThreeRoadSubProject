<template>
   <h2>Level</h2>

  <p>Khởi đầu nhân vật ở Level 1. Trong quá trình chơi, người chơi có thể thăng cấp họ lên level 15.</p>

  <p>Để thăng cấp cần đủ tất cả các nguyên liệu nhân vật yêu cầu.</p>

  <p>Mỗi lần thăng cấp sẽ tốn thời gian. Trong khoảng thời gian [Training] này, nhân vật không thể sử dụng vào bất kỳ việc gì khác</p>

  <table class="level_table">
    <tr>
      <td>Cấp</td>
      <td>Thời gian cần để lên 1 cấp</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1 phút</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3 phút</td>
    </tr>
    <tr>
      <td>3</td>
      <td>5 phút</td>
    </tr>
    <tr>
      <td>4</td>
      <td>15 phút</td>
    </tr>
    <tr>
      <td>5</td>
      <td>30 phút</td>
    </tr>
    <tr>
      <td>6</td>
      <td>1 giờ</td>
    </tr>
    <tr>
      <td>7</td>
      <td>2 giờ</td>
    </tr>
    <tr>
      <td>8</td>
      <td>4 giờ</td>
    </tr>
    <tr>
      <td>9</td>
      <td>8 giờ </td>
    </tr>
    <tr>
      <td>10</td>
      <td>12 giờ</td>
    </tr>
    <tr>
      <td>11</td>
      <td>18 giờ</td>
    </tr>
    <tr>
      <td>12</td>
      <td>24 giờ</td>
    </tr>
    <tr>
      <td>13</td>
      <td>36 giờ</td>
    </tr>
    <tr>
      <td>14</td>
      <td>48 giờ</td>
    </tr>
    <tr>
      <td>15</td>
      <td>-</td>
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
.level_table{
  border-collapse: collapse;
}
.level_table, td, th {
  border: 1px solid rgba(0, 0, 0, 0.548);
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