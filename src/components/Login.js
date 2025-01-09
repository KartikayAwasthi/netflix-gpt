import React from 'react';
import Header from './Header';
import { useState } from 'react';

 const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true);
        const toggleSignInFrom=()=>
               {
                   setIsSignInForm(!isSignInForm);
               }
  return (
    <div>
       <Header/>
       <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
           alt="logo" className="w-full h-full object-cover" /> 
       </div>
       <form className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-4xl py-4'>{isSignInForm? "Sign-In" : "Sign-Up"}</h1>

       {!isSignInForm &&( <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>)}

        <input type="text" placeholder="Email Address or mobile number" className='p-4 my-4 w-full bg-gray-700'/>
        
        <input type="Password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg '>{isSignInForm? "Sign-In" : "Sign-Up"}</button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInFrom}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
       </form>
    </div>
  )
}

export default Login;