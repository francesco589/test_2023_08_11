import React from 'react'
import { Link } from 'react-router-dom'

function Product({ prod }) {
    return (
        <div className='flex gap-8 flex-wrap p-8'>
            {prod.map((p, i) => (
                <div key={i + 100} className=' w-52 border border-slate-300 rounded-xl '>
                    <Link to={`/product/${p._id}`} className='flex gap-3 flex-col items-center' >
                        <img src={p.img} alt={p.name} />
                        <h1 className=' text-center font-semibold '>{p.name}</h1>
                        <p>Price {p.price} €</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Product