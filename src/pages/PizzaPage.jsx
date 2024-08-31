import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const PizzaPage = () => {

    const [pizza1, setPizza1] = useState([])

    const consultarPizza = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/pizzas/p001")
            const data = await response.json()
            console.log(data)
            setPizza1(data)
            } catch (error){
                console.error(error)
            }
    }
    
    useEffect(() => {
        consultarPizza()
    }, [])

    return(
        <Card style={{ width: '35rem', marginRight:'5px', marginBottom:'5px'}}>
        <Card.Img variant="top" src={pizza1.img} />
        <Card.Body>
            <Card.Title>{pizza1.id} {pizza1.name}</Card.Title>
            <Card.Text>
                {pizza1.desc}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
                <Card.Text style={{fontSize:'15px',color:'gray'}}>
                    INGREDIENTES:
                </Card.Text>
                <Card.Text>
                🍕{pizza1.ingredients.join(", ")}
                </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
                <Card.Title style={{fontSize:'20px', fontWeight:'bold', padding:'10px', color:"rgb(40, 130, 199)"}}>Precio: $ {pizza1.price}</Card.Title>
                <Card.Link href="#" className=''>  <Button variant="outline-dark" style={{fontSize:'10px'}} >Ver más 👀 </Button></Card.Link>
                <Card.Link href="#"  className=''>  <Button variant="dark" style={{fontSize:'10px'}}>Añadir 🛒 </Button></Card.Link>
            </ListGroup.Item>
        </ListGroup>
    </Card>
    )
}

PizzaPage.propTypes = {
    img: PropTypes.string.isRequired,
    pizza: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default PizzaPage