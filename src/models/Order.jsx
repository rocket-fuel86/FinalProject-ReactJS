export class Order {
    constructor(fullname, address, date, cart, total = 0) {
        this.fullname = fullname
        this.address = address
        this.date = date
        this.cart = cart
        this.total = total
    }

    calculateTotal() {
        this.total = this.cart.items.reduce((sum, item) => sum + item.product.getPrice() * item.count, 0)
        return this.total;
    }
}