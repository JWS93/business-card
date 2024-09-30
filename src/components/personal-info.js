import React from 'react'
import ReactDOM from 'react-dom/client'


function PersonalInfo () {
  return (
    <div className = "pers-info col-12">
      <h2 className = "my-2">Justin Scott</h2>
      <h4>Full-Stack Developer</h4>
      <a href = "https://github.com/JWS93/" className = "website">Github</a>
      <div className = "buttons row">
        <button className = "btn btn-light btn-sm col-6 email-btn">Email</button>
        <button className = "btn btn-dark btn-sm col-6 linkedin-btn">LinkedIn</button>
      </div>
    </div>
    
  )
}

export default PersonalInfo