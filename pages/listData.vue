<template>
<div>
    <!-- for list data maybe from API rest -->
    <div class="mt-12">
      <div class="container">
        <div class="card-columns">
          <div class="card" v-for="item in employee" v-bind:key="item.key" @click="openDetail(item)">
            <img class="card-img-top" :src="item.gambar" alt="Card image cap">
            <div class="card-body">
              <p class="card-text"><small class="text-muted">{{ item.name }} - {{ item.address }}</small></p>
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text"><small class="text-muted">{{ item.email }}</small></p>
            </div>
          </div>        
        </div>
    </div>
  </div>


  </div>

</template>

<script>
export default {
  props: ['judul', 'pesan'],
   data: function () {
            return {
                employee:{}
            }
        },
        mounted () {
          this.employee=[
                          {
                              name: 'Rafles',
                              address: 'cengkareng',
                              email: 'rafles@gmail.com',
                              gambar:'/avatar1.jpg'
                          },
                          {
                              name: 'Budi',
                              address: 'Surabaya',
                              email: 'budi@gmail.com',
                              gambar:'/avatar2.png'
                          }

                      ]
        },
        methods : {
          openDetail (data) {
            // alert('helloo');
              this.$store.commit('setEmployee', data)
              this.$router.replace({ 'path': '/detailEmployee' })
          }

        }


}
</script>

<style lang="scss" scoped>
/*
 * Card Columns Masonry - Bootstrap 4
 * https://codepen.io/JacobLett/pen/oZmWdd
 */
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .card-columns {column-count: 3;}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
 .card-columns {column-count: 3;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
   .card-columns {column-count: 3;} 
}
</style>