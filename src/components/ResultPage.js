import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const result = location.state?.result

  // If result is missing or empty
  if(!result || result.length === 0){
    return(
      <div>
        <h2>No data found. Please go back and search again.</h2>
        <button onClick={()=>navigate("/")}>Go Back</button>
      </div>
    )
  }


  const student= result[0] // Get the student object
  return (
    <div>
      {/* {result ? (<pre>{JSON.stringify(result, null, 2)}</pre>):(<p>No result data found.</p>)} */}
      <table border="1" cellPadding="10" style={{borderCollapse:"collapse"}}>
        <tbody>
          <tr>
            <td><strong>Registration no :</strong></td>
            <td>{student.rno}</td>
            {/* Image in right column spanning 5 rows */}
            <td rowSpan="5">
              {student.photoURL && (<img
              src={student.photoURL} alt='Student-Image'
              style={{ width: "180px", height: "180px", borderRadius: "10px", marginBottom: "0px", objectFit: "cover", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}/>)}
            </td>
          </tr>
          <tr>
            <td><strong>Student name :</strong></td>
            <td>{student.name}</td>
          </tr>
          <tr>
            <td><strong>Total Marks :</strong></td>
            <td>{student.TotalMarks}</td>
          </tr>
          <tr>
            <td><strong>Final Result :</strong></td>
            <td>{student.Result}</td>
          </tr>
          <tr>
            <td><strong>School :</strong></td>
            <td>{student.school}</td>
          </tr>
          <tr>
            <td colSpan="3">
              <h3>Subject-Wise Marks</h3>
              <table border="1" cellPadding="5" style={{width:"100%"}}>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Internal</th>
                    <th>Total</th>
                    <th>Pass/Fail</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(student.marks).map(([subject,mark])=>(
                    <tr key={subject}>
                      <td>{subject}</td>
                      <td>{mark.Theory ?? '-'}</td>
                      <td>{mark.Practical ?? '-'}</td>
                      <td>{mark.Internal ?? '-'}</td>
                      <td>{mark.Total ?? '-'}</td>
                      <td>{mark.Result ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <br/>
      <button onClick={()=>navigate('/')}>Search Again</button>
      <p>Image Credit: <a href='https://www.freepik.com/' target='_blank'>freepik</a></p>
    </div>
  )
}

export default ResultPage
