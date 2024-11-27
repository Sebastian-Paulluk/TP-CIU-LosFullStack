import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart'
import './Header.scss';

export const Header = ({ cart, removeFromCart, calculateTotal, total }) => {
  const [showCart, setShowCart] = useState(false);
  const [showTotal, setShowTotal] = useState(false);

  const handleShowCart = () => setShowCart(true);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">TecnoMax</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/fabricantes">Fabricantes</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleShowCart} className="d-flex align-items-center">
            <i className="bi bi-cart me-2"></i>
            {cart.length > 0 && <span className="badge bg-danger">{cart.length}</span>}
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
