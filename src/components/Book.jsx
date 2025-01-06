import React from 'react'
import room1 from "../assets/images/room-1.jpg"
import room2 from "../assets/images/room-2.jpg"
import room3 from "../assets/images/room-3.jpg"

const Book = () => {
  return (
    <>
      <section className="section__container room__container">
        <p className="section__subheader">OUR LIVING ROOM</p>
        <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
        <div className="room__grid">
          <div className="room__card">
            <div className="room__card__image">
              <img src={room1} alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Deluxe Ocean View</h4>
              <p>
                Bask in luxury with breathtaking ocean views from your private
                suite.
              </p>
              <h5>Starting from <span>$299/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src={room2} alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Executive Cityscape Room</h4>
              <p>
                Experience urban elegance and modern comfort in the heart of the
                city.
              </p>
              <h5>Starting from <span>$199/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src={room3} alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Family Garden Retreat</h4>
              <p>
                Spacious and inviting, perfect for creating cherished memories
                with loved ones.
              </p>
              <h5>Starting from <span>$249/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container room__container">
        <div className="room__grid">
          <div className="room__card">
            <div className="room__card__image">
              <img src={room1} alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Deluxe Ocean View</h4>
              <p>
                Bask in luxury with breathtaking ocean views from your private
                suite.
              </p>
              <h5>Starting from <span>$299/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src={room2} alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Executive Cityscape Room</h4>
              <p>
                Experience urban elegance and modern comfort in the heart of the
                city.
              </p>
              <h5>Starting from <span>$199/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src={room3} alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Family Garden Retreat</h4>
              <p>
                Spacious and inviting, perfect for creating cherished memories
                with loved ones.
              </p>
              <h5>Starting from <span>$249/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Book
