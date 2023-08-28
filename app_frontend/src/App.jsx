import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import OneProduct from './components/OneProduct'
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'
import axios from 'axios'
import UpdateProduct from './components/UpdateProduct'
import Footer from './components/Footer'
function App() {
const [prod, setProd] = useState([])


useEffect(()=>{
const getProd = async ()=>{
const obj = await axios.get('http://localhost:3001/api/products')
setProd(obj.data)
}
getProd()
},[])


  return (
    <>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home prod={prod} />}/>
      <Route path='/product/:id' element={<OneProduct prod={prod} />} />
      <Route path='/admin' element={<Admin prod={prod} setProd={setProd} />}/>
      <Route path='/admin/add' element={<AddProduct setProd={setProd} />}/>
      <Route path='/admin/edit/:id' element={<UpdateProduct prod={prod} setProd={setProd} />}/>
    </Routes>
    <Footer />
  </Router>
    </>
  )
}

export default App
