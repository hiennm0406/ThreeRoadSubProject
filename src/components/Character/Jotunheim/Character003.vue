<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/003.jpg" style="height: 400px ;"/>
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
        <p>Class: Djinn - Original: Jotunheim</p>
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
          <div class="img"><img src="../../../assets/character/00301.png" style="height: 40px ;"/></div>
          <div class="name">Brutalize slash </div>
          <div class="type">Type: 3-o</div>
          <div class="cost">3AP</div>
          <div class="tag"><attack/> <melee/> <single/> <phys/> </div>
          <div class="description">Vung thanh gươm chém trực diện kẻ địch, 
            gây ra sát thương vật lý bằng 200% Might <span class="phys">({{2*might}})</span></div>
          <div class="description">Vung thanh gươm chém trực diện kẻ địch, 
            gây ra sát thương vật lý bằng 120% Might <span class="phys">({{1.2*might}})</span></div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00302.png" style="height: 40px ;"/></div>
          <div class="name">Violence</div>
          <div class="type">Type: o-3</div>
          <div class="tag"><effect/> </div>
          <div class="description">Nghệ thuật của cái chết nằm trên mỗi đường kiếm. <b>Nhát chém này của hắn sẽ bỏ qua 20% armor của kẻ địch.</b>
            </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00303.png" style="height: 40px ;"/></div>
          <div class="name">Bloody</div>
          <div class="type">Type: o-5</div>
          <div class="tag"><effect/> <bond/> </div>
          <div class="description">Bằng cơn khát máu tiềm tàng trong cơ thể, 
            Obri thay vì sử dụng thanh kiếm thép, hắn rút thanh kiếm đang xuyên qua ngực mình ra và 
            tấn công đối thủ. <b>Obri tăng 100% sát thương gây ra trong lần tấn công này. Nhưng cũng tự gây sát thương lên bản thân.</b>
          </div>
          <div class="description">Bằng cơn khát máu tiềm tàng trong cơ thể, 
            Obri thay vì sử dụng thanh kiếm thép, hắn rút thanh kiếm đang xuyên qua ngực mình ra và 
            tấn công đối thủ. <b>Obri tăng 30% sát thương gây ra trong lần tấn công này. Nhưng cũng tự gây sát thương lên bản thân.</b>
          </div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00304.png" style="height: 40px ;"/></div>
          <div class="name">Eternal one</div>
          <div class="type">Type: o-7</div>
          <div class="tag"> <effect/> <bond/> </div>
          <div class="description">Djinn là một cỗ máy vĩnh hằng, chúng có thể hấp thụ năng lượng xung quanh để tái
            tạo lại bất kỳ thương tổn nào. <b>Trong đòn đánh lần này, Obri hồi lại lượng máu tương đương 50% sát thương gây ra.</b>
          </div>
                <div class="description">Djinn là một cỗ máy vĩnh hằng, chúng có thể hấp thụ năng lượng xung quanh để tái
            tạo lại bất kỳ thương tổn nào. <b>Trong đòn đánh lần này, Obri hồi lại lượng máu tương đương 20% sát thương gây ra.</b>
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td colspan="2"><span style="font-size: smaller;">Lưu ý chỉ số sát thương trong skill là tương đối, chưa tính hiệu ứng tăng lên từ artifact, trait.</span></td>
    </tr>

    <tr v-if="active=='info'">
      <td colspan="2">
        <p>Về cơ bản, anh chàng này là một minh chứng cho sự đa dạng hóa về kỹ năng Bond. Anh ta chỉ có 1 skill Active, và 3 skill Liên kết.</p>

<p>Với kỹ năng Active là 3-o. Anh ta có thể kèm tối đa 2 skill Liên kết vào kỹ năng chính. Và sự lựa chọn là nằm ở người chơi. Cẩn thận, sức mạnh đi kèm với rủi ro.</p>
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
          if(x.id == "003"){
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
      name:'',
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