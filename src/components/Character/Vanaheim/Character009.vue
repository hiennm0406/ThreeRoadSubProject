<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/009.jpg" style="height: 400px ;"/>
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
        <p>Class: Vanir - Original: Vanaheim</p>
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
          <div class="img"><img src="../../../assets/character/00701.png" style="height: 40px ;"/></div>
          <div class="name">Fangs and Claws</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1AP</div>
          <div class="tag"> <shield/> <phys/> <multi/> <effect/> </div>
          <div class="description">
            Tạo một lớp khiên vật lý chống chịu sát thương bằng 50% Enegry (<span class="phys">({{0.5 * energy}})</span>) cho toàn bộ team
          </div>
           <div class="description">
            Tạo một lớp khiên vật lý chống chịu sát thương bằng 20% Enegry (<span class="phys">({{0.5 * energy}})</span>) cho toàn bộ team
          </div>
        </div>
      </td>
       <td style="padding-left:5px">
       <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00702.png" style="height: 40px ;"/></div>
          <div class="name">The wolf dance</div>
          <div class="type">Type: 2-o</div>
          <div class="cost">1 AP</div>
          <div class="tag"> <attack/> <phys/> <single/> <melee/> SHAPESHIFTER MOVE </div>
          <div class="description">
           Tấn công kẻ địch ở phía sau, gây sát thương vật lý bằng 150% Energy (<span class="phys">({{1.5 * energy}})</span>)Sau đó hồi cho đồng đội ít máu nhất 1 lượng máu bằng 1 nửa [sát thương gây ra].
          </div>
          <div class="description">
            Tấn công kẻ địch ở phía sau, gây sát thương vật lý bằng 100% Energy (<span class="phys">({{1.0 * energy}})</span>)Sau đó tạo cho đồng đội ít máu nhất 1 lượng giáp vật lý bằng 1 nửa [sát thương gây ra].
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00703.png" style="height: 40px ;"/></div>
          <div class="name">Ritual</div>
          <div class="type">Type: 1-3-5-7</div>
          <div class="tag"> RITUAL </div>
          <div class="description">
            Hợp lực của tất cả các Vanir trên sân. Tự khóa 1 AP của bản thân. Sau đó chuyển địa hình 
            xung quanh thành [Rừng rậm] và tăng toàn bộ chỉ số của [Vanir] lên 10%.
          </div>
        </div>
      </td>
      <td style="padding-left:5px">
       <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00703.png" style="height: 40px ;"/></div>
          <div class="name">Lifeforce</div>
          <div class="type">Type: 0-7</div>
          <div class="tag"> <effect/> <phys/> </div>
          <div class="description">
           Sau khi hành động, hồi lại cho bản thân 1 lượng máu = 100% Enegry (<span class="phys">({{1 * energy}})</span>)
          </div>
          <div class="description">
            Sau khi hành động, hồi lại cho bản thân 1 lượng máu = 50% Enegry (<span class="phys">({{0.5 * energy}})</span>)
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
    
    
    <tr v-if="active=='bg'">
      <td colspan="2">
      </td>
    </tr>
    <tr v-if="active=='info'">
      <td colspan="2">
        <p>Xin giới thiệu cho mọi người 1 cơ chế hoàn toàn mới. Ritual.</p>
        <p>1 skill Ritual yêu cầu ít nhất 2 Vanir trên sân, và 2 Vanir đó phải có các Tactic trùng với điều kiện của skill Ritual</p>
        <p>Ví dụ skill Ritual kia có yêu cầu là 1-3-5-7. Tức là các Vanir trên sân phải chọn Tactic ở các ô 1,3,5,7. Không quan trọng là người nào chọn ô nào.</p>
        <p>Nếu đạt đủ yêu cầu trên. Khi đến thứ tự của người cast skill. Skill ritual sẽ được cast.</p>
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
          if(x.id == "009"){
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