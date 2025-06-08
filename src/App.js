import React from 'react'

const App = () => {
  return (
    <>
        <title>XXXXX Board Results</title>
        <div>
            <h3>Government of XXXXX</h3>
            <h3>Directorate of Government Examinations</h3>
        </div>
        <div>
            <h3>Examination Results - March 202X</h3>
        </div>
        <div>
            <div>
                <label for='rno'>Registration No: </label>
                <input type='text' name='rno'></input><br></br><br></br>
                <label for='dob'>Date of Birth (dd/mm/yyyy): </label>
                <input type='text' name='dob'></input><br></br><br></br>
                <button>Get Results</button> <button>Clear</button>
            </div>
        </div>
        <div>
            <p>This is the test site designed by <a href='https://github.com/mu-kumaran'>Manoj Kumar Dharmalingam</a> for project purpose and hosted using <a href='https://github.com/'>Github</a>, <a href='https://www.render.com/'>Render</a> and <a href='https://www.mongodb.com/products/platform/atlas-database'>MongoDB Atlas</a> platforms.</p>
            <p>Note: Use Registration No between 01108000501-510 and DOB as 01/01/2001 for testing purpose.</p>
        </div>
    </>
  )
}

export default App
