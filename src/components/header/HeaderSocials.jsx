import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/namanrajput21/" ><BsLinkedin/></a>
        <a href="https://github.com/NamanRajputXXI" ><BsGithub/></a>
        <a href="https://dribble.com"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials