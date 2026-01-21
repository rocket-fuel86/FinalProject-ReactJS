import './App.css'
import { Routes, Route } from "react-router";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import ProductsProvider from './context/ProductsProvider'
import CartProvider from './context/CartProvider'

import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navbar logo={"Store"} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
        
        <Footer />
      </CartProvider>
    </ProductsProvider>
  )
}
