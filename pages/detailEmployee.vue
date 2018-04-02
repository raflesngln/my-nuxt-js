<template>
  <div class="mt-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-8">
          <img :src="employee.gambar" alt="Card image cap" class="img-fluid">
          <p class="card-text"><small class="text-muted">{{ employee.name }} - {{ employee.email }} - {{ employee.address }}</small></p>
          <h5 class="card-title">{{ employee.name }}</h5>
          <p class="card-text">{{ employee.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    employee () { return this.$store.state.employee }
  }
}
</script>