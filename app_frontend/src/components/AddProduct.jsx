import React, { useState } from 'react'
import axios from 'axios'

function AddProduct({ setProd }) {

  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: '',
    img: ''
  })

  const [fill, setFill] = useState({ form: true, send: false })
  const addHandler = async (e) => {

    if (input.name && input.description && input.price && input.categoryId && input.img) {
      setFill((prev) => ({ ...prev, form: true }))
      const obj = await axios.post('http://localhost:3001/api/products', input)
      const obj1 = await axios.get('http://localhost:3001/api/products')
      setProd(obj1.data)
      setInput({
        name: '',
        description: '',
        price: '',
        categoryId: '',
        img: ''
      })
      setFill((prev) => ({ ...prev, send: true }))
      setTimeout(() => setFill((prev) => ({ ...prev, send: false })), 4000)
    }
    else {
      setFill((prev) => ({ ...prev, form: false }))
    }

  }
  const changeHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  return (
    <div className='flex flex-col items-center gap-9 pt-20 '>
      <div className='flex flex-col gap-3'>
        <label htmlFor="name">Name:
          <input value={input.name} name='name' onChange={changeHandler} className='border border-slate-300 rounded-md' id='name' type="text" />
        </label>
        <label className='flex' htmlFor="description">Description:
          <textarea value={input.description} name='description' onChange={changeHandler} className='border border-slate-300 rounded-md' id='description' type="text" />
        </label>
        <label htmlFor="price">Price: <input value={input.price} name='price' onChange={changeHandler} className='border border-slate-300 rounded-md' id='price' type="number" /></label>
        <label htmlFor="category">Category: <input value={input.categoryId} name='categoryId' onChange={changeHandler} className='border border-slate-300 rounded-md' id='category' type="number" /></label>
        <label htmlFor="urlImg">ImageUrl: <input value={input.img} name='img' onChange={changeHandler} className='border border-slate-300 rounded-md' id='urlImg' type="text" /></label>



      </div>
      <button onClick={addHandler} className='bg-slate-300 p-3 rounded-lg'>Add Product</button>
      <div>
        <p className=' font-bold text-red-600'>{!fill.form ? 'Fill all fields' : ''}</p>
        <p className=' font-bold text-green-500'>{fill.send ? 'Added!' : ''}</p>
      </div>
    </div>
  )
}

export default AddProduct