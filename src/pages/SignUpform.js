import React, { useState } from 'react';
import './SignUpform.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function SignUpform()  {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    
    setPasswordMatch(password === e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSignupClicked(true);

  
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='input-box1'>
          <input type='text' placeholder='First Name' required />
          <input type='text' placeholder='Last Name' required />
        </div>
        <div className='input-box2'>
          <input type='email' placeholder='Email' required />
          <MdEmail className='icon' />
        </div>
        <div className={`input-box2 ${!passwordMatch && isSignupClicked ? 'password-mismatch' : ''}`}>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <FaLock className='icon' />
        </div>
        <div className={`input-box2 ${!passwordMatch && isSignupClicked ? 'password-mismatch' : ''}`}>
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <FaLock className='icon' />
          {!passwordMatch && isSignupClicked && (
            <p className='error-message'>Passwords do not match.</p>
          )}
        </div>
        <div className='terms-checkbox'>
          <label>
            <input type='checkbox' required />
            I accept the Terms of Use & Privacy Policy
          </label>
        </div>
        <button onClick={() => navigate("/login")}>Sign Up</button>
      </form>
    </div>
  );
};



