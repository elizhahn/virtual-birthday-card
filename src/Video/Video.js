import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <section className="video-container">
    <video controls className="video-player">
      <source src="" type="video/mp4"/>
    </video>
  </section>
  )
}

export default Video; 