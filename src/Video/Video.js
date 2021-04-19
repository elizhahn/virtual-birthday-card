import React from 'react';
import { Link } from 'react-router-dom'; 
import './Video.css';
import { TiArrowBack } from 'react-icons/ti';

const Video = () => {
  return (
    <section className="video-container">
      <Link to="/"><TiArrowBack className="go-back-icon"/></Link>
      <video controls className="video-player">
        <source src="" type="video/mp4"/>
      </video>
   </section>
  )
}

export default Video; 