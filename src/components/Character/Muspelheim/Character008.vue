<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    
    <tr>
      <td width="50%"> <img src="../../../assets/character/008.jpg" style="height: 400px ;"/></td>
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
        <p>Class: Demon - Original: Muspelhiem</p>
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
          <div class="type">Type: 2-o</div>
          <div class="cost">1AP</div>
          <div class="tag"> <attack/> <phys/> <single/> <melee/> <effect/> </div>
          <div class="description">
            Tấn công kẻ địch trước mặt, 
            gây sát thương vật lý bằng 150% Might (<span class="phys">({{1.5 * might}})</span>) 
            Tăng sát thương 1% với mỗi 1% máu mất.
          </div>
           <div class="description">
            Tấn công kẻ địch trước mặt, 
            gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>) 
          </div>
        </div>
      </td>
       <td style="padding-left:5px">
       <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00702.png" style="height: 40px ;"/></div>
          <div class="name">The wolf dance</div>
          <div class="type">Type: 3-o</div>
          <div class="cost">1 AP</div>
          <div class="tag"> <attack/> <phys/> <single/> <melee/> SHAPESHIFTER MOVE </div>
          <div class="description">
           Lao vào kẻ địch trước mặt, gây sát thương vật lý bằng 150% Might (<span class="phys">({{1.5 * might}})</span>).
           Sau đó đẩy kẻ địch lùi lại phía sau.
          </div>
          <div class="description">
            Lao vào kẻ địch trước mặt, gây sát thương vật lý bằng 150% Might (<span class="phys">({{1.5 * might}})</span>).
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00703.png" style="height: 40px ;"/></div>
          <div class="name">The Legion</div>
          <div class="type">Type: o-4</div>
          <div class="tag"> <effect/> <phys/> <bond/> </div>
          <div class="description">
            Tăng cho toàn bộ [Legion] 5% Might và 5% Energy.
            Sau khi hành động, switch ô Tatic cuối cùng của mình thành 1 ô Tactic của [Legion] gần nhất.
          </div>
          <div class="description">
            Tăng cho toàn bộ [Legion] 5% Might và 5% Energy
          </div>
        </div>
      </td>
      <td style="padding-left:5px">
       <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00703.png" style="height: 40px ;"/></div>
          <div class="name">The Burning</div>
          <div class="type">Type: o2-4</div>
          <div class="tag"> <effect/> <phys/> <bond/> </div>
          <div class="description">
           Đòn tấn công để lại trên người đối thủ 1 [Burn] giá trị = 50% Enegry (<span class="fire">({{0.5 * energy}})</span>), tồn tại trong 2 turn.
          </div>
          <div class="description">
            Đòn tấn công để lại trên người đối thủ 1 [Burn] giá trị = 30% Enegry (<span class="fire">({{0.3 * energy}})</span>), tồn tại trong 2 turn.
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
        <p>Legion, là đội quân của địa ngục. Chúng là con mắt, là hàm răng của Surtur, chúng đi gieo rắc nỗi kinh hoàng lên toàn bộ các cõi.
        </p>
        <p>
          Sau khi rơi vào vòng tay của Surtur, chúng chia sẻ với nhau một cùng một tâm trí. Khi một con tức giận, cả tộc đàn tức giận, khi một con đau đớn,
          cả tộc đàn đau đớn.
        </p>        
        <p>
          Và khi bạn bị một con tấn công. Nó sẽ chỉ là bắt đầu, cả tộc đàn sẽ tìm đến bạn.
        </p>
        <p>Với cơ chế switch, quần thể Legion có thể biến ô Tactic cuối của nó sau khi hành động thành 1 ô Tactic khác. Và nó có thể biến kỹ năng 2-o của đồng minh ngay sau đó thành 3-o. Đương nhiên, đây cũng là 1 sự rủi ro, bởi vì biết đâu khi thêm 1 ô Tactic vào, đồng đội của bạn có thể bị Action Fail!!</p>
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
          if(x.id == "008"){
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