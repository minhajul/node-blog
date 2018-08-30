<template>

  <div class="row">
    <div class="col-md-9">
      <h2>Products</h2>
      <hr>
      <Products></Products>
    </div>

    <div class="col-md-3">
      <Cart></Cart>
    </div>

  </div>


</template>

<script>
  import Products from '../products/Products'
  import Cart from '../carts/Cart'

  export default {
    name: "Shop",
    components: {Cart, Products}
  }
</script>

<style scoped>

</style>
