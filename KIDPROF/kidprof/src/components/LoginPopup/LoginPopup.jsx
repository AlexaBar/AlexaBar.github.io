import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../toyAssets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
            
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>Continuând, sunt de acord cu termenii de utilizare și politica de confidențialitate.</p>
        </div>
        {currState==="Login"
        ?<p>Creați un cont nou? <span onClick={()=>setCurrState("Sign Up")}>Click aici</span></p>
        :<p>Aveți deja un cont? <span onClick={()=>setCurrState("Login")}>Login aici</span></p>}
        
       
      </form>
    </div>
  );
}

export default LoginPopup;
