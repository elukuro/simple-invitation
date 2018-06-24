<template>
    <div class="invitation" v-if="invitation_show">
        <div class="invitation-opening">
            <p>Assalamu'alaikum Warahmatullahi Wabarokatuh</p>
            <p>Dengan <span>memanjatkan</span> puji <span>syukur</span> kehadirat <span>Allah SWT</span> serta memohon <span>rahmat</span> dan ridho-Nya,kami <span>bermaksud</span> menikahkan <span>putra dan putri kami</span> </p>
        </div>
        <div class="invitation-name">
            <h2> <span>Naztasya Oktariana</span></h2>
            <p>&amp;</p>
            <h2><span>Heru Hartanto</span></h2>
        </div>
        <div class="invitation-information">
             <span class="invitation-information__head">yang Insya Allah akan dilaksanakan pada:</span>
             <div class="invitation-information__detail"> 
                <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MXF1MWxvZzRpaXBuMThrbm5mdDQzbjZzcGogaGVydWhhcnRhbnRvMTEwMjkxQG0&tmsrc=heruhartanto110291%40gmail.com" target="_blank">
                    <div class="invitation-date">
                        <p class="invitation-date__name">Minggu</p>
                        <p class="invitation-date__date">8</p>
                        <p class="invitation-date__month">Juli</p>
                        <p class="invitation-date__year">2018</p>
                    </div>
                </a>
                <div class="invitation-place">
                    <p class="invitation-place__akad">Akad nikah | 08:00 WIB - Selesai </p>
                    <p class="invitation-place__resepsi">Resepsi | 11:00 WIB - 15:00 WIB </p>
                    <div class="invitation-place__address">
                        <p>Kediaman mempelai wanita</p>
                        <a href="https://goo.gl/maps/mZ7gtFRBB852" target="_blank">
                        <span>Perumahan</span> griya telaga permai Blok D9 <span>no ( RT 05/019 )</span> Cilangkap, Tapos , Depok , Jalan raya Bogor KM 40.7</p>
                        </a>
                    </div>
                    
                </div>
             </div>
             <div class="invitation-closing">
                 merupakan suatu kehormatan dan kebahagian bagi kami apabila bapak/ibu saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai
             </div>
             <p>Wassalamu'alaikum Warahmatullahi Wabarokatuh</p>
        </div>
    </div>
</template>
<script>

export default {
    name:'invitation',
    data(){
        return{

        }
    },
    methods: {
       
    },
    computed:{
        'invitation_show':function(){
            return this.$store.state.invitation_show
        },
    }
}
</script>
<style lang="scss">
    @import '../style/var.scss';
    @import '../style/animation.scss';
    .invitation{
        text-align:center;
        width:50%;
        margin:5% auto;
        display:block;
        animation: opacity 1s 1 alternate; 
        &-information__head{
            display:block;
            border-bottom:1px solid $brown;
            width:60%;
            margin:0 auto 20px auto;
            padding:0px 0px 10px 0px;
        }
        &-information__detail{
            clear:both;
            overflow:hidden;
            width:80%;
            margin:0 auto;
            a{
                color:$brown;
                p{
                    //color:$brown;
                }
            }
            
        }
        &-date{
            float:left;
            width:30%;
            text-align:center;
            p{
                margin:auto auto;
                padding:0;
                display:table;
            }
            &__date{
                font-size:48px;
                background:$violet;
                color:$white;
                width:60px;
                font-family:$libre;
                border-radius:30px;
                text-align:center;
                margin:8px auto !important;
            }
            &__month{
                font-family:$serif;
                font-size:40px;
                line-height:1em;
                border-bottom:1px solid $brown;
                width:auto;
                padding:0px 10px 0px 10px;
                margin-bottom:3px !important;
            }   
        }
        &-place{
            float:right;
            width:70%;
            text-align:left;
            p{
                margin:0;
                padding:0;
            }
            &__address{
                font-size:14px;
                padding-top:10px;
                a{
                    color:$brown;
                }
                span{
                    animation: blackblur 2s 1 alternate;  
                }
            }
        }

        &-name{
            padding:20px 0px 20px 0px;
            display:block;
            font-family:$serif;
            font-size:24px;
            h2{
                line-height:0px;
                span{
                    animation: blackblur 2s 1 alternate;  
                }
            }
        }
        &-opening{
            p{
                span{
                    animation: blackblur 2s 1 alternate;  
                }
            }
        }
        &-closing{
            margin-top:20px;
        }

    }
</style>

