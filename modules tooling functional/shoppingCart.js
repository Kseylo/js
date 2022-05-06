// exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product: quantity });
  console.log(`${quantity} ${product} added to card`);
};

const totalPrice = 237;
const totalQuantity = 27;
export { totalPrice, totalQuantity };

// default export
export default function (product, quantity) {
  cart.push({ product: quantity });
  console.log(`${quantity} ${product} added to card`);
}
