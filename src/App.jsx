
import './App.css'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, } from 'React-router-dom'

function App() {

 
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Listado de Productos" />}/>
          <Route path="/category/:catId" element={<ItemListContainer />}/>
          <Route path="/detalle/:prodId" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1 style={{textAlign: "center"}}>404 Not FOUND</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
