export class Order {
  constructor(price, city, type) {
    this.id = (Math.random() * 100).toFixed();

    this.price = price;

    this.dateCreated = new Date();

    this.isConfirmed = false;

    this.dateConfirmed = null;

    this.city = city;

    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

console.log(Order.price);

const order = new Order(1001, 'Kyiv', 'Sell');
order.confirmOrder();
console.log(order);

console.log(order.checkPrice());

console.log(order.isValidType());
