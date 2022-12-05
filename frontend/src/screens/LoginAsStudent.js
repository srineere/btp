import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { login } from '../actions/studentLoginActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import './Login.css'
const LoginAsStudent = ({ history, location }) => {
  console.log('value of history', history)
  console.log('value of location', location)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toggle, setToggle] = useState(false)
  const redirect = location.search ? location.search.split('=')[1] : '/Student'
  console.log('value of redirect is', redirect)
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userCred } = userLogin
  const toggleVisibility = () => {
    // console.log('clicked')
    setToggle(!toggle)
    // if (password.type === 'password') {
    //   password.type = 'text'
    // } else {
    //   password.type = 'password'
    // }
  }
  const hideShow = () => {}

  useEffect(() => {
    console.log('reditrectign')
    if (userCred) {
      console.log(userCred)
      // console.log('there is userCred')
      // console.log(userCred)
    }
  }, [history, userCred, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    history.push('/Student')
    // return <Redirect to='/Student' />
    // console.log('form submitted')
  }
  return (
    <div className='container'>
      <div className='layout'>
        <h1>Sign In As Student</h1>
        {error && <Message variant='danger ' message={error} />}
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <input
              className='form-field'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
            <div className='password-eye'>
              <input
                className='form-field '
                type={toggle ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
              />
              {toggle ? (
                <i
                  id='eye'
                  className='fas fa-eye'
                  onClick={toggleVisibility}
                ></i>
              ) : (
                <i
                  className='fas fa-eye-slash'
                  id='eye'
                  onClick={toggleVisibility}
                ></i>
              )}
            </div>
            <div className='remember-me'>
              <input type='checkbox' id='check' />
              <label htmlFor='check'>Remember me</label>
            </div>
            <button className='btn' type='submit'>
              Login
            </button>
            <div className='remember-me'> Login as <a style={{color:'white'}} href='/login'>Admin</a>?</div>
            <div className='remember-me'> Login as <a style={{color:'white'}} href='/loginAsTeacher'>Teacher</a>?</div>
          </form>
        )}

        {/* {} */}
      </div>
    </div>
  )
}

export default LoginAsStudent