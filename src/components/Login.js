import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from '../utilis/validate'
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isErrorMessage , SetIsErrorMessage] = useState(null)


  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{

   const errorMessage = checkValidData(  email.current.value, password.current.value )
    SetIsErrorMessage(errorMessage)
  }

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        />
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className="md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
        <h1 className="text-5xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
     
            className="px-8 py-2 my-2 bg-slate-800 w-full rounded-md"
            placeholder="Full Name"
          />
        )}
        <input
        ref={email}
          className="px-8 py-2 my-2 bg-slate-800 w-full rounded-md"
          placeholder="Email or Phone Number"
        />
        <input
        ref={password}
          className="px-8 py-2 my-2 bg-slate-800 w-full rounded-md"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold">
            {isErrorMessage}
        </p>
        <button className="px-8 py-2 my-8 bg-red-800 w-full rounded-md" onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={handleSignInToggle}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
