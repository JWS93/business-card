import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer () {
  return(
    <footer className = "justify-content-center py-2 footer">
      <a href = "https://x.com"><FontAwesomeIcon icon={faXTwitter} className = "px-3" /></a>
      <a href = "https://facebook.com"><FontAwesomeIcon icon={faFacebook} className = "px-3" /></a>
      <a href = "https://instagram.com"><FontAwesomeIcon icon={faInstagram} className = "px-3" /></a>
      <a href = "www.linkedin.com/in/justin-scott-6690b42b6"><FontAwesomeIcon icon={faLinkedin} className = "px-3" /></a>
    </footer>
  )
}

export default Footer