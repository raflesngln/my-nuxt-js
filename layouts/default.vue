<template>
  <div id="page">
    <!-- Navigation -->
    <Navigation/>
    <!-- Content -->
    <div class="row">

        <div class="col-md-2 col-lg-2 left-nav">
          <!-- Sidebar -->
          <h4>Menu</h4>
          <sidebar/>
        </div>
        
        <div class="col-md-10 col-lg-10 box-content">
        <!-- Breadcrumb -->          
          <div v-if="!$store.state.employee.address" class="container "><b-breadcrumb :items="items"/></div>
          <div v-else class="container ">
          <b-breadcrumb :items="items"/>
              <a class="navbar-brand" href="#" @click="goBack()"><span class="ion-android-arrow-back"></span> </a>
          </div>
          <!-- end of braedcrumb -->

          <!-- Content -->
          <b-card>
          <nuxt/>
          </b-card>
        </div>

        <div class="col-md-12 col-lg-12 box-footer">
              <!-- Footer -->
          <h5>This is footer content</h5>
        </div>
    
    </div>

  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import sidebar from '~/components/sidebar.vue'
export default {
            components: {
                Navigation,sidebar
              },
              data () {
              return {
                items: [{
                  text: 'Home',
                  href: '/',
                }, {
                  text: 'List',
                  href: '#',
                }]
              }
            },
        methods : {
                goBack () {
                  this.$store.commit('setEmployee', {})
                  this.$router.replace({ 'path' : '/' })
                }
        }
}
</script>

<style lang="scss">
.left-nav{
  background:#FAFAFA;
}
#page{
  background:#E0E0E0;
}
.box-content{
  background:#E0E0E0;
  min-height:600px;
}
.box-footer{
  background:#17a2b8;
  height:50px;
  margin-top:10px;
}
.bg-info {
    z-index: 999 !important;
}
</style>