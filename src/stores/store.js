
import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
export default new Vuex.Store({  
  state: {
    baseUrl: "https://www.equator8848.xyz/evs",
    utils : require('../utils/index.js'),
    roomId: '41500521',
    buildingId: '1'
    // roomId: '43000303'
  
  }, 
  mutations: {    
    
  }
});