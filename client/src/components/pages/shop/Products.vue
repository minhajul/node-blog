<template>
  <div class="products">
    <div class="row">
      <div class="col-md-8">
        <h2>Products</h2>
        <hr>
        <div class="row">
          <div class="col-4" v-for="product in products">
            <SingleProduct v-bind:product="product" :key="product._id"></SingleProduct>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <Cart/>
      </div>
    </div>
  </div>
</template>


<script>
  import SingleProduct from './SingleProduct'
  import Cart from './Cart'
  import axios from 'axios'

  export default {
    name: "Products",
    components: {Cart, SingleProduct},
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
