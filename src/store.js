import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'An Item', image: 'src/assets/images/online-store-2.JPG', price: 999 },
        { invId: 2, name: 'Thing', image: 'src/assets/images/online-store-1.JPG', price: 1499 },
        { invId: 3, name: 'Doo-dad', image: 'src/assets/images/online-store-4.JPG', price: 499 },
        { invId: 4, name: 'Other thing', image: 'src/assets/images/online-store-5.JPG', price: 299 },
      ],
      inCart: JSON.parse(localStorage.getItem('CART')) 
      || [],
    
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },

  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },


});