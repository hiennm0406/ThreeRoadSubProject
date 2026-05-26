<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/006.jpg" style="height: 400px ;"/>
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
        <p><b>AP: 2</b></p>
        <p>Class: Robotic - Original: Alfheim</p>
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
          <div class="img"><img src="../../../assets/character/00601.png" style="height: 40px ;"/></div>
          <div class="name">Chilled</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1AP</div>
          <div class="tag"> </div>
          <div class="description">
            Nếu đang ở trạng thái [Overload], xóa [Overload], hồi lại 3% máu tối đa.
            Xì khói, giảm 2 tầng [Heat].
          </div>
          <div class="description">
            Nếu đang ở trạng thái [Overload], xóa [Overload].
            Xì khói, giảm 1 tầng [Heat].
          </div>
        </div>
        
      </td>
       <td style="padding-left:5px">
       <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00602.png" style="height: 40px ;"/></div>
          <div class="name">Fire gun</div>
          <div class="type">Type: 2-o</div>
          <div class="cost">1 AP</div>
          <div class="tag"> <attack/> <fire/> <single/> <range/> <effect/> <duration/> DOT </div>
          <div class="description">
            Phun tia lửa lên mục tiêu trước mặt, gây sát thương lửa bằng 20% Enegry (<span class="fire">({{0.2 * energy}})</span>), với mỗi tầng [Heat], tăng sát thương gây ra 100%. 
            Gây trạng thái [Burn] cho đối thủ, mỗi turn nhận sát thương lửa bằng 30% sát thương gây ra.
            Tăng 1 tầng [Heat].
          </div>
           <div class="description">
            Phun tia lửa lên mục tiêu trước mặt, gây sát thương lửa bằng 10% Enegry (<span class="fire">({{0.1 * energy}})</span>), với mỗi tầng [Heat], tăng sát thương gây ra 100%. 
            Tăng 1 tầng [Heat].
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00603.png" style="height: 40px ;"/></div>
          <div class="name">Laze</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1AP</div>
          <div class="tag"> <attack/> <fire/> <single/> <multi/> <range/> </div>
          <div class="description">
            Nếu không ở trạng thái [Overload], bắn ra 1 tia laze cực mạnh về phía trước. Gây sát thương lửa
            bằng 50% enegry (<span class="fire">({{0.5 * energy}})</span>) cho kẻ địch phía trước. Tăng 2 [Heat].
            Nếu ở trạng thái [Overload], bắn ra 1 tia laze cực mạnh cho hàng dọc phía trước.
            Gây sát thương lửa bằng 150% enegry (<span class="fire">({{1.5 * energy}})</span>). Tăng 2 [Heat].
          </div>
          <div class="description">
             Nếu không ở trạng thái [Overload], bắn ra 1 tia laze cực mạnh về phía trước. Gây sát thương lửa
            bằng 40% enegry (<span class="fire">({{0.4 * energy}})</span>) cho kẻ địch phía trước. Tăng 1 [Heat].
            Nếu ở trạng thái [Overload], bắn ra 1 tia laze cực mạnh cho hàng dọc phía trước.
            Gây sát thương lửa bằng 100% enegry (<span class="fire">({{1.0 * energy}})</span>). Tăng 2 [Heat].
          </div>
        </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00604.png" style="height: 40px ;"/></div>
          <div class="name">Energy Boosters</div>
          <div class="type">Type: o-1</div>
          <div class="tag"> <bond/> SHIELD </div>
          <div class="description">
            Tăng thêm 1 tầng [Heat]. Tạo 1 lớp khiên vật lý bằng 100% Endurance (<span class="phys">({{1.0 * endurance}})</span>)
          </div>
           <div class="description">
            Tăng thêm 1 tầng [Heat].
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
              <td class="box" colspan="2"></td>
              <td class="box" colspan="2"></td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box"></td>
              <td></td>
            </tr>
            <tr>
              <td class="box red">
              </td>
              <td class="box"></td>
              <td class="box"></td>
              <td class="box red">
              </td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td class="box"></td>
              <td class="box">
              </td>
              <td></td>
            </tr>
            <tr>
              <td class="box red">
              </td>
              <td class="box red"></td>
              <td class="box red"></td>
              <td class="box red"></td>
            </tr>
          </table>
      </td>
    </tr>
   
   <tr v-if="active=='skill' || active=='perk' ">
      <td colspan="2">
        <table>
          <tr>
            <td><img src="../../../assets/icon/Heat.png" class="icon40"/></td>
            <td>Heat: Nếu nhân vật không có hành động gì trong 1 turn, giảm 1 Heat vào cuối turn.
              Tối đa 3 stack. Heat vượt mức sẽ được chuyển thành [Overload], nếu đã có [Overload], ghi đè.
            </td>
          </tr>
          <tr>
            <td><img src="../../../assets/icon/Overload.png" class="icon40"/></td>
            <td>Overload: Nếu nhân vật không có hành động gì trong 1 turn, xóa trạng thái vào cuối turn.
              Nhận sát thương lửa bằng 10% máu tối đa.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  <tr v-if="active=='bg'">
      <td colspan="2">
        <p>Xin giới thiệu đến các bạn, Mya và cỗ máy của cô ấy Destroyer.XXI</p>
        <p>Như trong mô tả về loài High Elf, họ là những tinh linh nhỏ, chỉ cỡ 10 cm. Nhưng cơ thể nhỏ bé ấy lại là
          một nguồn phát phóng xạ khổng lồ. Người High Elf, trong những năm đầu nền văn minh của họ, đã tự sử dụng 
          nguồn năng lượng trong cơ thể để làm những cỗ máy khổng lồ hoạt động. Ngày nay, rất hiếm có High Elf nào lại 
          tiếp tục phát triển công nghệ này. Ngoại trừ một số người hoài cổ. Và Mya là 1 trong số đó.
        </p>
         <p>Cô tự mình chế tạo nên Destroyer.XXI với kích thước cao đến 6m. Một cỗ máy chiến đấu khủng khiếp. 
          Mặc dù đôi khi còn hay... nổ.
         </p>
      </td>
    </tr>
    <tr v-if="active=='info'">
      <td colspan="2">
         <p>Heat và Overload là những trạng thái đặc trưng của các cỗ máy cỡ lớn. Việc kiểm soát nó là việc cực kỳ quan trọng đối với
          người chơi.
         </p>
         <p>
            Để giảm Heat, nhân vật cần ngưng hoạt động trong 1 turn. Còn Overload sẽ gây sát thương cho nhân vật khi kích hoạt.
            Nhưng cả 2 trạng thái này đều là những trạng thái cần thiết cho nhân vật. Rất nhiều kỹ năng sẽ trở nên rất khủng khiếp
            trong trạng thái Overload. Sức mạnh đi đôi với rủi ro. Vậy nên hãy kiểm soát lòng tham của mình.
          </p>
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
          if(x.id == "006"){
              this.dataChar = x;
              this.might = x.Stat.Might;
              this.energy = x.Stat.Energy;
              this.endurance = x.Stat.Endurance;
              this.name = x.name;
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
      name:'',
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