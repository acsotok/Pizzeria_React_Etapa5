
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navegacion from './components/Navegacion'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PizzaPage from './pages/PizzaPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'


function App() {

  return (
    <>
      <Navegacion />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/pizza/p001' element={<PizzaPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/404' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
