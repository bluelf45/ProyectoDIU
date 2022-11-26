import React from 'react'
import Important  from "../assets/Important.jpg"
import Important2  from "../assets/Important2.jpg"
import { Carousel } from 'react-bootstrap'

function HomeCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={Important}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={Important}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={Important2}
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
    );
  }

export default HomeCarousel
