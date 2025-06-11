import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ResultPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const result = location.state?.result
  return (
    <div>
      
    </div>
  )
}

export default ResultPage
