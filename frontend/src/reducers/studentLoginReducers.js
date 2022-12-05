import {
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGOUT,
  } from '../constants/studentLoginConstants'
  
  export const studentLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_LOGIN_REQUEST:
        return { loading: true }
      case STUDENT_LOGIN_SUCCESS:
        //FOLLOWING STUDENTINFO CONTAINS THE LOGGED IN STUDENT'S CREDENTIALS
        return { loading: false, userCred: action.payload }
      case STUDENT_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      case STUDENT_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  
  //THIS IS FOR LOGGING OUT
  