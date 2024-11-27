import { Modal, Button } from 'react-bootstrap';
import './Cart.scss';

export const Cart = ({ cart, removeFromCart, calculateTotal, total, showCart, setShowCart, showTotal, setShowTotal }) => {
  const handleCloseCart = () => setShowCart(false);
  const handleCloseTotal = () => setShowTotal(false);

  return (
    <>
      <Modal show={showCart} onHide={handleCloseCart} dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div className="cart-items-container">
              {cart.map((producto, index) => (
                <div key={index} className="card mb-3" style={{ width: '100%' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={producto.pathImg} className="img-fluid rounded-start" alt="FotoProducto" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Precio: ${producto.precio.toLocaleString()}</p>
                        <p className="card-text">Cantidad: {producto.quantity}</p>
                        <Button
                          className="button-remove-cart"
                          variant="danger"
                          onClick={() => removeFromCart(producto)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              calculateTotal();
              setShowTotal(true);
            }}
          >
            Calcular Total
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTotal} onHide={handleCloseTotal}>
        <Modal.Header closeButton>
          <Modal.Title>Total del Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Total: ${total.toLocaleString()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTotal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
