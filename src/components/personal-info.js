import React from 'react'
import ReactDOM from 'react-dom/client'
import profile from '../images/profile.png'


function PersonalInfo () {
  return (
    <div className = "pers-info">
      <img src = {profile} className = "profile-image img-fluid rounded" />
      <h2 className = "my-2">Justin Scott</h2>
      <h4>Full-Stack Developer</h4>
      <a href = "https://github.com/JWS93/" className = "website">Github</a>
      <div className = "buttons justify-content-center row mx-3 my-2">
        <button className = "btn btn-light rounded email-btn col-10 mx-2 ">Email</button>
      </div>
    </div>
    
  )
}

export default PersonalInfo;


