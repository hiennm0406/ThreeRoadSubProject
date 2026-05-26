<template>
   <h2>Rachel Carney</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/002.png" style="height: 400px ;"/>
      </td>
      <td class="text_left">
        <h2>Level:</h2>
        <br/>
        <Slider v-model="value" :max="15" :min="1" />
        <h2>Stat:</h2>
        <p><b>Might: </b>{{might}}</p>
        <p><b>Energy: </b>{{energy}}</p>
        <p><b>Endurance: </b>{{endurance}}</p>
         <br/>
         <p><b>Health: </b>{{(endurance * 2 + might + energy) *3}}</p>
        <p><b>Armor: </b>{{might + endurance}}</p>
        <p><b>Resis: </b>{{energy + endurance}}</p>
        <p><b>AP: 3</b></p>
        <p>Class: Human (esper) - Original: Midgard</p>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div class="btn-group" style="text-align: center;">
          <button :class="{active:active=='skill'}" @click="active='skill'">Skill</button>
          <button :class="{active:active=='link'}" @click="active='link'">Link</button>
          <button :class="{active:active=='perk'}" @click="active='perk'">Ascensions</button>
          <button :class="{active:active=='bg'}" @click="active='bg'">Background</button>
          <button :class="{active:active=='info'}" @click="active='info'">Thông tin thêm</button>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00201.png" style="height: 40px ;"/></div>
          <div class="name">Light knife</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1AP</div>
          <div class="tag"><attack/> <range/> <single/> <lightning/> </div>
          <div class="description">Bằng cách cho dòng điện chạy qua cơ thể và dồn năng lượng vào các ngón tay, 
            cô có thể gia tốc con dao trong tay đi với một luồng chớp điện mạnh, 
            gây ra sát thương vật lý bằng 120% Energy <span class="phys">({{1.2*energy}})</span>, 
            gây ra sát thương Sét bằng 100% Energy <span class="lightning">({{1*energy}})</span>. 
            Để lại trên người kẻ địch 1 dấu [Static Electric]</div>
          <div class="description">Bằng cách cho dòng điện chạy qua cơ thể và dồn năng lượng vào các ngón tay, 
            cô có thể phóng ra một luồng chớp điện mạnh, gây ra sát thương Sét bằng 100% Energy <span class="lightning">({{1*energy}})</span>. 
            Để lại trên người kẻ địch 1 dấu [Static Electric]</div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00202.png" style="height: 40px ;"/></div>
          <div class="name">High voltage</div>
          <div class="type">Type: 2-o</div>
          <div class="cost">2AP</div>
          <div class="tag"><attack/> <range/> <multi/> <lightning/> </div>
          <div class="description">Kéo dòng điện chạy từ tay trái qua tay phải, 
            tạo thành một trường lực đối cực, sau đó đổi dòng điện ở 1 tay, 
            cô có thể đẩy 1 dòng cường áp mạnh mẽ về phía trước. 
            Gây ra sát thương Sét bằng 200% Energy <span class="lightning">({{2*energy}})</span> cho kẻ địch trước mặt. 
            Sau đó gây ra sát thương Sét bằng 150% Energy <span class="lightning">({{1.5*energy}})</span> cho 1 kẻ địch gần đó, 
            và tiếp tục gây ra sát thương Sét bằng 100% Energy <span class="lightning">({{1*energy}})</span> cho 1 kẻ địch khác. 
            Mục tiêu sẽ không lặp lại. Nếu không còn đối tượng nào khác chuỗi dòng điện sẽ kết thúc.
            Để lại trên người mỗi kẻ địch 1 dấu [Static Electric].
            </div>
          <div class="description">Kéo dòng điện chạy từ tay trái qua tay phải, 
            tạo thành một trường lực đối cực, sau đó đổi dòng điện ở 1 tay, 
            cô có thể đẩy 1 dòng cường áp mạnh mẽ về phía trước. 
            Gây ra sát thương Sét bằng 150% Energy <span class="lightning">({{1.5*energy}})</span> cho kẻ địch trước mặt. 
            Sau đó gây ra sát thương Sét bằng 100% Energy <span class="lightning">({{1*energy}})</span> cho 1 kẻ địch gần đó. 
            Mục tiêu sẽ không lặp lại. Nếu không còn đối tượng nào khác chuỗi dòng điện sẽ kết thúc.
            Để lại trên người mỗi kẻ địch 1 dấu [Static Electric].
            </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00203.png" style="height: 40px ;"/></div>
          <div class="name">R.A.D.A.R</div>
          <div class="type">Type: 3-o</div>
          <div class="cost">2AP</div>
          <div class="tag"><effect/> <lightning/> COUNTER </div>
          <div class="description">Sử dụng 1 dòng điện nhỏ phát xạ ra xung quanh, đưa bản thân vào trường điện cảm. 
            Cô có thể cảm nhận rõ bất cứ xung động nào xung quanh. Phát hiện kẻ thù đến gần. 
            Khi bị tấn công bởi các đòn tấn công <melee/>, giảm 30% sát thương phải nhận, sau đó đánh trả lại đối thủ
            sát thương sét bằng 120% Energy <span class="lightning">({{1.2*energy}})</span>.
            Để lại trên người kẻ địch 1 dấu [Static Electric].
          </div>
           <div class="description">Sử dụng 1 dòng điện nhỏ phát xạ ra xung quanh, đưa bản thân vào trường điện cảm. 
            Cô có thể cảm nhận rõ bất cứ xung động nào xung quanh. Phát hiện kẻ thù đến gần. 
            Khi bị tấn công bởi các đòn tấn công <melee/>, giảm 10% sát thương phải nhận, sau đó đánh trả lại đối thủ
            sát thương vật lý bằng 120% Might <span class="phys">({{1.2*might}})</span>.
          </div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00204.png" style="height: 40px ;"/></div>
          <div class="name">Static charged</div>
          <div class="type">Type: o-4</div>
          <div class="tag"> <attack/> <lightning/> <multi/> <instantly/> <bond/> </div>
          <div class="description">Sau khi hành động, cô tạo 1 trường điện tĩnh ra xung quanh, 
            gây sát thương sét toàn bộ đối thủ bằng 20% Energy <span class="lightning">({{0.2 * energy}})</span> 
            nhân với mỗi [Static Electric] trên người mục tiêu.
            Các [Static Electric] trên người mục tiêu sẽ được kéo dài thêm 1 lượt.
          </div>
          <div class="description">Sau khi hành động, cô tạo 1 trường điện tĩnh ra xung quanh, 
            gây sát thương sét toàn bộ đối thủ bằng 20% Energy <span class="lightning">({{0.2 * energy}})</span> 
            nhân với mỗi [Static Electric] trên người mục tiêu.
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td colspan="2"><span style="font-size: smaller;">Lưu ý chỉ số sát thương trong skill là tương đối, chưa tính hiệu ứng tăng lên từ artifact, trait.</span></td>
    </tr>
    

    <tr v-if="active=='perk'">
      <td colspan="2">
          <table class="perk_table">
             <tr>
              <td class="box" colspan="2">Deadly round</td>
              <td class="box" colspan="2">Static round</td>
            </tr>
            <tr>
              <td></td>
              <td class="box">Tăng 2% Damage</td>
              <td class="box">Tăng 2% Heath</td>
              <td></td>
            </tr>
            <tr>
              <td class="box red">Cộng hưởng: Tăng 1% damage với mỗi [Static Electric] trên người tất cả kẻ địch trên sân.
                Khi 1 kẻ địch chết, số [Static Electric] trên người kẻ đó chuyển sang 1 kẻ địch khác bất kỳ, reset thời hạn.
              </td>
              <td class="box">Tăng 3% Enegry, </td>
              <td class="box">Tăng 3% Endurance</td>
              <td class="box red">Improve [R.A.D.A.R]: Sau khi counter 1 kẻ địch. 
                Tự tạo trên người bản thân số [Static charged] bằng với số [Static charged] trên người kẻ đó.
                Tăng damage counter 5% với mỗi [Static Electric] trên người bản thân.
                </td>
            </tr>
            <tr>
              <td></td>
              <td class="box">Tăng 5% Enegry</td>
              <td class="box">Tăng 3% Enegry, 3% Endurance</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="box">Tăng 8% Enegry</td>
              <td class="box">Tăng 3% Enegry, 5% Endurance</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="box">Tăng 2% damage với mỗi [Static Electric] trên người kẻ địch</td>
              <td class="box">Tăng 1% damage với mỗi [Static Electric] trên người bản thân.
                Giảm hiệu ứng tăng Lightning Damage nhận của [Static Electric] trên người bản thân đi 50%.
              </td>
              <td></td>
            </tr>
            <tr>
              <td class="box red">Ultra voltage - Improve [High votltage]: Mỗi lần nảy, tia điện tăng 2% sát thương với mỗi [Static Electric]
                trên người mục tiêu trước, có cộng dồn. 
              </td>
              <td class="box red">Improve [Static charged]: Tăng 100% sát thương gây ra.</td>
              <td class="box red">Cột thu lôi: Tăng 2% dmg với mỗi [Static Electric] trên người bản thân. 
                [Static Electric] trên người Rachel kéo dài thêm 1 turn.</td>
              <td class="box red">Improve Static charged: Sau khi sử dụng kỹ năng, Rachel hấp thu toàn bộ [Static Electric] về bản thân.
                Reset thời gian hiệu lực còn lại.</td>
            </tr>
          </table>
      </td>
    </tr>
    <tr v-if="active=='skill' || active=='perk' ">
      <td colspan="2">
        <table>
          <tr>
            <td><img src="../../../assets/character/00204.png" class="icon40"/></td>
            <td>Static Electric: Tăng 5% sát thương Lightning nhận. Kéo dài 2 turn.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr v-if="active=='info'">
      <td colspan="2">
          <p>Rachel là 1 trong những nhân vật xuất hiện từ đầu game. Và cũng là nhân vật hướng dẫn chúng ta trong tutorial.</p>

