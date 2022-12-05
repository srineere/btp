import {
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGOUT,
  } from '../constants/studentLoginConstants'
  import axios from 'axios'
  export const login = (email, password) => async (dispatch) => {
    // console.log("Hi, actiom:",email)
    try {
      dispatch({
        type: STUDENT_LOGIN_REQUEST,
      })
      //we need to send headers information so we declaring it inside the config
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post('/api/students/login', { email, password }, config)
      dispatch({
        type: STUDENT_LOGIN_SUCCESS,
        payload: data,
      })
      // console.log('actions',data)
      //we are getting  the json data from our backend request so we need to convert it into the
      //string before we save them in our local storage of our  browser
      localStorage.setItem('userCred', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: STUDENT_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  // this is for logging out of user
  export const logout = () => (dispatch) => {
    localStorage.removeItem('userCred')
    dispatch({
      type: STUDENT_LOGOUT,
    })
  }
  