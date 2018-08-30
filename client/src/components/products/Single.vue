<template>
  <div class="card card-cascade card-ecommerce narrower">
    <div class="view view-cascade overlay">
      <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(5).jpg" alt="">
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body card-body-cascade text-center">
      <h4 class="card-title"><strong><a href="">{{ product.title }}</a></strong></h4>

      <p class="card-text">{{ product.description }}</p>

      <div class="card-footer">
        <span class="float-left">${{ product.price }}</span>
        <span class="float-right">
          <a class="" data-toggle="tooltip" data-placement="top" title="Quick Look"><i class="fa fa-eye mr-3"></i></a>
          <a class="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Single",
    props: ['product'],
  }
</script>

<style scoped>

</style>
