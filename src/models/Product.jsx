export default class Product {
  constructor({ id, title, price, description, categoryId, image }) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.categoryId = categoryId
    this.image = image
  }
}