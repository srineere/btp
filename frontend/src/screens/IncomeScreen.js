import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
// import Message from '../components/Message'
import Income from '../components/Income'
import ReactToPrint from 'react-to-print'

import Message from '../components/Message'
// import link, { Link } from 'react-router-dom'
import {
  particularMonthYear,
  particularYear,
  alltillNow,
} from '../actions/miscellaneousActions'
import { ALL_INCOME_RESET } from '../constants/miscellaneousConstants'
const IncomeScreen = () => {
  const componentRef = useRef()

  const dispatch = useDispatch()
  const [particularmonth, setParticularmonth] = useState(false)
  const [
    particularmonthofparticularyear,
    setParticularmonthofparticularyear,
  ] = useState(false)
  const allIncome = useSelector((state) => state.allIncome)
  const { loading, allincome, error } = allIncome
  const [month, setMonth] = useState('')
  // const [error, setError] = useState('')
  const [all, setAll] = useState('')
  const [year, setYear] = useState('')
  const [particularyear, setParticularyear] = useState(false)
  // const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const Year = () => {
    setParticularmonth(false)
    setParticularmonthofparticularyear(false)
    setParticularyear(true)
    dispatch({ type: ALL_INCOME_RESET })
  }
  const singleValue = (arr) => {
    var newarray = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    
    arr.map((data) =>
      newarray.push(
        data.monthly_fees,
        data.hostel_fees,
        data.laboratory_fees,
        data.computer_fees,
        data.exam_fees,
        data.miscellaneous
      )
    )
    
    return newarray.reduce(reducer)
    // console.log('total income', totalincome)
  }
  const All = () => {
    dispatch({ type: ALL_INCOME_RESET })

    setParticularyear(false)
    setParticularmonthofparticularyear(false)
    setAll(true)
    dispatch(alltillNow())
  }
  var i = 1
  const print = () => {
    window.print()
    setShow(true)
  }
  const both = () => {
    dispatch({ type: ALL_INCOME_RESET })

    setParticularyear(false)
    setParticularmonth(false)
    setParticularmonthofparticularyear(true)
  }
  useEffect(() => {
    dispatch({ type: ALL_INCOME_RESET })
  }, [dispatch])
  const formSubmit1 = async (e) => {
    e.preventDefault()
    dispatch({ type: ALL_INCOME_RESET })

    dispatch(particularMonthYear(year, month))
  }
  const formSubmit2 = async (e) => {
    e.preventDefault()
    dispatch({ type: ALL_INCOME_RESET })

    dispatch(particularYear(year))
  }
  return (
    <div className='container1'>
      <style>{`@media print {    @page { size: 300mm 140.5mm;  }}`}</style>

      <h2 className='income-h1'> Income statements</h2>
      <div className='income-button'>
        <button onClick={All} className='link'>
          All till Date
        </button>
        <button onClick={Year} className='link'>
          Particular Year
        </button>

        <button onClick={both} className='link'>
          Particular Month of Particular Year
        </button>
      </div>
      {particularmonthofparticularyear && (
        <div className='search-form'>
          <form onSubmit={formSubmit1}>
            <input
              className='first-input'
              type='text'
              value={year}
              placeholder='Enter the year such as 2070'
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <select
              id='class'
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
              <option value=''>Select Month</option>

              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            {/* {console.log(typeof data)} */}
            <button className='btn-search' type='submit'>
              Search
            </button>
          </form>
        </div>
      )}

      {/* below is for particular year */}
      {particularyear && (
        <div className='search-form'>
          <form onSubmit={formSubmit2}>
            <input
              className='first-input'
              type='text'
              value={year}
              placeholder='Enter the year such as 2070'
              onChange={(e) => setYear(e.target.value)}
              required
            />

            {/* {console.log(typeof data)} */}
            <button className='btn-search' type='submit'>
              Search
            </button>
          </form>
        </div>
      )}

      {/* {console.log(error)} */}
      <div className='allincomedetails'>
        {loading ? (
          <Loader />
        ) : allincome ? (
          <div className='outerIncome'>
            <div className='innerIncome'>
              <p>SN</p>
              <p>Date</p>
              <p>Particulars</p>
            </div>
            {allincome.map((value) => (
              <div className=''>
                <Income
                  _id={value._id}
                  i={i++}
                  createdAt={value.createdAt}
                  monthly_fees={value.monthly_fees}
                  hostel_fees={value.hostel_fees}
                  laboratory_fees={value.laboratory_fees}
                  computer_fees={value.computer_fees}
                  exam_fees={value.exam_fees}
                  miscellaneous={value.miscellaneous}
                  student_name={value.student_name}
                  ref={componentRef}
                />
              </div>
            ))}
            <button onClick={print} className='printcmd'>
              Print
            </button>
            {/* <ReactToPrint
              trigger={() => (
                <button className='printcmd'>Print this out!</button>
              )}
              content={() => componentRef.current}
            /> */}
          </div>
        ) : (
          
          error && <Message variant='danger' message={error} />
        )}
        {allincome && (
          <p style={{ background: 'pink', margin: '20px 0', padding: '10px' }}>
            Total Income made in this period = Rs {singleValue(allincome)}{' '}
          </p>
        )}
      </div>
    </div>
  )
}

export default IncomeScreen
