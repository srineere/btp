import {
    TEACHER_LOGIN_FAIL,
    TEACHER_LOGIN_REQUEST,
    TEACHER_LOGIN_SUCCESS,
    TEACHER_LOGOUT,
  } from '../constants/teacherLoginConstants'
  
  export const teacherLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case TEACHER_LOGIN_REQUEST:
        return { loading: true }
      case TEACHER_LOGIN_SUCCESS:
        //FOLLOWING TEACHERINFO CONTAINS THE LOGGED IN TEACHER'S CREDENTIALS
        return { loading: false, userCred: action.payload }
      case TEACHER_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      case TEACHER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  
  //THIS IS FOR LOGGING OUT
  