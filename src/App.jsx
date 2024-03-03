
import { useEffect, useState } from 'react'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, useParams } from 'React-router-dom'

function App() {

  const [cat, setCat] = useState("Listado de Productos")
  const {category} = useParams()
  useEffect(()=>{
    setCat(category)
  },
  [category])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={cat} />}/>
          <Route path="/category/:catId" element={<ItemListContainer greeting={cat} />}/>
          <Route path="/detalle/:prodId" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1 style={{textAlign: "center"}}>404 Not FOUND</h1>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
