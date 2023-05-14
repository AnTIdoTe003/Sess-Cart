// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.scss'
const Card = () => {
  return (
    <div className="card-wrapper">
        <div className="card-content">
            <div className="card-img">
                <img src="https://via.placeholder.com/500x300" alt="Medicine" />
            </div>
            <div className="card-heading">
                <h2>
                    Medicine Name
                </h2>
            </div>
            <div className="card-details">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam doloribus vel porro quas minima in dolore tempora sit amet, saepe ipsa vero velit repudiandae quis, fuga inventore enim corrupti.
                </p>
            </div>
            <div className="card-btns">
                <button>Learn More</button>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card