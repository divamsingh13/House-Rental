import React from 'react'
import { Link } from 'react-router-dom'
const Feature = () => {
  return (
    <>
      <section className="section__container booking__container">
        <form action="/" className="booking__form">
          <div className="input__group">
            <span><i className="ri-calendar-2-fill"></i></span>
            <div>
              <label htmlFor="check-in">CHECK-IN</label>
              <input type="text" placeholder="Check In" />
            </div>
          </div>
          <div className="input__group">
            <span><i className="ri-calendar-2-fill"></i></span>
            <div>
              <label htmlFor="check-out">CHECK-OUT</label>
              <input type="text" placeholder="Check Out" />
            </div>
          </div>
          <div className="input__group">
            <span><i className="ri-user-fill"></i></span>
            <div>
              <label htmlFor="guest">Guest Name</label>
              <input type="text" placeholder="Guest" />
            </div>
          </div>
          <div className="input__group input__btn">
            <Link to="/book">

            <button className="btn input__btn">CHECK OUT</button>
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Feature
