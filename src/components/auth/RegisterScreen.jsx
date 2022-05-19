import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui )
//console.log(msgError)

  const [ fromValues, handleInpputChange ] = useForm({
    name: 'Crispo',
    email: 'crispo@hotmail.es',
    password: '123456',
    confirm: '123456'
  })

  const { name, email, password, confirm } = fromValues;

  const handleRegister = (e) => {
    e.preventDefault()
   if ( isValidForm() ) {
     dispatch( startRegisterWithEmailPasswordName(email, password, name) )
     
   }

  }

  const isValidForm = () => {

    if (name.trim().length === 0) {
      dispatch(setError('Name required'))
      return false    

    } else if (!validator.isEmail(email)) {

      dispatch(setError('Email is not valid'))
      return false      
    } else if (password !== confirm || password < 5) {

      dispatch(setError('password is not valid'))
      return false
    }
    dispatch(removeError())
    return true
  }




  return (
    <>
    <div className="animate__animated animate__fadeIn animate__faster">
    <h3 className="auth__title">Register</h3>

    <form onSubmit={handleRegister}>

      {(
        msgError &&
        <div className='auth__alert-error'>
          { msgError }
        </div>  
      )

      }

    <input
        className="auth__input"
        autoComplete="off"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleInpputChange}
      />
      <input
        className="auth__input"
        autoComplete="off"
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleInpputChange}
      />
      <input
        className="auth__input"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleInpputChange}
      />
       <input
        className="auth__input"
        type="password"
        placeholder="Confirm password"
        name="confirm"
        value={confirm}
        onChange={handleInpputChange}
      />
      <button className="btn-logout btn-primary btn-block mb-5" type="submit">
        Register
      </button>

     

   
        <Link 
        className="link"
        to="/auth/login">Already registered?</Link>
    
    </form>
    </div>

  </>
  )
}
