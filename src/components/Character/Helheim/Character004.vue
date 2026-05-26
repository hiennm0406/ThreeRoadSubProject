<template>
   <h2>{{name}}</h2>
   <table class="table_content">
    <tr>
      <td width="50%">
        <img src="../../../assets/character/004.jpg" style="height: 400px ;"/>
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
        <p>Class: Ghost - Original: Helheim</p>
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
          <div class="img"><img src="../../../assets/character/00401.png" style="height: 40px ;"/></div>
          <div class="name">Incarnation</div>
          <div class="type">Type: 1-o</div>
          <div class="cost">1 AP</div>
          <div class="tag"><effect/> SHIELD HAUNTED </div>
          <div class="description"> Nếu đang ở trạng thái linh hồn, [Haunted] vào đồng minh bên cạnh.
            Nếu đang ở trạng thái [Haunted] hoặc [Evoke], hủy trạng thái và xuất hiện ở ô trống bất kỳ. 
          </div>
           <div class="description">Nếu đang ở trạng thái linh hồn, [Haunted] vào đồng minh ít máu nhất, hồi phục lại cho
            đồng minh đó 5% máu tối đa.
            Nếu đang ở trạng thái [Haunted] hoặc [Evoke], hồi phục lại cho đồng minh đó 5% máu tối đa, 
            rồi hủy trạng thái và xuất hiện ở ô trống bất kỳ. .
          </div>
        </div>
      </td>
       <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00402.png" style="height: 40px ;"/></div>
          <div class="name">Curse</div>
          <div class="type">Type: 2-o</div>
          <div class="cost">1AP</div>
          <div class="tag"><effect/> HAUNTED </div>
          <div class="description">Nếu đang ở trạng thái linh hồn, [Haunted] vào đồng minh bên cạnh.
            Nếu đang ở trạng thái [Haunted] hoặc [Evoke]. Tạo một liên kết giữa đồng minh đang nhập và đồng minh ít máu nhất khác. 
            Khi một người nhận sát thương, người còn lại nhận hộ 30% sát thương.
          </div>
             <div class="description">Nếu đang ở trạng thái linh hồn, [Haunted] vào đồng minh bên cạnh.
            Nếu đang ở trạng thái [Haunted] hoặc [Evoke], Hủy trạng thái và [Haunted] vào đồng minh ít máu nhất ngoài
            đồng minh đang nhập. Tạo một liên kết giữa 2 đồng minh đó. Khi một người nhận sát thương,
            người còn lại nhận hộ 30% sát thương.
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="active=='skill'">
      <td style="padding-right:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00403.png" style="height: 40px ;"/></div>
          <div class="name">Evoke</div>
          <div class="type">Type: 4-o</div>
          <div class="tag">SHIELD HAUNTED</div>
          <div class="description">
            Nếu đang ở trạng thái [Haunted] hoặc [Evoke], hủy trạng thái.
            Lựa chọn 1 đồng minh đã chết ngẫu nhiên, [Evoke] thân thể đồng minh đó.
            Hồi sinh đồng minh đó với 1 máu.
            Nếu không có mục tiêu. [Haunted] vào đồng minh bên cạnh.
          </div>
          <div class="description">
            Nếu đang ở trạng thái [Haunted] hoặc [Evoke], hủy trạng thái.
            Lựa chọn 1 đồng minh đã chết ngẫu nhiên, [Evoke] thân thể đồng minh đó.
            Hồi sinh đồng minh đó với 1 máu và có một lớp giáp vật lý bằng 200% Endurance (<span class="phys">({{2 * endurance}})</span>)
            Nếu không có mục tiêu. [Haunted] vào đồng minh bên cạnh, tạo 1 lớp giáp vật lý bằng 200% Endurance (<span class="phys">({{2 * endurance}})</span>)
          </div>
      </div>
      </td>
      <td style="padding-left:5px">
        <div class="skill_container">
          <div class="img"><img src="../../../assets/character/00404.png" style="height: 40px ;"/></div>
          <div class="name">Symbiotic</div>
          <div class="type">Type: o-2</div>
          <div class="tag"> HEAL SHIELD HAUNTED <bond/> </div>
          <div class="description">Khi nhập hoặc xuất hồn. Hồi phục đồng minh được nhập/xuất 5% máu tối đa.
          </div>
          <div class="description">Khi nhập hoặc xuất hồn. Hồi phục đồng minh được nhập/xuất 5% máu tối đa.
            Tạo một lớp giáp vật lý bằng 200% Endurance (<span class="phys">({{2 * endurance}})</span>) cho mục tiêu 
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
            <td><img src="../../../assets/character/ghost.png" class="icon40"/></td>
            <td>Haunted: Ám vào một đối tượng, cộng đồn 3 chỉ số Might, Enegry, Endurance cho đối tượng đó.</td>
          </tr>
          <tr>
            <td><img src="../../../assets/character/00403.png" class="icon40"/></td>
            <td>Evoke: Ám vào một đối tượng, cộng đồn 3 chỉ số Might, Enegry, Endurance cho đối tượng đó. Đối tượng sẽ chết khi mất trạng thái hiện tại.
              Nếu đối tượng chết, xuất hiện ở 1 ô trống gần đó.
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr v-if="active=='info'">
      <td colspan="2">
          <p>Bóng ma không có tên. Nó chỉ được đánh số khi bóng ma trở nên quá mạnh mẽ.</p>
          <p>Về cơ bản, chủng tộc này không hẳn là 1 chủng tộc. 
            Ghost là 1 tập hợp các hạt nano sinh học có kết nối với nhau - công nghệ của người Vanir. 
            Nhưng nó đã bị vô số linh hồn ám, trở nên mất kiểm soát. Những thông tin này sẽ nói rõ khi đề cập đến lịch sử
            Helheim. 
          </p>
          
          <p>Về nhân vật này, tôi giới thiệu cho các bạn về Haunted và Evoke. Một trạng thái được coi là Fusion 2 nhân vật
            khác nhau làm 1. Nếu đứng đơn lẻ, các Ghost rất yếu ớt. Họ miễn nhiễm vật lý, nhưng dễ tổn thương với nguyên tố.
            Khi fusion, họ trở nên bất tử. Và cộng dồn các chỉ số chính của họ vào đối tượng được dung hợp. Không nhiều, nhưng
            đủ để thay đổi cục diện trận đấu. Chưa kể các kỹ năng của họ.
          </p>
          <p>Về Evoke. Trạng thái này có thể coi là hồi sinh. Nhưng đối tượng được hồi sinh sẽ rất mỏng manh và cần có cover vững chắc
            nếu như không muốn bị làm thịt ngay khi tỉnh dậy. Và kể cả khi đã hồi sinh, sự ràng buộc của Evoke cũng 
            là một bài toán, vì khi Spectre rời khỏi thân thể đó, nó sẽ chết ngay lập tức.
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
          if(x.id == "004"){
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