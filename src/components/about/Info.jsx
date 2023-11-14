import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
        <div className="about-box">
            <i className='bx bxs-award about-icon'></i>
            <h3 className="about-title">Experience</h3>
            <span className="about-subttle">4ans de travail </span>
        </div>

        <div className="about-box">
            <i className='bx bxs-briefcase about-icon'></i>
            <h3 className="about-title">Projets</h3>
            <span className="about-subttle">30 + Projets</span>
        </div>

        <div className="about-box">
            <i className='bx bx-support about-icon'></i>
            <h3 className="about-title">Support</h3>
            <span className="about-subttle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info