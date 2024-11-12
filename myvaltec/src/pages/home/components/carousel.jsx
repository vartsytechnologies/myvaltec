import {React, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import '../home.css';
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import AOS from 'aos';

function MainSlider() {
  useEffect(()=>{
    AOS.init({
      duration:1050,
      offset:50
    })
  },[]);
  return (
    <Carousel indicatrs={false}>
      <Carousel.Item interval={3000}>
        <CarouselImage text="First slide" sliderImage={slider2}/>
        <Carousel.Caption className='sliderCaption'>
          <p className='sliderCaptionMain defbodyFont' data-aos='fade-up'> <b> Delivering value <br/> through technology</b></p>
          <p className='sliderCaptionSubtext defbodyFont' data-aos='fade-left' data-aos-delay='200'>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <CarouselImage text="Second slide" sliderImage={slider1}/>
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain defbodyFont' data-aos='fade-up'><b> Delivering Value <br/> Through Technology</b></p>
          <p className='sliderCaptionSubtext defbodyFont' data-aos='fade-left' data-aos-delay='200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <CarouselImage text="Third slide" sliderImage={slider2}/>
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain defbodyFont' data-aos='fade-up'> <b> Delivering Value <br/> Through Technology </b></p>
          <p className='sliderCaptionSubtext defbodyFont' data-aos='fade-left' data-aos-delay='200'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;