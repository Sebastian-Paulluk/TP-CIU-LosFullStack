import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ProductosContainer } from './Components/ProductosComponents/ProductosContainer/ProductosContainer'
import { FabricantesContainer } from './Components/FabricantesComponents/FabricantesContainer/FabricantesContainer'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { DetallesProducto } from './Components/ProductosComponents/DetallesProducto/DetallesProducto'
import { ComponentesContainer } from './Components/ComponentesComponents/ComponentesContainer/ComponentesContainer'
import { FabricanteDetalles } from './Components/FabricantesComponents/FabricanteDetalles/FabricanteDetalles'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './Contexts/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Toaster />
        <BrowserRouter >
        <Header />
          <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/fabricantes' element={<FabricantesContainer />}/>
            <Route path='/fabricantes/:id' element={<FabricanteDetalles />}/>
            <Route path='/productos' element={<ProductosContainer/>}/>
            <Route path='/productos/:id' element={<DetallesProducto />} />
            <Route path='/productos/:id/componentes' element={<ComponentesContainer />} />
            <Route path='/productos/:id/fabricante' element={<FabricanteDetalles />} />
            <Route path="*" element={<Home />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider >
    </>
  )
}

export default App