<template>
  <div class="page">
    <div class="contain" :style="note">
      <img src="../../../static/images/abnormal_background.png" alt="" class="abBackground">
      <header class="header">
        <p>用电异常</p>
      </header>
      
      <p v-show="isShow">您的宿舍没有任何异常喔！</p>

      <scroll-view scroll-y="true" style="height:85%;"  >
        <div v-for="item in list" :key="item" class="alarm">
          <ab-info :abMsg="item.alarmType" :abTime="item.alarmTime" :isNew="item.alarmNew"></ab-info>
        </div>
      </scroll-view>
      

      
    </div>
  </div>
  
</template>

<script>
import abInfo from "@/components/ab-info"
import store from "../../stores/store";


export default {
  data:{
    alarmType:'', //警报类型
    alarmTime:'',//警报发生时间
    alarmNew: false, //判断是否最新
    list:[] ,//用电警报列表
    isShow: false
  },
  components: {
    abInfo
  },
  methods:{
     getAbnormalMsg(){
      this.$flyhttp.get(store.state.baseUrl+"/electricityAlarm/getElecAlarmList/"+store.state.roomId,{}).then((res)=>{
        // console.log(res.data)
        this.list = res.data.data;

        if(this.list == null)
          this.isShow = true;

        var now = Date.parse(new Date());
        var time = 0

        for(var i=0;i<this.list.length;i++){
          
          //判断是否显示new: 7天内显示new
          time = now - this.list[i].alarmTime;
          if(time <=  7 * 24 * 3600 * 1000){
            this.list[i].alarmNew = true;
          } else{
            this.list[i].alarmNew = false;
          }

          //获得时间
          this.list[i].alarmTime = store.state.utils.formatTime(this.list[i].alarmTime);

          //判断警报类型
          switch(this.list[i].alarmType){
            case 0: this.list[i].alarmType = '短路预测'; break;
            case 1: this.list[i].alarmType = '漏电预测'; break;
            case 2: this.list[i].alarmType = '违规电器'; break;
            case 3: this.list[i].alarmType = '寒暑假漏电'; break;
            case 4: this.list[i].alarmType = '用电量增速异常'; break;
            default: this.list[i].alarmType = '';
          }
        }
        

      }).catch(error=>{
        console.log(error)
      })
    }
  },
  onLoad(){
    this.getAbnormalMsg()
  }
}
</script>

<style scoped>
page{
  width: 100%;
  height: 100%;

}
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -99;
  background-color: #F0EFF5;
}

.contain{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84%;
  height: 85%;
  margin-top: 8%;
  position: relative;
}
.abBackground{
  width: 100%;
  height: 100%;
  position:absolute;
  z-index: -1;
}
.header{
    width: 99.5%;
    height: 50px;
    background-color: #17DFB7;
    display: flex;
    align-items: center;
    border-top-left-radius: 8rpx;
    border-top-right-radius: 8rpx;
}
.header p{
    color: #ffffff;
    margin-left: 40rpx;
    font-size: 17px;
}

.alarm{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
