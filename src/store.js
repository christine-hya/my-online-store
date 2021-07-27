import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'Earrings', image: 'src/assets/images/online-store-2.JPG', price: 600 },
        { invId: 2, name: 'Ring', image: 'src/assets/images/online-store-1.JPG', price: 800 },
        { invId: 3, name: 'Jacket', image: 'src/assets/images/online-store-4.JPG', price: 3000 },
        { invId: 4, name: 'Polo Neck', image: 'src/assets/images/online-store-5.JPG', price: 1500 },
        { invId: 5, name: 'Velvet Dress', image: 'src/assets/images/online-store-16.JPG', price: 1500 },
        { invId: 6, name: 'Pants', image: 'src/assets/images/online-store-7.JPG', price: 2000 },
        { invId: 7, name: 'Throw', image: 'src/assets/images/online-store-8.JPG', price: 3000 },
        { invId: 8, name: 'Beaded Shirt', image: 'src/assets/images/online-store-17.JPG', price: 1000 },
        { invId: 9, name: 'Hand Fan', image: 'src/assets/images/online-store-18.JPG', price: 700 },
        { invId: 10, name: 'Sweater Disorder', image: 'src/assets/images/online-store-19.JPG', price: 2000 },
        { invId: 11, name: 'Platform Shoes', image: 'src/assets/images/online-store-23.JPG', price: 3000 },
        { invId: 12, name: 'Summer Dress', image: 'src/assets/images/online-store-25.JPG', price: 1500 },
        { invId: 13, name: 'Red Skirt', image: 'src/assets/images/online-store-26.JPG', price: 1000 },
        { invId: 14, name: 'Beatles T-shirt', image: 'src/assets/images/online-store-3.JPG', price: 1000 },
        { invId: 15, name: 'Snake Ring', image: 'src/assets/images/online-store-12.JPG', price: 800 },
        { invId: 16, name: 'Flower Blouse', image: 'src/assets/images/online-store-13.JPG', price: 1000 },
        { invId: 17, name: 'Waist Coat', image: 'src/assets/images/online-store-14.JPG', price: 1500 },
        { invId: 18, name: 'Black Dress', image: 'src/assets/images/online-store-15.JPG', price: 1000 },
        { invId: 19, name: 'Leather Jacket', image: 'src/assets/images/online-store-20.JPG', price: 1500 },
        { invId: 20, name: 'Sweater White', image: 'src/assets/images/online-store-21.JPG', price: 2000 },
        { invId: 21, name: 'Red Sweater', image: 'src/assets/images/online-store-9.JPG', price: 2000 },
        { invId: 22, name: 'Dungarees', image: 'src/assets/images/online-store-27.JPG', price: 1500 },
        { invId: 23, name: 'Backpack', image: 'src/assets/images/online-store-10.JPG', price: 2000 },
        { invId: 24, name: 'Glasses', image: 'src/assets/images/online-store-6.JPG', price: 1000 },
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