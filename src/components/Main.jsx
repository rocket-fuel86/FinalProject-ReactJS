import ProductsList from "./ProductsList";
import Product from "../models/Product"
import CartSection from "./CartSection";

const tempProducts = [
  new Product({
    id: 1,
    title: "iPhone 15",
    price: 40000,
    categoryId: 1,
    image: "https://cdn.new-brz.net/app/public/models/MTP43HX-A/small/j/231108150116832806.jpg"
  }),
  new Product({
    id: 2,
    title: "T-Shirt",
    price: 800,
    categoryId: 2,
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/0d2eef8f-dc1d-4d9f-a14d-8604cc80d3d0/M+NSW+PREM+ESSNTL+SUST+TEE.png"
  }),
  new Product({
    id: 2,
    title: "Nike Air Max 97 By Fans, For Fans",
    price: 800,
    categoryId: 2,
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/h_300,c_limit/0eb75c4b-5ea3-49bd-a83d-93773cc32a4d/image.png"
  }),
  new Product({
    id: 2,
    title: "Nike",
    price: 800,
    categoryId: 2,
    image: "https://grandhall.md/nike/uploads/25-04-25/nike-air-vapormax.jpg"
  })
];

export default function Main() {
    return (
        <>
            <ProductsList productsArray={tempProducts} />
            <CartSection />
        </>  
    )
}