<p>Về lối chơi, cô ấy là một trong những core char tôi sử dụng để làm minh chứng về sự đa dạng của xây dựng nhân vật. Một cô gái nhỏ nhắn đáng yêu, nhưng có thể vừa là một khẩu railgun gây sát thương kinh khủng. Hoặc có thể chọn hướng làm kẻ chống chịu với kỹ năng counter đáng sợ, đương nhiên là kèm theo một chút rủi ro.</p>
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
import json from './../../../data/data.json';
import Slider from '@vueform/slider'
export default {
  mounted() {
   json.Character.forEach(x => { 
          if(x.id == "002"){
              this.dataChar = x;
              this.might = x.Stat.Might;
              this.energy = x.Stat.Energy;
              this.endurance = x.Stat.Endurance;
            return;
          }
        }); ;
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue != oldValue) {
        this.changeValue()
      }
    }
  },
  components: {
    Slider
  },
  data: function() {
    return {
      users: [],
      value:1,
      might:0,
      energy:0,
      endurance:0,
      dataChar:{},
      active:'skill'
    };
  },
  
  methods: {
    changeValue(){
      this.might = this.increase(this.dataChar.Stat.Might,this.dataChar.Stat.MightEvo,this.value-1);
      this.energy = this.increase(this.dataChar.Stat.Energy,this.dataChar.Stat.EnergyEvo,this.value-1);
      this.endurance = this.increase(this.dataChar.Stat.Endurance,this.dataChar.Stat.EnduranceEvo,this.value-1);
    },
    increase(input,type,level){
      for (let index = 0; index < level; index++) {
       if(type == "early"){
        input = input * json.StatEvolution.early[index];
       }
       else if(type == "late"){
        input = input * json.StatEvolution.late[index];
       }
       else if(type == "U"){
        input = input * json.StatEvolution.U[index];
       }
       else if(type == "uptodownU"){
        input = input * json.StatEvolution.uptodownU[index];
       }
       else if(type == "semi"){
        input = input * json.StatEvolution.semi[index];
       }
      }
      var output = parseInt(input);
      return output;
    }
  }
}
 
</script>