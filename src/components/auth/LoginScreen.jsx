import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

  const dispatch = useDispatch();
  
  const { loading } = useSelector( state => state );
  const [ formValues, handleInputChange ] = useForm({

    email: 'crispo@gmail.com',
    password: '123456'

  })

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword (email, password))   
  }

  const handleGoogleLogin = () => {

    dispatch ( startGoogleLogin() )
  }

  const handleFacebookLogin = () => {
   
    dispatch( startFacebookLogin() )
  }


  return (
    <>
<div className="animate__animated animate__fadeIn animate__faster">
     <h3 className="auth__title">Login</h3>
      <form        
        onSubmit={handleLogin}>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button 
        className="btn-logout btn-primary btn-block" 
        type="submit"
        disabled={ loading }
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>
          </div>
            <span className="mt-1 mb-1">Or</span>
          <div 
            className="facebook-btn"
            onClick={handleFacebookLogin}
          >
            <div className="facebook-icon-wrapper">
              <img
                className="facebook-icon"
                src="https://img.icons8.com/fluency/48/000000/facebook.png"
                alt="facebook button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with Facebook</b>
            </p>
          </div>
        </div>

     
          <Link 
          className="link"
          to="/auth/register">Create new account</Link>
      
      </form>
</div>
    
   
     
    </>
  );
};
