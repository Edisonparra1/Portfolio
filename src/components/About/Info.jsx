import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="uil uil-award"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 years working</span>
        </div>
        <div className="about__box">
        <i class="uil uil-briefcase-alt"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>
        <div className="about__box">
        <i class="uil uil-cloud-question"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
       
    </div>
  )
}

export default Info