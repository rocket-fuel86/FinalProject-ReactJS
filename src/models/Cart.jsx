export class Cart {
  constructor(items = []) {
    this.items = items
  }

  add(product) {
    const existing = this.items.find(i => i.product.id === product.id)
    
    if (existing) {
      return new Cart(
        this.items.map(item =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      )
    }
    return new Cart([
      ...this.items,
      { product, count: 1 }
    ]);
  }

  getTotal() {
    return this.items.reduce(
      (sum, i) => sum + i.product.price * i.count, 0
    )
  }
}