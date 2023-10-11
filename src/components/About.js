import React from 'react'
import about_img_1 from "../assets/Mario and Adrian A.jpg"
import about_img_2 from "../assets/Mario and Adrian b.jpg"

const About = () => {
  return (
    <div className="about-wrapper">
      <section className='about'>
        <div className='about-text'>
          <h1 className='about-title'>Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-p">
              We are a family owned Mediterranean reataurant, focused on
              traditional recipes served with a modern twist.
            </p>
        </div>
        <div className="about-img">
          <img src={about_img_1} alt="Mario and Adrian" />
          <img src={about_img_2} alt="Mario and Adrian" />
        </div>
      </section>
    </div>
  )
}

export default About