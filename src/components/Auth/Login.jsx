import  { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Login = ({handleLogin}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function submitHandler(e){
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20'>
        <form 
        onSubmit={(e) => {
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }} 
            required 
            className='border-2 border-emerald-600 bg-transparent outline-none rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type='email' placeholder='Enter Your Mail'/>

            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }} 
            required 
            className='border-2 border-emerald-600 bg-transparent outline-none rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Password'/>
            <button className='text-white border-2 bg-emerald-600 outline-none rounded-full text-xl py-3 px-5 placeholder:text-white mt-3 border-none'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
