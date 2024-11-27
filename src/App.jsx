import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ProductosContainer } from './Components/ProductosComponents/ProductosContainer/ProductosContainer'
import { FabricantesContainer } from './Components/FabricantesComponents/FabricantesContainer/FabricantesContainer'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { Detalles } from './Components/Detalles/Detalles'
import { ComponentesContainer } from './Components/ComponentesComponents/ComponentesContainer/ComponentesContainer'
import { FabricanteDetalles } from './Components/FabricantesComponents/FabricanteDetalles/FabricanteDetalles'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/fabricantes' element={<FabricantesContainer />}/>
          <Route path='/productos' element={<ProductosContainer />}/>
          <Route path='/productos/:id' element={<Detalles />} />
          <Route path='/productos/:id/componentes' element={<ComponentesContainer />} />
          <Route path='/productos/:id/fabricante' element={<FabricanteDetalles />} />
          <Route path="*" element={<Home />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App