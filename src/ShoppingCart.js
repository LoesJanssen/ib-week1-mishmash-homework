class ShoppingCart {
  constructor(numberOfItems) {
    this.numberOfItems = numberOfItems;
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    const item = { name: itemName, quantity: quantity, pricePerUnit: price };
    this.items.push(item);
  }
}

module.exports = ShoppingCart;
