import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ProductosContainer } from './Components/ProductosComponents/ProductosContainer/ProductosContainer'
import { FabricantesContainer } from './Components/FabricantesComponents/FabricantesContainer/FabricantesContainer'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { Detalles } from './Components/Detalles/Detalles'
import { ComponentesContainer } from './Components/ComponentesComponents/ComponentesContainer/ComponentesContainer'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/fabricantes' element={<FabricantesContainer />}/>
          <Route path='/productos' element={<ProductosContainer />}/>
          {/*<Route path='/componentes' element={<ComponentesContainer />}/>*/}
          {/*<Route path='/detalles' element={<Detalles />} />*/}
          <Route path='/productos/:id' element={<Detalles />} />
          <Route path='/productos/:id/componentes' element={<ComponentesContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App