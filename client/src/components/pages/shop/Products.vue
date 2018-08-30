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
        .then(response => response.data)
        .then(responseData => {
          if (responseData.status === 'success'){
            this.products = responseData.data;
          }else{
            this.errorMessage = 'No products found'
          }
        })
        .catch(error => this.errorMessage = 'No products found ' + error.message);
    }
  }
</script>

<style scoped>

</style>
