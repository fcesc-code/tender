import React from 'react';
import './signup.sass';

function Signup() {
  return (
    <div className="signUp">
      <h3>Sign up page:</h3>
      <form className='signUpForm' action='' method='POST'>
        <div class='form-group'>
          <label for='username'>User name</label>
          <input id='username' type='text' name='username' value='' class='form-control' placeholder='email' required></input>
        </div>
        <div class='form-group'>
          <label for='password'>Password</label>
          <input id='password' type='password' name='password' value='' minlenght='8' maxlength='32' class='form-control' placeholder='password' required></input>
        </div>
        <div class='form-group'>
          <label for='passwordConfirm'>Confirm password</label>
          <input id='passwordConfirm' type='password' name='passwordConfirm' value='' minlenght='8' maxlength='32' class='form-control' placeholder='password confirmation' required></input>
        </div>
        <div class='form-group'>
          <label for='email'>Email</label>
          <input id='email' type='email' name='email' value='' class='form-control' placeholder='email' required></input>
        </div>
        <div class='form-group'>
          <label for='organization'>Organization</label>
          <input id='organization' type='text' name='organization' value='' class='form-control' placeholder='organization' required></input>
        </div>
        <div class='form-group'>
          <label for='role'>Role in the organization</label>
          <input id='role' type='text' name='role' value='' class='form-control' placeholder='role' required></input>
        </div>
        <button type='submit' className='btn btn-default'>Sign in</button>
      </form>   
    </div>
  );
}

export default Signup;