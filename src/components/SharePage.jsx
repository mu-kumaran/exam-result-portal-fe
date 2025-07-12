import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SharePage = () => {
    const navigate = useNavigate()
    const [showDiv,SetshowDiv] = useState(false)
    function onShow() {
        SetshowDiv(true)
    }
  return (
    <div>
      <button onClick={onShow}>Email results</button>
      <button onClick={onShow}>SMS results</button>
      <button onClick={onShow}>Whatsapp results</button>

      {showDiv && (
        <>
        <h2>Under Construction.... Working On....</h2>
        </>
      )}
      <br /><br />
      <button onClick={() => navigate("/")}>Search Again</button>
    </div>
  )
}

export default SharePage
