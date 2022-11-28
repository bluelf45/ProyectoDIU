import React from 'react'
import edificio  from "../assets/edificio1.jpg"
import edificio2  from "../assets/edificio2.jpg"
import piscina  from "../assets/piscina.jpg"
import { Carousel } from 'react-bootstrap'

function HomeCarousel() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
            
              src={edificio}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={edificio2}
              alt="Second slide"
            />
    
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={piscina}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

export default HomeCarousel
