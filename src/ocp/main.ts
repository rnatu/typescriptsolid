/*
Open/closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação

foi utilizado o padrão Strategy da GOF
*/

//dependencias
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';

//classe
import { Order } from './classes/order';
import { NoDiscount } from './classes/discount';

//dependencias
// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

//injeção de dependencias no construtor
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
