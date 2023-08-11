import React from 'react'
import Product from './Product'

function Home({prod}) {
  return (
    <div>
        <Product prod={prod}/>
    </div>
  )
}

export default Home