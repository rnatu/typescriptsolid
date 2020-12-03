/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

//dependencias

//% dependencia comentada para utilização do MOCK
// import { Messaging } from './services/messaging';

import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';

//classe
import { Order } from './classes/order';
import { NoDiscount /*fiftyPercentDiscount*/ } from './classes/discount';
import { EnterpriseCustomer /*IndividualCustomer*/ } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);

// % instancia comentada para uso do MOCK
// const messaging = new Messaging();

const persistency = new Persistency();

// const individualCustomer = new IndividualCustomer(
//   'Renato',
//   'Xavier',
//   '123-444-555-50',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '222-222-22222-00',
);

class MessaginMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messaginMock = new MessaginMock();

// % injeção de dependencias no construtor
const order = new Order(
  shoppingCart,
  messaginMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
