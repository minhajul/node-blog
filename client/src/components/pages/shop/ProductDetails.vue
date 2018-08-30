<template>
  <div class="products">
    <div class="row">
      <div class="col-md-8">
        <h2>Products Details</h2>
        <hr>
        <div class="row">
          <div class="col-12">
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
    name: "ProductDetails",
    components: {Cart, SingleProduct},
    data(){
      return {
        product: {},
        errorMessage: null
      }
    },
    mounted(){
      axios.get('http://localhost:3000/api/v1/product/'+ this.$route.params.id)
        .then(response => response)
        .then(responseData => {
          if (responseData.data.status === 'success'){
            this.product = responseData.data.product;
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
