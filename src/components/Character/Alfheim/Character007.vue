<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td colspan="2">
        <img src="../../../assets/character/007.jpg" style="height: 400px ;"/>
      </td>
    </tr>
    <tr>
      <td width="50%"></td>
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
          <div class="img"><img src="../../../assets/character/00701.png" style="height: 40px ;"/></div>
          <div class="name">Fangs and Claws</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">2AP</div>
          <div class="tag"> <attack/> <phys/> <single/> <melee/> <effect/> <duration/> DOT </div>
          <div class="description">
            Tấn công kẻ địch trước mặt 2 lần, 
            đòn đánh đầu gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>) 
            tạo 1 [Bleed] giá trị 50% Might (<span class="phys">({{0.5 * might}})</span>).
            Đòn đánh thứ 2 gây 50% Might (<span class="phys">({{0.5 * might}})</span>). 
            tạo 1 [Bleed] giá trị 25% Might (<span class="phys">({{0.25 * might}})</span>).
          </div>
          <div class="description">
            Tấn công kẻ địch trước mặt, 
            đòn đánh đầu gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.5 * might}})</span>) 
            tạo 1 [Bleed] giá trị 50% Might (<span class="phys">({{0.5 * might}})</span>).
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
            Nếu đang ở dạng người: 
            [Shapeshifter] : Hóa sói và lao tới tấn công kẻ địch, gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>). 
            [Move]: Tiến lên phía trước. Nếu di chuyển thành công, tấn công thêm 1 lần nữa gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>). 
            <br/>
            Nếu đang ở dạng sói:
            [Shapeshifter] : Hóa người và Xóa bỏ toàn bộ Debuff cùng Negetive status trên người.
            [Move]: Lùi về sau. Nếu di chuyển thành công, tấn kẻ địch phía trước gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>). 
          </div>
          <div class="description">
            Nếu đang ở dạng người: 
            [Shapeshifter] : Hóa sói.
            [Move]: Tiến lên phía trước. Nếu di chuyển thành công, tấn kẻ địch phía trước gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>). 
            <br/>
            Nếu đang ở dạng sói:
            [Shapeshifter] : Hóa người.
            [Move]: Lùi về sau. Nếu di chuyển thành công, tấn kẻ địch phía trước gây sát thương vật lý bằng 100% Might (<span class="phys">({{1.0 * might}})</span>). 
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00703.png" style="height: 40px ;"/></div>
          <div class="name">The Howl</div>
          <div class="type">Type: 3-o</div>
          <div class="cost">2AP</div>
          <div class="tag"> <effect/> <phys/> <bond/> </div>
          <div class="description">
            Nếu đang ở dạng người: Hú lên 1 tiếng, tăng cho toàn bộ đồng minh trừ bản thân 30% sát thương vật lý.
            Nếu đang ở dạng sói: Hú lên 1 tiếng, hồi phục cho toàn bộ đồng minh có trait [Wolf] trừ bản thân 1AP.            
          </div>
          <div class="description">
            Nếu đang ở dạng người: Hú lên 1 tiếng, tăng cho bản thân 20% sát thương vật lý.
             Nếu đang ở dạng sói: Hú lên 1 tiếng, tăng cho toàn bộ đồng minh có trait [Wolf] 30% sát thương. 
          </div>
        </div>
      </td>
      <td style="padding-left:5px">
       
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
        <p>Tộc người sói Moonsong. Một chi tộc của người Elf đã từ bỏ thể xác máu thịt của bản thân và hoàn toàn trở thành một cỗ máy.</p>
        <p>Thông qua khả năng chuyển dời tâm trí, người Elf và High Elf đã thành công bỏ đi cơ thể yếu đuối 
          để chuyển vào một thân thể sắt thép, một cỗ máy giết chóc đúng nghĩa đen. Và với sự tôn thờ thần mặt trăng
          có một tộc đàn đã dùng hình ảnh những con sói để làm hiện thân cho bản thân.
        </p>
        <p>Vì cơ thể máy móc có tuổi thọ gần như vô tận, có những con sói đã sống cả thế kỷ.</p>
      </td>
    </tr>
    <tr v-if="active=='info'">
      <td colspan="2">
        <p>Lần này tôi giới thiệu thêm 1 bộ kỹ năng nữa là Shapeshifter. Nhân vật sẽ thay đổi giữa 2 dạng là người và sói. 
        </p>
        <p>Về cơ bản, ông ta chỉ có 3 skill, điều này khiến khả năng cường hóa ở Link Skill là lớn hơn 1 ô. 
          Nhưng thực chất ông ta lại có 6 skill, di chuyển tùy ý, cách sử dụng là tùy thuộc vào bạn.
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
          if(x.id == "007"){
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