import React from 'react'

const Service = () => {
  return (
    <>
      <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span><i className="ri-shield-star-line"></i></span>
                High Class Security
              </li>
              <li>
                <span><i className="ri-24-hours-line"></i></span>
                24 Hours Room Service
              </li>
              <li>
                <span><i className="ri-headphone-line"></i></span>
                Conference Room
              </li>
              <li>
                <span><i className="ri-map-2-line"></i></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section__container banner__container">
        <div className="banner__content">
          <div className="banner__card">
            <h4>25+</h4>
            <p>Properties Available</p>
          </div>
          <div className="banner__card">
            <h4>350+</h4>
            <p>Bookings Completed</p>
          </div>
          <div className="banner__card">
            <h4>600+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
