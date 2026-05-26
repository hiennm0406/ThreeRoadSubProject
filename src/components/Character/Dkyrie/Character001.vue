<template>
   <h2>Trần Ngọc Minh</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/001.jpg" style="height: 400px ;"/>
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
        <p>Class: D'kyrie - Original: Midgard (?)</p>
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
          <div class="img"><img src="../../../assets/character/00101.png" style="height: 40px ;"/></div>
          <div class="name">Kick hit</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1AP</div>
          <div class="tag"><attack/> <melee/> <single/> <phys/></div>
          <div class="description">Lao đến tấn công đối thủ bằng một cú đấm, gây ra sát thương vật lý bằng 200% Might <span class="phys">({{2*might}})</span></div>
          <div class="description">Lao đến tấn công đối thủ bằng một cú đấm, gây ra sát thương vật lý bằng 100% Might <span class="phys">({{1*might}})</span></div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00102.png" style="height: 40px ;"/></div>
          <div class="name">Martial art</div>
          <div class="type">Type: 2-o</div>
          <div class="cost">1AP</div>
          <div class="tag"><attack/> <melee/> <single/> <phys/> <effect/> <duration/> </div>
          <div class="description">Lao đến tấn công đối thủ bằng một cú đá mạnh, làm mất trọng tâm của địch thủ. Gây ra sát thương vật lý bằng 200% Might <span class="phys">({{2*might}})</span>, đồng thời giảm sát thương của kẻ địch đi 10% trong turn này.</div>
          <div class="description">Lao đến tấn công đối thủ bằng một cú đá mạnh. Gây ra sát thương vật lý bằng 120% Might <span class="phys">({{1.2*might}})</span>.</div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00103.png" style="height: 40px ;"/></div>
          <div class="name">Critical hit</div>
          <div class="type">Type: o-3</div>
          <div class="tag"><effect/> <phys/> <bond/> </div>
          <div class="description">Đòn tấn công vật lý này được tăng thêm 10% sát thương.</div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00104.png" style="height: 40px ;"/></div>
          <div class="name">Quick hit</div>
          <div class="type">Type: o-6</div>
          <div class="tag"><attack/> <melee/> <single/> <phys/> <bond/> </div>
          <div class="description">Sau khi tấn công, Trần Ngọc Minh sẽ tấn công đối thủ thêm 1 lần nữa, gây sát thương vật lý bằng 80% Might <span class="phys">({{0.8 * might}})</span></div>
          <div class="description">Sau khi tấn công, Trần Ngọc Minh sẽ tấn công đối thủ thêm 1 lần nữa, gây sát thương vật lý bằng 40% Might <span class="phys">({{0.4 * might}})</span></div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td colspan="2"><span style="font-size: smaller;">Lưu ý chỉ số sát thương trong skill là tương đối, chưa tính hiệu ứng tăng lên từ artifact, trait.</span></td>
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
          if(x.id == "001"){
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