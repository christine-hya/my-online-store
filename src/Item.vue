<template>

   <div class="col-md-3">
    <div class="card text-white bg-dark mt-4">
      <img :src="toLowerCase(image)" :alt="name" class="card-img-top">
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-text">{{ price | dollars }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-dark" @click="addToCart(invId)"> Add to cart 
            <i class="bi bi-cart-plus"></i></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { dollars } from './filters';
export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price'],
   filters: {
    dollars, 
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
};

</script>