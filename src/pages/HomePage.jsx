import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
//import { pizzas } from '../data/pizzas';


const HomePage = () => {

    const [pizzaApi, setPizzaApi] = useState([])

    const consultarPizza = async () => {
        try {
        const response = await fetch("http://localhost:5000/api/pizzas")
        const data = await response.json()
        //console.log(data)
        setPizzaApi(data)
        } catch (error){
            console.error(error)
        }
    }
    
    useEffect(() => {
        consultarPizza()
    }, [])

    return(
        <>
        <Header />
        <Container>
            <Row className='mt-4'>   
                {pizzaApi.map(pizza => <CardPizza pizza = {pizza} key={pizza}/>)}
            </Row>
        </Container>
        </>
    )
}


export default HomePage

