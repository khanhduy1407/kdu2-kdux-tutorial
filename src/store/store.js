import Kdu from 'kdu';
import Kdux from 'kdux';

Kdu.use(Kdux);

export const store = new Kdux.Store({
  strict: true,
  state: {
    products: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Sheels', price: 80 }
      ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: state => {
      setTimeout(function () {
        state.products.forEach(product => {
          product.price -= 1;
        })
      }, 3000)
    }
  }
})
