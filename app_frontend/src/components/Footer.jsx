import React from 'react'

function Footer() {
    const clickHandler = (e)=>{
      if( confirm("Warning!!! You'll be redirect!") == true){
        window.location.replace('https://www.linkedin.com/in/francesco-accardo-090bab125/')
      }
      else{
        window.location.replace('/')
      }
    }

  return (
    <footer className=' bg-black text-white border-t border-slate-300 w-full flex justify-between items-center' >
        
        <div className=' p-10 '>Designed by <p className=' font-bold'>Francesco Accardo</p></div>
        <nav className='p-10'>
            <button onClick={clickHandler}>Linkedin</button>
        </nav>
    </footer>
  )
}

export default Footer