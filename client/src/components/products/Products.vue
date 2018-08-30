<template>
  <div class="row products">
    <div class="col-4">
      <Single></Single>
    </div>
    <div class="col-4">
      <Single></Single>
    </div>
    <div class="col-4">
      <Single></Single>
    </div>
  </div>
</template>

<script>

  import Single from './Single'

  export default {
    name: "Products",
    components: {Single}
  }
</script>

<style scoped>

</style>
