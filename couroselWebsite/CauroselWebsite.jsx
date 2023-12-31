import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../cards/ImagesAllCard/webiste7.jpeg'
import img2 from '../cards/ImagesAllCard/webiste5.jpeg'
import img3 from '../cards/ImagesAllCard/webiste3.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;