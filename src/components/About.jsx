import React from 'react'
import abouti from "../assets/images/about.jpg" 

const About = () => {
  return (
    <>
      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src={abouti} alt="about" />
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description">
            With a focus on quality accommodations, personalized experiences, and
            seamless booking, our platform is dedicated to ensuring that every
            traveler embarks on their dream holiday with confidence and
            excitement.

            Our mission is to make the rental process seamless and stress-free for 
            both tenants and property owners. We believe that everyone deserves a 
            place they can call home, and we are committed to helping you find that
            perfect place. Whether you're looking for a cozy apartment, a spacious 
            house, or anything in between, we're here to assist you every step of the way.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
