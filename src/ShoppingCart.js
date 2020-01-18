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
  clear() {
    return (this.items = []);
  }
  total() {
    const totalShoppingCart = this.items.reduce(function(
      totalValueSoFar,
      item
    ) {
      const totalPricePerItem = item.quantity * item.pricePerUnit;
      return totalValueSoFar + totalPricePerItem;
    },
    0);
    return totalShoppingCart;
  }
}

module.exports = ShoppingCart;
