import React from 'react';
import aboutimage from '../images/about.png'
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt=''/>
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>IMEN</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About;
