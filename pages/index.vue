<template>
  <div>
  
  <h1 class="title">Welcome to Vuex with NuxtJS </h1>
    <alert/>
    <modal/>
    <landingPages/>
    <listData judul="ini judul props" pesan="ini judul pesan"/>
  </div>
</template>

<script>
import alert from '~/components/alert.vue'
import modal from '~/components/modal.vue'
import landingPages from '~/pages/landingPage.vue'
import listData from '~/pages/listData.vue'

export default {
  layout: 'default',
    components: {
    listData,landingPages,alert,modal
  },

}
</script>

<style lang="scss">
.footer{
   position:absolute;
   bottom:0;
   width:100%;
   height:60px;   
   background:#17a2b8;
}
</style>