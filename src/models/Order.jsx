export class Order {
  constructor({ fullname, email, phone, address, cart }) {
    this.fullname = fullname
    this.email = email
    this.phone = phone
    this.address = address
    this.cart = cart
    this.date = new Date().toISOString()
    this.total = this.calculateTotal()
  }

  calculateTotal() {
    return this.cart.items.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0
    )
  }

  toJSON() {
    return {
      fullname: this.fullname,
      email: this.email,
      phone: this.phone,
      address: this.address,
      date: this.date,
      total: this.total,
      cart: this.cart.items.map(item => ({
        id: item.product.id,
        title: item.product.title,
        price: item.product.price,
        count: item.count
      }))
    }
  }
}
