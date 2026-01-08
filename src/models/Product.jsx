export default class Product {
  constructor({ id, title, price, categoryId, image }) {
    this.id = id
    this.title = title
    this.price = price
    this.categoryId = categoryId
    this.image = image
  }
}