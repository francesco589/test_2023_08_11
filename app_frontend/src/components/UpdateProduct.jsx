import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function UpdateProduct({prod, setProd}) {

const param = useParams()

const current = prod.filter(el => el._id == param.id)
const [input, setInput] = useState( { name: current[0].name,
description: current[0].description,
price: current[0].price,
categoryId: current[0].categoryId,
img: current[0].img})

const [fill, setFill] = useState({ form: true, send: false })
  const addHandler = async (e) => {

    if (input.name && input.description && input.price && input.categoryId && input.img) {
      setFill((prev) => ({ ...prev, form: true }))
      const obj = await axios.patch('http://localhost:3001/api/products/' + param.id, input)
      const obj1 = await axios.get('http://localhost:3001/api/products')
      setProd(obj1.data)
    
      setFill((prev) => ({ ...prev, send: true }))
      setTimeout(()=> setFill((prev) => ({ ...prev, send: false })),window.location.replace('/'), 4000 )
    }
    else {
      setFill((prev) => ({ ...prev, form: false }))
    }

  }

  const changeHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div className='flex flex-col items-center gap-9 pt-20 '>
    <div className='flex flex-col gap-3'>
      <label htmlFor="name">Name:
        <input value={input.name} name='name' onChange={changeHandler} className='border border-slate-300 rounded-md' id='name' type="text" />
      </label>
      <label className='flex' htmlFor="description">Description:
        <textarea value={input.description} name='description' onChange={changeHandler} className='border border-slate-300 rounded-md' id='description' type="text" /></label>
      <label htmlFor="price">Price: <input value={input.price} name='price' onChange={changeHandler} className='border border-slate-300 rounded-md' id='price' type="number" /></label>
      <label htmlFor="category">Category: <input value={input.categoryId} name='categoryId' onChange={changeHandler} className='border border-slate-300 rounded-md' id='category' type="number" /></label>
      <label htmlFor="urlImg">ImageUrl: <input value={input.img} name='img' onChange={changeHandler} className='border border-slate-300 rounded-md' id='urlImg' type="text" /></label>



    </div>
    <button onClick={addHandler} className='bg-slate-300 p-3 rounded-lg'>Edit Product</button>
    <div>
      <p className=' font-bold text-red-600'>{!fill.form ? 'Fill all fields' : ''}</p>
      <p className=' font-bold text-green-500'>{fill.send ? 'Edited!' : ''}</p>
    </div>
  </div>
  )
}

export default UpdateProduct