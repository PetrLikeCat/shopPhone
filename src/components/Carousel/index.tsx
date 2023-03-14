import React from 'react'
import {Carousel } from 'react-bootstrap'


export const Carousels = () => {
  return (
    <div>
       
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://i04.appmifile.com/177_operator_ru/02/06/2022/3ebe120fdc2e0e034663426abb6932de.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Выгодные цены</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://i04.appmifile.com/555_operator_ru/20/06/2022/601a8e7352dd3f8dca65d5f2b2f40bf3.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Высокое качество</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i04.appmifile.com/156_operator_ru/19/05/2022/d20e82d7fc097abebdba4c797d60a19e.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Удобная доставка</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
