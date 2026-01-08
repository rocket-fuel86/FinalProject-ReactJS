export class Cart {
  constructor(items = []) {
    this.items = items
  }

  add(product) {
    const existing = this.items.find(i => i.product.id === product.id)
    if (existing) existing.count++
    else this.items.push({ product, count: 1 })
    return new Cart([...this.items])
  }

  getTotal() {
    return this.items.reduce(
      (sum, i) => sum + i.product.price * i.count, 0
    )
  }
}