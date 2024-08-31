import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const  Navegacion = () => {
    const total = 25000;
    const token = true;
    const buttonStyle = {fontSize:'10px'}
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home" className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
            <Nav className="me-auto " >
                <Link to="/" ><Button className="p-2" variant="outline-light" style={buttonStyle}> 🍕 Home</Button> </Link>
                <Link to="/Profile" ><Button className= {token == true ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Profile</Button>
                </Link>
                {token ?
                <Link to="/login" ><Button className= {token == true ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Login </Button>
                </Link>:
                <Link to="/Profile" ><Button className= {token == true ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Profile</Button>
                </Link>}
                {token ?
                <Link to="/register" ><Button className= {token == true ? 'log': null}  variant="outline-light" style={buttonStyle}>🔒 Register</Button>
                </Link>:
                <Link to="/logout" ><Button className= {token == false ? 'log': null} variant="outline-light" style={buttonStyle}>🔒 Logout </Button>
                </Link>}
            </Nav>
        </Container>
            <Form className="p-2 ms-auto">
                <Link to="cart" ><Button variant="outline-info" style={buttonStyle}> 🛒 Total: ${total.toLocaleString()}</Button>
                </Link>
            </Form>
    </Navbar>
  )
}

export default Navegacion