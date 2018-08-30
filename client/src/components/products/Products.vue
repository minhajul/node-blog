<template>
  <div class="row products">
    <div class="col-4" v-for="product in products">
       <Single v-bind:product="product" :key="product._id"></Single>
    </div>
  </div>
</template>

<script>

  import Single from './Single'

  export default {
    name: "Products",
    props: ['products'],
    components: {Single}
  }

</script>

<style scoped>

</style>
