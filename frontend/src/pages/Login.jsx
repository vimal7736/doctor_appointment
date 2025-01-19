import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign-Up')
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  


  const submitHandler = async (e) => {
    e.preventDefault();
    window.location.href = '/';
  }
  return (
    <div className='flex w-full  justify-center'>
      <form
        onSubmit={submitHandler}
        className='flex flex-col text-center   w-full md:w-full lg:w-1/2'>
        <div className='shadow-xl shadow-black rounded-md'>
          <div className='text-2xl mt-7 font-semibold  text-indigo-900'>
            {state === 'Sign-Up' ? 'Register' : 'Login'}
          </div>
          <div className='flex flex-col p-5'>
            <input className='p-4' type="text" name="name" id="name" placeholder='Name' />
            <input className='p-4' type="email" name="email" id="email" placeholder='Email' />
            <input className='p-4' type="password" name="password" id="password" placeholder='Password' />
            {state === 'Sign-Up' && (
              <input className='p-4' type="password" name="password" id="password" placeholder='Confirm password' />
            )}
            <button className='mt-10 p-4 font-semibold bg-black text-white rounded-sm' >
              {state == 'Sign-Up' ? ('Register') : ('Login')}
            </button>
            <p className="mt-4 cursor-pointer font-semibold text-primary " onClick={() => setState(state === 'Sign-Up' ? 'Login' : 'Sign-Up')}>
              {state === 'Sign-Up' ? 'Already registered? Log in here!' : 'New here? Create an account!'}
            </p>



          </div>

        </div>


      </form>

    </div>
  )
}

export default Login
