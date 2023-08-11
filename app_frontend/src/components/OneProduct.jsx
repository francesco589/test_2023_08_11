import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function OneProduct({prod}) {

const param = useParams()
    

  
  return (
    <div className='flex  flex-wrap p-8 justify-center'>
        {prod.filter(el=> el._id == param.id).map((p, i) => 
                ( <div key={i + 100} className=' flex gap-5 flex-col border border-slate-300 rounded-xl items-center '>
                        <div className='w-96 pt-7 rounded-xl'>
                            <img src={p.img} alt={p.name} />
                        </div>
                        <h1 className=' text-center font-semibold '>{p.name}</h1>
                        <p className=''>Price: {p.price} €</p> 
                        <p>Categoria: </p>
                        <p className='p-7'>{p.description}</p>

                </div>
                ))}
    </div>
  )
}

export default OneProduct