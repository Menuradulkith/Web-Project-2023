
import React from 'react'
import './Loginform.css';
import { FaUser ,FaLock} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Loginform({ onLogin }) {
    const navigate = useNavigate();
    const handleLogin = () => {
        
        onLogin();
    
       
        navigate('/dashboard');
      };
    
    
  return (
    <div className='wrapper'>
        <form action="">    
            <h1>Login </h1>
            <div className="input-box">
                <input type="text"
                placeholder='username'required/>
                <FaUser className='icon' />
            </div>         
             <div className="input-box">
                <input type="password"
                placeholder='password'required/>
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button onClick={handleLogin}>Login</button>
            <div className="register-link">
                <p>Don't have an account?<Link to="/signup"><a href="#">Register</a></Link></p>
            </div>

        </form>

    </div>
  )
}
