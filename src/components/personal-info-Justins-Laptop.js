import React from 'react'
import profile from '../images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function PersonalInfo () {
  return (
    <div className = "pers-info">
      <img src = {profile} className = "profile-image img-fluid rounded" alt = "profile-pic" />
      <h2 className = "my-2">Justin Scott</h2>
      <h4>Full-Stack Developer</h4>
      <a href = "https://github.com/JWS93/" className = "website"><FontAwesomeIcon icon={faGithub} /> Github</a>
      <div className = "buttons justify-content-center row mx-3 my-2">
        <button className = "btn btn-light btn-sm rounded email-btn col-10 mx-2 "><FontAwesomeIcon icon={faEnvelope} className = "email-icon" /> Email</button>
      </div>
    </div>
    
  )
}

export default PersonalInfo;


