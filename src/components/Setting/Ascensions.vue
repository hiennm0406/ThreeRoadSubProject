<template>
   <h2>Ascensions</h2>
   <p>Hệ thống Ascensions sinh ra để đa dạng hóa các hướng đi của nhân vật. Với mỗi điểm Ascen, nhân vật sẽ càng trở nên mạnh hơn. Và đặc biệt khi lựa chọn được Ascen đỏ sẽ sinh ra thay đổi quan trọng về mặt lối chơi của từng nhân vật.</p>
   
  <img src="./../../assets/other/Ascentree.png"/>
  <p>Đây là 1 ví dụ về cây Ascension. Về cơ bản, có thể tưởng tượng nó giống với Ascen của Genshin Impact khi quay được trùng Character. Nhưng ở đây, người chơi sẽ lựa chọn tăng điểm vào 1 trong 2 nhánh của Ascen. Với mỗi nhánh sẽ tăng các chỉ số khác nhau. Đồng thời ở những ô Ascension màu đỏ, sẽ là những Node quan trọng. Thay đổi gần như hoàn toàn lối chơi của nhân vật. Chúng ta có thể coi như 1 nhân vật sẽ tiến hóa thành 2 class khác nhau. Và ở cuối Ascension Tree, sẽ lại tiếp tục phân ra 2 nhánh class khác nhau nữa.</p>
  <p>Về vấn đề Pay to Win. Những ô Ascen thường có thể được tăng bằng Soul, kiếm được khi roll các nhân vật có cùng Realm, có thể hiểu là Free - dễ up.</p>
  <p>Ví dụ để tăng cây Ascen cho 1 nhân vật thuộc Midgard, chúng ta có thể roll các nhân vật ở Midgard khác và chuyển hóa nhân vật đó thành [Midgard soul]. Sau đó tăng Ascen cho nhân vật này.</p>
  <p>Những ô Ascen đỏ bắt buộc phải roll chính nhân vật này để.</p>
  <p>Vậy nên muốn max Ascen một nhân vật, cần roll thêm 2 bản sao của nhân vật đó.</p>


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