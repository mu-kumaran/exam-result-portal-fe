import { useState } from 'react'
import axios from "axios"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ResultPage from './components/ResultPage'

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
        <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<ResultPage/>} path='/result'></Route>
        </Routes>
    </>
  )
}

export default App
