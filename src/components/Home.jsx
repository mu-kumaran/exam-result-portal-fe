import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [rno,setRno] = useState("8000501")
    const [dob,setDob] = useState("01/01/2001")
    const navigate = useNavigate()

    const dis=(e)=>{
        if (e.target.name === "rno")
            setRno(e.target.value)
        if (e.target.name === "dob")
            setDob(e.target.value)
    }

    const handleReset = () =>{
        setRno("8000501")
        setDob('01/01/2001')
    }

    function findfun(){

        // Form validation
        // User Input Validation
        const regNoPattern = /^[0-9]{7}$/;            // 7-digit number
        const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/; // dd/mm/yyyy

        // Validate Reg no
        if(!regNoPattern.test(rno)){
            alert("Invalid registration number. Enter valid one.")
            handleReset()
            return
        }

        // Validate dob
        if(!dobPattern.test(dob)){
            alert("Enter a valid dob with right format dd/mm/yyyy")
            handleReset()
            return
        }

        // Alert for test site
        if(dob !== '01/01/2001'){
            alert("Since this is the test site, kindly use 01/01/2001 as dob for testing purpose")
            handleReset()
            return
        }

        var inputdata = {
        rno:parseInt(rno),
        dob:dob
        }
        console.log(inputdata)
        
        axios.get("http://127.0.0.1:8888/api/find",{params:inputdata}).then((res)=>{
            console.log(res)
            console.log(res.data)

            // navigation to result page with data
            navigate('/result',{state:{result:res.data}})
            
        }).catch((err)=>{
            var errordata = err.response.data
            console.log("Error data: ",err.response.data)
            console.log(errordata.length)
            // alert('Something went wrong. Please try again.');
            // navigation to Error page with data
            navigate('/error',{state:{error:err.response.data}})
        })
        
    }
  return (
    <div>
        <div>
            <h3>Government of XXXXX</h3>
            <h3>Directorate of Government Examinations</h3>
        </div>
        <div>
            <h3>Examination Results - March 202X</h3>
        </div>
      <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='rno'>Registration No: </label>
                <input type='text' name='rno' placeholder='Enter your registration no' value={rno} onChange={(e)=>dis(e)}></input><br></br><br></br>
                <label htmlFor='dob'>Date of Birth (dd/mm/yyyy): </label>
                <input type='text' name='dob' placeholder='Enter your dob' value={dob} onChange={(e)=>dis(e)}></input><br></br><br></br>
                <button onClick={findfun}>Get Results</button> <button onClick={handleReset}>Clear</button>
            </form>
        </div>
        <div>
            <p>This is the test site designed by <a href='https://github.com/mu-kumaran' target='_blank'>Manoj Kumar Dharmalingam</a> using MERN Stack for project purpose and hosted using <a href='https://github.com/' target='_blank'>Github</a>, <a href='https://www.netlify.com/'  target='_blank'>Netlify</a>, <a href='https://www.render.com/'  target='_blank'>Render</a> and <a href='https://www.mongodb.com/products/platform/atlas-database'  target='_blank'>MongoDB Atlas</a> platforms.</p>
            <p>Note: Use Registration No between 8000501-510 and DOB as 01/01/2001 for testing purpose.</p>
        </div>
    </div>
  )
}

export default Home
