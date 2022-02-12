import React, from 'react';
import './Login.scss';

const Login = () => {
  return(
    <div className='login-modal'>
      <form className='login-content'>
        <div className='flex-row'>
          <label for='email'>Email:</label>
          <input type='text' id='email'/>
        </div>
        <div className='flex-row'>
          <label for='password'>Password:</label>
          <input type='text' id='password'/>
        </div>
        <button className='sign-in-button'>Sign In</button>
      </form>
    </div>
  )
}

export default Login
