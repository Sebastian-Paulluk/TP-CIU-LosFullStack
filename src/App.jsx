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
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([]); 
  const [total, setTotal] = useState(0); 
  const addToCart = (item) => { 
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (index) => { 
    const newCart = cart.filter((_, i) => i !== index); 
    setCart(newCart); 
  }; 

  const calculateTotal = () => { 
    const newTotal = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0); 
    setTotal(newTotal); 
  };
  return (
    <>
      <BrowserRouter >
      <Header
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          calculateTotal={calculateTotal}
          total={total}
        />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/fabricantes' element={<FabricantesContainer />}/>
          <Route path='/productos' element={<ProductosContainer addToCart={addToCart}/>}/>
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