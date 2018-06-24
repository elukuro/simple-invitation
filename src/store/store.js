import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state:{
       opening_show:true,
       hi_show:false,
       invitation_show:false,
    },
    getters:{
        
    },
    mutations:{
        updateOpening:state=>{
            state.opening_show=false
            state.hi_show=true
        },
        updateHi:state=>{
                state.hi_show=false,
                state.invitation_show=true
        }
    },
    actions: {
       
    }
})