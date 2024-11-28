import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import './Header.scss';
import { useCart } from '../../Contexts/CartContext';

export const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const { cart, removeFromCart, calculateTotal, total } = useCart();

  const handleShowCart = () => setShowCart(true);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='header'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">TecnoMax</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/fabricantes">Fabricantes</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleShowCart} className="custom-button">
            <i className="bi bi-cart"></i>
            {totalItems > 0 && <span className="badge bg-danger">{totalItems}</span>}
          </Button>
        </Container>
      </Navbar>

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
        total={total}
        showCart={showCart}
        setShowCart={setShowCart}
        showTotal={showTotal}
        setShowTotal={setShowTotal}
      />
    </div>
  );
};
