import React from 'react'
import Important  from "../assets/Important.jpg"
import Important2  from "../assets/Important2.jpg"
import { Carousel } from 'react-bootstrap'

function HomeCarousel() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
            
              src={Important}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Important}
              alt="Second slide"
            />
    
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Important2}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

export default HomeCarousel
