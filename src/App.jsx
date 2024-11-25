import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ComponentesContainer } from './Components/ComponentesComponents/ComponentesContainer/ComponentesContainer'
import { ProductosContainer } from './Components/ProductosComponents/ProductosContainer/ProductosContainer'
import { FabricantesContainer } from './Components/FabricantesComponents/FabricantesContainer/FabricantesContainer'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/fabricantes' element={<FabricantesContainer />}/>
          <Route path='/productos' element={<ProductosContainer />}/>
          <Route path='/componentes' element={<ComponentesContainer />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App