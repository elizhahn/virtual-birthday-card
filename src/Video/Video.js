import React from 'react';
import { Link } from 'react-router-dom'; 
import './Video.css';
import { TiArrowBack } from 'react-icons/ti';

const Video = () => {
  return (
    <section className="video-container">
      <Link to="/"><TiArrowBack className="go-back-icon"/></Link>
      <iframe title="happy birthday mom" width="620" height="415" src="https://www.youtube.com/embed/OdwHRyxf_zA" allowFullScreen></iframe>
   </section>
  )
}

export default Video; 