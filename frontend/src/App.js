import React, { useState } from 'react'
import Landing from './screens/Landing'
// import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import LoginStudent from './screens/LoginAsStudent'
import LoginTeacher from './screens/LoginAsTeacher'
import StudentRegister from './screens/StudentRegister'
import StudentFees from './screens/StudentFees'
import StudentDetails from './screens/StudentDetails'
import StudentDeepDetails from './screens/StudentDeepDetails'
import StudentAttendance from './screens/StudentAttendance'
import AllStudents from './screens/AllStudents'
import StudentDeepAttendance from './screens/StudentDeepAttendance'
import StudentAdmitCard from './screens/StudentAdmitCard'
import AllStudentsAdmitCard from './screens/AllStudentsAdmitCard'
import StudentClassAdmitCard from './screens/StudentClassAdmitCard'
import StudentClassAdmitCardDeep from './screens/StudentClassAdmitCardDeep'
import ParticularStudentAdmitCard from './screens/ParticularStudentAdmitCard'
import TeacherSalary from './screens/TeacherSalary'
import StaffSalary from './screens/StaffSalary'
import TeacherRegister from './screens/TeacherRegister'
import AllTeachers from './screens/AllTeachers'
import AllStaffs from './screens/AllStaffs'
import StaffRegister from './screens/StaffRegister'
import IncomeScreen from './screens/IncomeScreen'
import NotFound from './screens/NotFound'
import Landing_Student from './screens/Landing_Student'
import StudentDetailsDeep from './screens/StudentDetailsDeep'
import StudentAcademicFees from './screens/StudentFeesPayment'
import Paid from './screens/Paid'
import PaidSalary from './screens/PaidSalary'
import ExpenseScreen from './screens/ExpenseScreen'
import underConstruction from './components/underConstruction'
import { studentAttendances } from './actions/studentActions'
import PrivateRoute from '../src/utils/PrivateRoute'
import LandingTeacher from './screens/Landing_Teacher'
import StudentEdit from './screens/StudentEdit'
import TeacherEdit from './screens/TeacherEdit'
// import ExpenseScreen from './screens/ExpenseScreen'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path='/' component={Landing} exact />
          
          <Route path='/login' component={Login} exact />
          
          <Route path='/loginAsStudent' component={LoginStudent} exact />
          <PrivateRoute path='/Student' component={Landing_Student} exact />
          <PrivateRoute path='/Student/details' component={StudentDetailsDeep} exact/>
          <PrivateRoute path='/Student/fees' component={StudentAcademicFees} exact/>
          <PrivateRoute path='/Student/edit' component={StudentEdit} exact/>
          <PrivateRoute path='/paid'component={Paid}/>

          <Route path='/loginAsTeacher' component={LoginTeacher} exact />
          <PrivateRoute path='/Teacher' component={LandingTeacher} exact/>
          <PrivateRoute path='/Teacher/details' component={StudentDetailsDeep} exact/>
          <PrivateRoute path='/Teacher/fees' component={TeacherSalary} exact/>
          <PrivateRoute path='/Teacher/edit' component={TeacherEdit} exact/>
          <PrivateRoute path='/paid'component={PaidSalary}/>
          
          <PrivateRoute path='/student-register' component={StudentRegister} />
          <PrivateRoute path='/student-fee' component={StudentFees} />
          <PrivateRoute
            path='/student_details'
            component={StudentDetails}
            exact
          />
          <PrivateRoute
            path='/student_details/details/:id'
            component={StudentDeepDetails}
            exact
          />
          <PrivateRoute
            path='/teacher_attendance'
            component={underConstruction}
            exact
          />
          <PrivateRoute
            path='/non-teaching_staff_attendance'
            component={underConstruction}
            exact
          />
          <PrivateRoute
            path='/student-attendance/:class'
            component={StudentDeepAttendance}
            exact
          />
          <PrivateRoute path='/students' component={AllStudents} exact />
          <PrivateRoute path='/admit_card' component={StudentAdmitCard} exact />
          <PrivateRoute
            path='/admit_card/allstudents'
            component={AllStudentsAdmitCard}
            exact
          />
          <PrivateRoute
            path='/admit_card/classes'
            component={StudentClassAdmitCard}
            exact
          />
          <PrivateRoute
            path='/admit_card/classes/:id'
            component={StudentClassAdmitCardDeep}
            exact
          />
          <PrivateRoute
            path='/admit_card/student'
            component={ParticularStudentAdmitCard}
            exact
          />
          <PrivateRoute
            path='/teacher_salary'
            component={TeacherSalary}
            exact
          />
          <PrivateRoute
            path='/teacher_register'
            component={TeacherRegister}
            exact
          />
          <PrivateRoute path='/teacher_details' component={AllTeachers} exact />
          <PrivateRoute
            path='/non-teaching_staff_details'
            component={AllStaffs}
            exact
          />
          <PrivateRoute
            path='/non-teaching_staff_register'
            component={StaffRegister}
            exact
          />
          <PrivateRoute
            path='/non-teaching_staff_salary'
            component={StaffSalary}
            exact
          />
          <PrivateRoute path='/income' component={IncomeScreen} exact />
          <PrivateRoute path='/salary' component={ExpenseScreen} exact />
          <PrivateRoute
            path='/student-attendance'
            component={StudentAttendance}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
