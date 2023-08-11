import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import OneProduct from './components/OneProduct'
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'
import axios from 'axios'
function App() {
const [prod, setProd] = useState([])


useEffect(()=>{
const getProd = async ()=>{
const obj = await axios.get('http://localhost:3001/api/products')
setProd(obj.data)
}
getProd()
},[])
console.log(prod);

  return (
    <>
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home prod={prod} />}/>
      <Route path='/product/:id' element={<OneProduct prod={prod} />} />
      <Route path='/admin' element={<Admin prod={prod} setProd={setProd} />}/>
      <Route path='/admin/add' element={<AddProduct setProd={setProd} />}/>
    </Routes>
  </Router>
    </>
  )
}

export default App
