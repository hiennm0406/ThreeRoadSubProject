<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/005.jpg" style="height: 400px ;"/>
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
        <p><b>AP: 1</b></p>
        <p>Class: Elf - Original: Alfheim</p>
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
          <div class="img"><img src="../../../assets/character/00501.png" style="height: 40px ;"/></div>
          <div class="name">Headshot</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1 AP</div>
          <div class="tag"> <attack/> <phys/> <single/> <range/> </div>
          <div class="description">Bắn một mũi tên vào kẻ địch phía sau gây sát thương vật lý bằng 100% Might (<span class="phys">({{1 * might}})</span>). 
          Sau đó khóa ô Tactic này lại.
          </div>
           <div class="description">Bắn một mũi tên vào kẻ địch phía sau gây sát thương vật lý bằng 100% Might (<span class="phys">({{1 * might}})</span>). 
          </div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00502.png" style="height: 40px ;"/></div>
          <div class="name">Hunter's Dance </div>
          <div class="type">Type: 2-o</div>
          <div class="cost">1AP</div>
          <div class="tag"> <attack/> <phys/> <single/> <range/> MOVE </div>
          <div class="description">[Move] về phía sau. 
            Nếu [Move], bắn 1 mũi tên vào kẻ địch phía trước gây sát thương vật lý bằng 200% Might (<span class="phys">({{2 * might}})</span>). 
          </div>
          <div class="description">[Move] về phía trước. 
            Nếu [Move], bắn 1 mũi tên vào kẻ địch phía sau gây sát thương vật lý bằng 150% Might (<span class="phys">({{1.5 * might}})</span>). 
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00503.png" style="height: 40px ;"/></div>
          <div class="name">Rain of Arrow</div>
          <div class="type">Type: 3-o</div>
          <div class="cost">1AP</div>
          <div class="tag"> <attack/> <phys/> <multi/> <range/> </div>
          <div class="description">
            Giương cung và bắn mưa tên xuống toàn bộ kẻ địch. Gây sát thương vật lý bằng 100% Might (<span class="phys">({{1 * might}})</span>).
          </div>
          <div class="description">
            Giương cung và bắn mưa tên xuống toàn bộ kẻ địch. Gây sát thương vật lý bằng 70% Might (<span class="phys">({{0.7 * might}})</span>).
          </div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00504.png" style="height: 40px ;"/></div>
          <div class="name">Speedster</div>
          <div class="type">Type: o-6</div>
          <div class="tag"> <bond/> </div>
          <div class="description">Hồi phục lại 1 AP ngay lập tức.
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
   
    <tr v-if="active=='info'">
      <td colspan="2">
         <p>Move là 1 dạng kỹ năng khiến nhân vật di chuyển giữa các ô. Khi sử dụng, nếu ô mục tiêu có nhân vật đồng đội, 2 nhân vật sẽ hoán đổi vị trí cho nhau.
          Còn nếu không, sẽ chỉ nhân vật di chuyển. Có một lưu ý nho nhỏ là các skill Move đều có 2 phần.
         </p>
         <p>Phần 1 là di chuyển. Phần 2 là hành động, ví dụ tấn công. Nếu như di chuyển thất bại (bị khống chế, hoặc sử dụng kỹ năng lùi về sau trong khi đang ở hàng sau), sẽ coi như hành động thất bại và nhân vật không tấn công nữa.</p>
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
          if(x.id == "005"){
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