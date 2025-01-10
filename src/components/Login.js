import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";




 const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const navigate = useNavigate();


        const handleButtonClick=()=>
            {
                //validate the form data
                
             
              const message= checkValidData(email.current.value , password.current.value );
              setErrorMessage(message);

              if(message) return;

              //Sign-In && Sign-Up
              if(!isSignInForm)
              {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                 // Signed up 
                 const user = userCredential.user;
                 updateProfile(user, {
                  displayName: name.current.value,
                  photoURL: "https://avatars.githubusercontent.com/u/181433056?v=4",
                })
                  .then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                      })
                    );
                    
                  })
                  .catch((error) => {
                    setErrorMessage(error.message);
                  });
                   console.log(user);
                   
                    })
                .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 setErrorMessage(errorCode + "-" + errorMessage);
                   // ..
            });
                 


              }
              else
              {
                //Sign-In logic
               
                 signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
                  .then((userCredential) => {
                  // Signed in 
                    const user = userCredential.user;
                    // ...
                   
                   
                     })
                    .catch((error) => {
                      const errorCode = error.code;
                       const errorMessage = error.message;
                       setErrorMessage(errorCode+"-"+errorMessage);
  });

              }
           

             
            }
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
       <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-4xl py-4'>
          {isSignInForm? "Sign-In" : "Sign-Up"}
        </h1>

       {!isSignInForm &&( 
        <input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700'/>
        )}

        <input  ref={email} type="text" placeholder="Email Address or mobile number" className='p-4 my-4 w-full bg-gray-700'/>
        
        <input  ref={password} type="Password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>
          {isSignInForm? "Sign-In" : "Sign-Up"}
        </button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInFrom}>
          {isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
        </p>
       </form>
    </div>
  )
}

export default Login;