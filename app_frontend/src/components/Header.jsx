import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


  return (
    <header className=' border-b border-slate-300 w-full flex justify-between items-center' >
        
        <Link to='/'><h1 className=' p-5 text-4xl font-bold  ' >DigitaShop</h1></Link>

        <nav className='p-5 flex gap-4'>
            <Link to='/'>Home</Link>
            <Link to='admin'>Admin</Link>
        </nav>
        
        
        </header>
  )
}

export default Header