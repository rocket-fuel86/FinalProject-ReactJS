export class Cart {
  constructor(items = []) {
    this.items = items;
  }

  add(product) {
    const existing = this.items.find(i => i.product.id === product.id);

    if (existing) {
      existing.count += 1;
      return new Cart([...this.items]);
    }

    return new Cart([...this.items, { product, count: 1 }]);
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0
    );
  }
}