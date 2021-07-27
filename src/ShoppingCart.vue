<template>
<div>
<div class="row">
<button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#shoppingCart">
  <i class="bi bi-cart4"></i>  Cart ({{ numInCart }}) </button>
</div>

<div id="shoppingCart" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content bg-dark text-white">
      <div class="modal-header">
        <h5 class="modal-title">Shopping cart</h5>
        <button class=" btn btn-dark text-white" data-bs-dismiss="modal">
          <i class="bi bi-x"></i>
        </button>
      </div>

      <div class="modal-body">

        <table class="table text-white">
  <tbody>
    <tr v-for="(item, index) in cart">
      <td>{{ item.name }}</td>
      <td>{{ item.price | dollars }}</td>
      <td>
        <button class="btn btn-sm btn-danger" @click="removeFromCart(index)"> 
          <i class="bi bi-x"></i></button>
      </td>
    </tr>
    <tr>
      <th>Total</th>
      <th>{{ total | dollars }}</th>
      <th></th>
    </tr>
  </tbody>
</table>

      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Keep shopping</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>


<script>
import { dollars } from './filters';

export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },

   methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
  },

  filters: {
    dollars,
  },  

    watch: {
    inCart: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('CART', JSON.stringify(newValue));
      }
    }
  },

};
</script>