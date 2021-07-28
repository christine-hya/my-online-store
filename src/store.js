import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'Earrings', image: './assets/images/online-store-2.JPG', price: 600 },
        { invId: 2, name: 'Ring', image: '../assets/images/online-store-1.jpg', price: 800 },
        { invId: 3, name: 'Jacket', image: '../assets/images/online-store-4.jpg', price: 3000 },
        { invId: 4, name: 'Polo Neck', image: '../assets/images/online-store-5.jpg', price: 1500 },
        { invId: 5, name: 'Velvet Dress', image: '../assets/images/online-store-16.jpg', price: 1500 },
        { invId: 6, name: 'Pants', image: '../assets/images/online-store-7.jpg', price: 2000 },
        { invId: 7, name: 'Throw', image: '../assets/images/online-store-8.jpg', price: 3000 },
        { invId: 8, name: 'Beaded Shirt', image: '../assets/images/online-store-17.jpg', price: 1000 },
        { invId: 9, name: 'Hand Fan', image: '../assets/images/online-store-18.jpg', price: 700 },
        { invId: 10, name: 'Sweater Disorder', image: '../assets/images/online-store-19.jpg', price: 2000 },
        { invId: 11, name: 'Platform Shoes', image: '../assets/images/online-store-23.jpg', price: 3000 },
        { invId: 12, name: 'Summer Dress', image: '../assets/images/online-store-25.jpg', price: 1500 },
        { invId: 13, name: 'Red Skirt', image: '../assets/images/online-store-26.jpg', price: 1000 },
        { invId: 14, name: 'Beatles T-shirt', image: '../assets/images/online-store-3.jpg', price: 1000 },
        { invId: 15, name: 'Snake Ring', image: '../assets/images/online-store-12.jpg', price: 800 },
        { invId: 16, name: 'Flower Blouse', image: '../assets/images/online-store-13.jpg', price: 1000 },
        { invId: 17, name: 'Waist Coat', image: '../assets/images/online-store-14.jpg', price: 1500 },
        { invId: 18, name: 'Black Dress', image: '../assets/images/online-store-15.jpg', price: 1000 },
        { invId: 19, name: 'Leather Jacket', image: '../assets/images/online-store-20.jpg', price: 1500 },
        { invId: 20, name: 'Sweater White', image: '../assets/images/online-store-21.jpg', price: 2000 },
        { invId: 21, name: 'Red Sweater', image: '../assets/images/online-store-9.jpg', price: 2000 },
        { invId: 22, name: 'Dungarees', image: '../assets/images/online-store-27.jpg', price: 1500 },
        { invId: 23, name: 'Backpack', image: '../assets/images/online-store-10.jpg', price: 2000 },
        { invId: 24, name: 'Glasses', image: '../assets/images/online-store-6.jpg', price: 1000 },
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
