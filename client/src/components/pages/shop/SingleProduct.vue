<template>
  <div class="card card-cascade card-ecommerce narrower">
    <div class="view view-cascade overlay">
      <img class="card-img-top" :src="product.image" alt="">
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body card-body-cascade text-center">
      <h4 class="card-title"><strong><a :href=" '/product/'+ product._id ">{{ product.title }}</a></strong></h4>

      <p class="card-text">{{ product.description }}</p>

      <div class="card-footer">
        <span class="float-left">${{ product.price }}</span>
        <button class="btn btn-primary pull right" @click.prevent="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Single",
    props: ['product'],
    data(){
      return {
        errorMessage: ''
      }
    },
    methods:{
      addToCart(product){
         this.$store.commit('addToCart', product)
      }
    }
  }
</script>
