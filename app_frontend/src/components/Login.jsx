import React, { useState } from 'react'
import credentials from '../assets/credentials.js'
function Login() {


    const [input, setInput] = useState({user: '', password: ''})
    const [status, setStatus] = useState(false)
    const changeHandler = (e) =>{
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const clickHandler = (e) => {
        credentials.forEach(el => {
            if(el.user === input.user && el.password === input.password){
                window.location.replace('/admin')
            }
            else{
                setStatus(true)
                setTimeout(() => setStatus(false), 3000)
            }
        })
    }
    
    return (
        <div className=' p-8 flex flex-col items-center gap-3'>
            <label htmlFor="user">User:
                <input onChange={changeHandler} className='border border-slate-300 rounded-md' name='user' value={input.user} id='user' type="text" />
            </label>
            <label htmlFor="password">Password:
                <input onChange={changeHandler} className='border border-slate-300 rounded-md' name='password' value={input.password} id='password' type="password" />
            </label>
            <button onClick={clickHandler} className=' bg-slate-300 p-2 rounded-md'>Login</button>
            <div className={status ? 'bg-red-500 text-white':'hidden'}>Wrong Credentials</div>
        </div>
    )
}

export default Login