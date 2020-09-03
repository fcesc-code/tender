import React from 'react';
import './signin.sass';

function Signin() {
  return (
    <div className="signIn">
      <form className='signInForm' action='' method='POST'>
        <div className='form-group'>
          <label htmlFor='username'>
            User name
            <input id='username' type='text' name='username' value='' className='form-control' placeholder='email' required onChange={()=>{}}></input>
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>
            Password
            <input id='password' type='password' name='password' value='' minlenght='8' maxLength='32' className='form-control' placeholder='password' required onChange={()=>{}}></input>
          </label>
        </div>
        <button type='submit' className='btn btn-default btn-centered'>Sign in</button>
        <button type='submit' className='btn btn-default btn-centered'>Register</button>
      </form>
    </div>
  );
}

export default Signin;