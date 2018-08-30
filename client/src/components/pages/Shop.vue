<template>

  <div class="row">
    <div class="col-md-8">
      <h2>Products</h2>
      <hr>

      <Products v-bind:products="products"></Products>

    </div>

    <div class="col-md-4">
      <Cart></Cart>
    </div>
  </div>


</template>

<script>
  import Products from '../products/Products'
  import Cart from '../carts/Cart'
  import axios from 'axios'

  export default {
    name: "Shop",
    components: {Cart, Products},
    data(){
      return {
        products: [],
        errorMessage: null
      }
    },
    mounted(){
      axios.get('http://localhost:3000/api/v1/products')
        .then(response => response)
        .then(responseData => {
          if (responseData.data.status === 'success'){
            this.products = responseData.data.products;
          }else{
            this.errorMessage = 'No post found'
          }
        })
        .catch(error => this.errorMessage = 'No post found'+ error.message);
    }
  }
</script>

<style scoped>

</style>
