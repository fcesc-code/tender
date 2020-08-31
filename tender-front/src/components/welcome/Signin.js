import React from 'react';
import './signin.sass';

function Signin() {
  return (
    <div className="signIn">
      <form className='signInForm' action='' method='POST'>
        <div class='form-group'>
          <label for='username'>User name</label>
          <input id='username' type='text' name='username' value='' class='form-control' placeholder='email' required></input>
        </div>
        <div class='form-group'>
          <label for='password'>Password</label>
          <input id='password' type='password' name='password' value='' minlenght='8' maxlength='32' class='form-control' placeholder='password' required></input>
        </div>
        <button type='submit' className='btn btn-default'>Sign in</button>
      </form>
    </div>
  );
}

export default Signin;