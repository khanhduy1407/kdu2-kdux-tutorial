import Kdu from 'kdu';
import Kdux from 'kdux';

Kdu.use(Kdux);

export const store = new Kdux.Store({
  state: {
    products: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Sheels', price: 80 }
      ]
  }
})
