//dependencias
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './entities/shopping-cart';
import { Product } from './entities/product';

//classe
import { Order } from './entities/order';

//dependencias
const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
//injeção de dependencias no construtor
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
