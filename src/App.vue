<template>
  <div id="app">
      <app-opening></app-opening>
      <app-hi></app-hi>
      <app-invitation></app-invitation>
  </div>
</template>

<script>

import Opening from './component/opening';
import Hi from './component/hi';
import Invitation from './component/invitation'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:{

  },
  components:{
    'app-opening':Opening,
    'app-hi':Hi,
    'app-invitation':Invitation
  },
  mounted(){
  }

}
</script>

<style lang="scss">
  @import './style/main.scss';
</style>
