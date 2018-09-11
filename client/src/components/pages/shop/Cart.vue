<template>
  <div class="cart-area">
    <h2>Cart</h2>
    <hr>
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
            {{ item.quantity }}
          </td>
          <td>
            <button type="button" class="btn btn-outline-danger btn-xs" @click.prevent="removeFromCart(index)">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <hr>

      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>${{ total }}</td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "Cart",
    computed: {
      ...mapGetters({
        cart: 'getCart',
        total: 'getTotal'
      })
    },
    methods: {
      removeFromCart(index) {
        this.$store.commit('removeFromCart', index)
      }
    }
  }
</script>
