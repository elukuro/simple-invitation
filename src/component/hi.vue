<template>
  <div class="hi" v-if="hi_show">
      <h1>Hey, <span v-html="name">{{name}}</span></h1>
  </div>
</template>
<script>
export default {
  name:'hi',
  data(){
      return{
          name:'Kawan'
      }
  },
  computed:{
    'hi_show':function(){
            return this.$store.state.hi_show
    },
    'opening_show':function(){
        return this.$store.state.opening_show
    }
  },
  methods:{
       updateHi:function(){
            setTimeout(() => {
                this.$store.commit('updateHi');
            }, 13000);
        },
        getUrl:function(){
            let uri = window.location.href.split('?');
            if (uri.length == 2)
            {
                let vars = uri[1].split('&');
                let getVars = {};
                let tmp = '';
                vars.forEach(function(v){
                    tmp = v.split('=');
                    if(tmp.length == 2)
                    getVars[tmp[0]] = tmp[1];
                });
                let name=getVars['person'];
                let newName=name.replace("%20", " ");
                this.name=newName;
            }
        }
            
  },
  mounted(){
    this.getUrl();
    this.updateHi();
  }
}
</script>
<style lang="scss">
@import '../style/var.scss';
@import '../style/animation.scss';
    .hi{
        text-align:center;
        font-family:$libre;
        color:$brown;
        margin-top:45vh;
        animation: opacity 2s 1 alternate; 
        h1{
            text-transform:capitalize;
            span{
                animation: blackblur 3s 1 alternate;  
            }
        }
    }
</style>


