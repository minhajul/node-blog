<template>
  <div class="cart-area">
    <h2>Cart</h2>

    <p v-if="cart.length === 0">
      Your cart is empty!
    </p>

    <div class="card shopping-cart" v-if="cart.length > 0">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in cart" :key="item._id">
          <td>{{ item.title }}</td>
          <td>${{ item.price }}</td>
          <td>
            <div class="quantity">
              <input type="button" value="+" class="plus">
              <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty" size="4">
              <input type="button" value="-" class="minus">
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-outline-danger btn-xs" @click.prevent="removeFromCart(index)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Cart",
        data(){
          return {
            cart: this.$store.getters.getCart
          }
        },
      methods: {
        removeFromCart(index){
            this.$store.commit('removeFromCart', index)
        }
      }
    }
</script>

<style scoped>

</style>
