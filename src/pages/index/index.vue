<template>
  <div id="container">
    <div class="use" @click="toAny">
      <img src="../../../static/images/analyze.jpg">
      <p>用电分析</p>
    </div>
    <div class="use" @click="toDor">
      <img src="../../../static/images/dormitory.jpg">
      <p>历史数据</p>
    </div>
    <div class="use" @click="toBuild">
      <img src="../../../static/images/building.jpg">
      <p>楼栋用电情况</p>
    </div>
    <div class="use" @click="toBala">
      <img src="../../../static/images/balance.jpg">
      <p>电费余额</p>
    </div>
    <div class="use" @click="toAbnor">
      <img src="../../../static/images/abnormal.jpg">
      <p>异常用电</p>
    </div>
    <div class="use" @click="toCall">
      <img src="../../../static/images/callboard.jpg">
      <p>公告板</p>
    </div>

  </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return {}
  },
  methods:{
    toCom:function(count){
    	//点击跳转相应页面，向swip传递参数
      this.$router.push({
      	name:'swiper',
      	params:{
      		id:count
      	}
      });
    },
    toAny:function(){
    	this.toCom(0);
    },
    toDor:function(){
    	this.toCom(1);
    },
    toBuild:function(){
    	this.toCom(2);
    },
    toBala:function(){
    	this.toCom(3);
    },
    toAbnor:function(){
    	this.toCom(4);
    },
    toCall:function(){
    	this.toCom(5);
    }
  }
}
</script>

<style scoped>
#container{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
}
.use{
  width: 150px;
  height: 170px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 10px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
p{
  font-weight: bold;
  font-size: 12px;
}
</style>