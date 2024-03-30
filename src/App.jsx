//Estilos
import './App.css'
//Componentes
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'


import { BrowserRouter, Routes, Route, } from 'React-router-dom'
import { CartProvider } from './context/CartContext'
import { NotifiNdAlertProvider } from './context/NotifiNdAlert'



function App() {

  return (
    <>
      <BrowserRouter>
        <NotifiNdAlertProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Listado de Productos" />} />
              <Route path="/category/:catId" element={<ItemListContainer />} />
              <Route path="/detalle/:prodId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="*" element={<h1 style={{ textAlign: "center" }}>404 Not FOUND</h1>} />
            </Routes>
            <Footer />
          </CartProvider>
        </NotifiNdAlertProvider>
      </BrowserRouter>

    </>
  )
}

export default App
