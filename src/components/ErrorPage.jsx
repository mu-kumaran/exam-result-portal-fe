import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const ErrorPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const errordata = location.state?.error

    const componentRef = useRef();
    

  // If result is missing or empty
  if(!errordata || errordata.length === 0){
    return(
      <div >
        <div>
            <h3>Government of XXXXX</h3>
            <h3>Directorate of Government Examinations</h3>
        </div>
        <div>
            <h3>Examination Results - March 202X</h3>
        </div>
        <h2>No data found. Please go back and search again.</h2>
        <button onClick={()=>navigate("/")}>Go Back</button>
      </div>
    )
  }

  // For Internal server error
  return (
    <div>
        <div>
            <h2>Error: {errordata.error}</h2>
        </div>
        <button onClick={()=>navigate("/")}>Go back</button>
    </div>
  )
}

export default ErrorPage
