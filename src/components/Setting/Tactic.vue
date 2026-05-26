<template>
   <h2>Tactic</h2>

<p>Tactic - chiến thuật. Là một thanh gồm 8 ô trống.</p>

<table>
  <tr>
    <td colspan="2">Team 1</td>
    <td></td>
    <td colspan="2">Team 2</td>
  </tr>
  <tr>
    <td><img class="tactic_img ally" src="../../assets/character/demo1.png"/></td>
    <td><img class="tactic_img ally" src="../../assets/character/demo2.png"/></td>
    <td><div style="width:100px;"></div></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo5.png"/></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo6.png"/></td>
  </tr>
  <tr>
    <td><img class="tactic_img ally" src="../../assets/character/demo3.png"/></td>
    <td><img class="tactic_img ally" src="../../assets/character/demo4.png"/></td>
    <td></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo7.png"/></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo8.png"/></td>
  </tr>
  <tr>
    <td colspan="5">
      ---------------------------------------
    </td>
  </tr>
  <tr>
    <td colspan="5">
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <span class="tactic"></span>
    </td>
  </tr>
</table>
<p>Lúc bắt đầu trận đấu, sẽ có một đội được chỉ định đi trước. Thường là người chơi.</p>
<p>Lúc này, người chơi sẽ lựa chọn các đồng minh và gán từng nhân vật vào các ô Tactic ngẫu nhiên. Tối đa mỗi đội sẽ gán được vào 4 ô Tactic.</p>

<table>
  <tr>
    <td><img class="tactic_img ally" src="../../assets/character/demo1.png"/></td>
    <td><img class="tactic_img ally" src="../../assets/character/demo2.png"/></td>
    <td><div style="width:100px;"></div></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo5.png"/></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo6.png"/></td>
  </tr>
  <tr>
    <td><img class="tactic_img ally" src="../../assets/character/demo3.png"/></td>
    <td><img class="tactic_img ally" src="../../assets/character/demo4.png"/></td>
    <td></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo7.png"/></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo8.png"/></td>
  </tr>
  <tr>
    <td colspan="5">
      <img class="tactic_img ally" src="../../assets/character/demo1.png"/>
      <img class="tactic_img ally" src="../../assets/character/demo1.png"/>
      <span class="tactic"></span>
      <span class="tactic"></span>
      <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
      <span class="tactic"></span>
      <img class="tactic_img ally" src="../../assets/character/demo2.png"/>
      <span class="tactic"></span>
    </td>
  </tr>
</table>

<p>Sau khi đội đi trước hoàn thành việc xếp Tactic. Đội thứ 2 sẽ bắt đầu gán nhân vật của họ vào các ô trống còn lại.</p>
<table>
  <tr>
    <td><img class="tactic_img ally" src="../../assets/character/demo1.png"/></td>
    <td><img class="tactic_img ally" src="../../assets/character/demo2.png"/></td>
    <td><div style="width:100px;"></div></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo5.png"/></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo6.png"/></td>
  </tr>
  <tr>
    <td><img class="tactic_img ally" src="../../assets/character/demo3.png"/></td>
    <td><img class="tactic_img ally" src="../../assets/character/demo4.png"/></td>
    <td></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo7.png"/></td>
    <td><img class="tactic_img enemy" src="../../assets/character/demo8.png"/></td>
  </tr>
  <tr>
    <td colspan="5">
      <img class="tactic_img ally" src="../../assets/character/demo1.png"/>
      <img class="tactic_img ally" src="../../assets/character/demo1.png"/>
      <img class="tactic_img enemy" src="../../assets/character/demo5.png"/>
      <img class="tactic_img enemy" src="../../assets/character/demo8.png"/>
      <img class="tactic_img ally" src="../../assets/character/demo3.png"/>
      <img class="tactic_img enemy" src="../../assets/character/demo6.png"/>
      <img class="tactic_img ally" src="../../assets/character/demo2.png"/>
      <img class="tactic_img enemy" src="../../assets/character/demo5.png"/>
    </td>
  </tr>
</table>

<p>Sau khi cả 2 đội đã xếp xong Tactic, các nhân vật của cả 2 đội sẽ bắt đầu hành động theo thứ tự các Tactic đã xếp từ trái qua phải.</p>
<p>Với các ô Tactic giống nhau nằm cạnh nhau sẽ được tính là 1 Action. Xem <router-link :to="{ name: 'skill'}">Skill</router-link> để nắm thêm thông tin chi tiết.</p>
<p>Nếu nhân vật chết hoặc bị khống chế (immobile, stuned,...) khi đến lượt sẽ bỏ qua lượt.</p>
<img src="../../assets/other/tacticPhase.png"/>


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
            active: "Type"
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