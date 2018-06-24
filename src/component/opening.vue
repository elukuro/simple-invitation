<template>
    <div class="opening" v-if="opening_show">
        <p v-html="opening">{{opening}}</p>
    </div>
</template>
<script>
    export default {
        name:'opening',
        data(){
            return{
                opening: '<span>30:21.</span> <span>Dan</span> <span>di antara</span> <span>tanda-tanda</span> <span>kekuasaan-Nya</span> <span>ialah</span> <span>Dia</span> <span>menciptakan</span> <span>untukmu</span> <span>istri-istri</span> <span>dari</span> <span>jenismu</span> <span>sendiri,</span> <span>supaya </span> <span>kamu</span> <span>cenderung</span> <span>dan</span> <span>merasa</span> <span>tenteram</span> <span>kepadanya,</span> <span>dan</span> <span>dijadikan-Nya</span> <span>di antaramu</span> <span>rasa</span> <span>kasih</span> <span>dan</span> <span>sayang.</span> <span>Sesungguhnya</span> <span>pada</span> <span>yang</span> <span>demikian</span> <span>itu</span> <span>benar-benar</span> <span>terdapat</span> <span>tanda-tanda</span> <span>bagi</span> <span>kaum</span> <span>yang</span> <span>berpikir.</span>',
            }
        },
        computed:{
            'opening_show':function(){
                 return this.$store.state.opening_show
            },
        },
         methods:{
            updateOpening:function(){
                setTimeout(() => {
                    this.$store.commit('updateOpening');
                }, 8000);
            }
        },
        mounted(){
            this.updateOpening();
        },
        
    }

</script>
<style lang="scss">
@import '../style/var.scss';
@import '../style/animation.scss';

  .opening{
    text-align:center;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width:45%;
    height:300px;
    border-radius: 3px;
    font-size:18px;
    p{
      color:$brown;
      line-height: 1.5em;
      span:nth-child(n+1){
        animation: blackblur 3s 1 alternate;  
      }
      span:nth-child(2n+3){
        animation-delay: 2s;
        animation: blackblur 4.5s 1 alternate;  
      }

    }
  }
</style>

