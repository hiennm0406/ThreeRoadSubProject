<template>
   <h2>Attribute</h2>

<p>Mỗi nhân vật có 3 Attribute chính, 3 attribute này kiểm soát gần như toàn bộ các chỉ số chính của trò chơi.</p>
<p>Ngoài ra nhân vật còn có các Attribute phụ khác.</p>

<h3>Main Attribute</h3>
<table>
  <tr>
    <td>
      <img src="./../../assets/icon/might.jpg" class="icon"/>
    </td>
    <td>
      <h4>Might</h4>
    </td>
    <td>
      Sức mạnh. Sức mạnh thuần túy của nhân vật. <b class="anima"> Chỉ số này ảnh hưởng đa số đến các sát thương vật lý nhân vật gây ra, đồng thời ảnh hưởng một phần đến sức chịu đựng sát thương vật lý của nhân vật (Armor)</b>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./../../assets/icon/Enegry.png" class="icon"/>
    </td>
    <td>
      <h4>Enegry</h4>
    </td>
    <td>
      Năng lượng, khoa học công nghệ cao đã phát hiện không chỉ ở những cỗ máy mới có năng lượng, mà ngay cả ở những cơ thể nhỏ bé nhất cũng tồn tại năng lượng. Đó là thứ mà từ thời xa xưa đã được gọi là năng lượng sống. Đối với mỗi người, năng lượng trong cơ thể họ khác nhau. Điều này lý giải vì sao hai người đều bị sét đánh, nhưng một người bị thương nặng, người còn lại chỉ bị thương nhẹ. <b class="anima">Enegry ảnh hưởng đa số đến các kỹ năng nguyên tố, đồng thời một phần nào đó ảnh hưởng đến khả năng kháng lại các sát thương nguyên tố (Resis)</b>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./../../assets/icon/Endurance.png" class="icon"/>
    </td>
    <td>
      <h4>Endurance</h4>
    </td>
    <td>
      Sức chịu đựng. <b class="anima" >Sức chịu đựng trực tiếp ảnh hưởng đến máu của nhân vật, khi máu nhân vật giảm xuống 0, họ sẽ chết. Ngoài ra Endurance còn ảnh hưởng đến cả sức chịu đựng (Armor) và kháng nguyên tố (Resis)</b>
    </td>
  </tr>
</table>

<div class="round_content">
  <table class="table_icon">
    <tr>
      <td colspan="3" class="anima">- Formula -</td>
    </tr>
    <tr>
      <td> <img src="./../../assets/icon/health.png" class="icon"/></td>
      <td> <img src="./../../assets/icon/Armor.png" class="icon"/></td>
      <td> <img src="./../../assets/icon/resis.png" class="icon"/></td>
    </tr>
    <tr>
      <td>Health = (Endurance x 2 + Might + Enegry) x 3<br/>
      (Đa số, có thể bị thay đổi do Trait)
      </td>
      <td>Armor = Might + Endurance</td>
      <td>Resis = Enegry + Endurance</td>
    </tr>
  </table>
</div>
   
<h3>Side Attribute</h3>
<table>
  <tr>
    <td>
      <img src="./../../assets/icon/focus.png" class="icon"/>
    </td>
    <td>
      <h4>Focus</h4>
    </td>
    <td>
      Điểm tập trung. <b class="anima">Chỉ số này ảnh hưởng đến toàn bộ các thuộc tính khác( tăng 1% cho mỗi điểm Focus). Đồng thời đội nào tổng điểm Focus hơn sẽ được đi trước khi trận đấu bắt đầu.</b>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./../../assets/icon/ap.png" class="icon"/>
    </td>
    <td>
      <h4>Action Point</h4>
    </td>
    <td>
      Điểm hành động. <b class="anima">Đây là một chỉ số đặc biệt, mỗi khi sử dụng kỹ năng sẽ tiêu tốn Action Point (AP). Số AP là có giới hạn tùy theo mỗi nhân vật, có nhân vật max = 1, có nhân vật max = 3. Và sẽ hồi lại 1 điểm AP vào đầu mỗi lượt.</b>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./../../assets/icon/eleResis.png" class="icon"/>
    </td>
    <td>
      <h4>Element Resistant</h4>
    </td>
    <td>
      Kháng nguyên tố. <b class="anima" >Chỉ số này trong game sẽ chia ra 3 chỉ số khác là Fire Res, Ice Res, Lightning Res. Bắt đầu = 0. Với mỗi điểm sẽ giảm 1% sát thương nguyên tố tương ứng. Chỉ số này có thể bị tụt xuống âm bởi Trait hoặc kỹ năng của đối thủ..</b>
    </td>
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