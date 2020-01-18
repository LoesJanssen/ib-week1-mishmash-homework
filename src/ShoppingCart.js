class ShoppingCart {
  constructor(numberOfItems) {
    this.numberOfItems = numberOfItems;
    this.items = [];
  }
  addItem(name, quantity, pricePerUnit) {
    const item = { name: name, quantity: quantity, pricePerUnit: pricePerUnit };
    this.items.push(item);
  }
}

module.exports = ShoppingCart;
