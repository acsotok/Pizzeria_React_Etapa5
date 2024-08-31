import { useState } from "react"
import {pizzaCart} from "../data/pizzas"
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap"

const CartPage = () => {
  const [cart, setCart] = useState (pizzaCart)
  
  const aumentarCantidad = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? {...pizza, count:pizza.count +1} : pizza
    ))
  }

  const disminuirCantidad = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? {...pizza, count:pizza.count -1} : pizza).filter(pizza => pizza.count > 0)
    )
  }

  const precioTotal = cart.reduce((total, pizza) => total + pizza.price*pizza.count,0)

  return (
    <>
      <Container>
        <h2 className="my-4" style={{color:"rgb(40, 130, 199)"}}>Tu Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            {cart.map(pizza => (
              <Card key={pizza.id} className="mb-3">
                <Row className="no-gutters">
                  <Col md={4}>
                    <Image src={pizza.img} alt={pizza.name} fluid />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{pizza.name}</Card.Title>
                      <Card.Text>
                        Precio: ${pizza.price}
                        <br />
                        Cantidad: {pizza.count}
                      </Card.Text>
                      <Button variant="danger" onClick={() => disminuirCantidad(pizza.id)} className="me-2">-</Button>
                      <Button variant="success" onClick={() => aumentarCantidad(pizza.id)}>+</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <h3 style={{color:"rgb(40, 130, 199)"}}>Total: ${precioTotal}</h3>
            <br />
            <Button type="submit" className="btn btn-primary">Pagar</Button>
          </>
        )}
      </Container>
    </>
    
  )
}

export default CartPage