import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { deleteStudent } from '../actions/studentActions'
import { classlistStudent } from '../actions/studentActions'
const StudentDetails = ({ match }) => {
  const matchid = match.params.id

  const dispatch = useDispatch()
  const studentClassList = useSelector((state) => state.studentClassList)
  const { loading, students, error } = studentClassList
  const studentDelete = useSelector((state) => state.studentDelete)
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = studentDelete
  let id = JSON.parse(localStorage.getItem('userCred'))._id
  console.log(id)
  id = "UG2"
  useEffect(() => {
    dispatch(classlistStudent(id))
  }, [dispatch, matchid, successDelete])

  var i = 1
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteStudent(id))
    }
  }
  const searchSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
  }
  console.log(students)
  let data = students
  console.log("list")
  for (let i=0; i<students.length; i++){
    console.log("list",students[i])
    if(students[i]._id === id){
      data = students[i]
    }
  }
  console.log("dasta",data)
  return (
    <div className='container3'>
      <div className='outer'>
        {/* <input type='text' placehold  er='Search for student...' />
        <span className='search-icon' onClick={searchSubmit}>
          <i className='fas fa-search'></i>
        </span> */}
        <div className='table-layout'>
          {loading ? ( <Loader />) 
          : error ? 
          ( <Message variant='danger' message={error} /> ) 
          : (
            <p>
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Photo</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Roll No</th>
                  <th>Address</th>
                  <th>Parent's Name</th>
                  <th>Contact No</th>
                  <th>Previous Dues</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {students.map((data) => (
                  <tr key={data._id} className='contents'>
                    <td>{i++}</td>
                    <td>
                      <img style={{ height: '50px' }} src={data.image} alt='' />
                    </td>
                    <td>{data.student_name}</td>
                    <td>{data.classname}</td>
                    <td>{data.roll_no}</td>
                    <td>{data.address}</td>
                    <td>{data.parents_name}</td>
                    <td>{data.contact_no}</td>
                    <td>{data.previous_dues}</td>
                    <td>{data.gender}</td>
                    
                  </tr>

                  
                  
                  // }
                ))}
              </tbody>
            </p>
          )}
        </div>

              </div>
    </div>
  )
}

export default StudentDetails
