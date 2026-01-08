import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import CartProvider from './context/CartProvider'

export default function App() {
  return (
    <CartProvider>
      <Navbar logo={"Store"} />
      <Main />
      <Footer />
    </CartProvider>
  )
}
