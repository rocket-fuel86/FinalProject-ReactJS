import { Product } from "./Product";

export class ElectronicsProduct extends Product {
  constructor(props) {
    super(props)
    this.warranty = props.warranty
  }

  getPrice() {
    return this.price * 1.1
  }
}