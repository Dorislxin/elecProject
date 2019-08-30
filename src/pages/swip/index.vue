<template>
	<div class="page">
		<swiper :options="swiperOption" ref="mySwiper" class="content">
			<!-- slides -->
			<swiper-slide><analyze></analyze></swiper-slide>
			<swiper-slide><dormitory></dormitory></swiper-slide>
			<swiper-slide><building></building></swiper-slide>
			<swiper-slide><balance></balance></swiper-slide>
			<swiper-slide><abnormal></abnormal></swiper-slide>
			<swiper-slide><callboard></callboard></swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
require("swiper/dist/css/swiper.css");
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import analyze from '@/components/analyze'
import dormitory from '@/components/dormitory'
import building from '@/components/building'
import balance from '@/components/balance'
import abnormal from '@/components/abnormal'
import callboard from '@/components/callboard'
import store from "../../stores/store"

export default {
	components: {
		swiper,
		swiperSlide,
		analyze,
		dormitory,
		building,
		balance,
		abnormal,
		callboard
		
	},
    data() {
      return {
		currentTab:1,
		lists:[],
		info:[],
		// swiperOption:{}
        swiperOption: {
            pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets',
			},
			initialSlide: 0,
			centeredSlides: true,
			slidesPerView: 1.16, 
			spaceBetween: 4,
			notNextTick: true,
        }
      }
	},
	created:function(){
		this.getParams();
	},
	methods:{
		//接收参数，判断显示哪一页
		getParams:function(){
			var pageid = this.$route.params.id;
			this.swiperOption.initialSlide = pageid;
			
		}
	},
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  }

</script>

<style scoped>
page{
	width: 100%;
	height: 100%;
}
.page{
  width: 100%;
  height: 100%;
  background-color: #F0EFF5;
}
.content{
  width: 100%;
  height: 96%;
}
</style>
