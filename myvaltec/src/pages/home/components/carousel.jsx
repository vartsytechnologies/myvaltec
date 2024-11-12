
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import '../home.css';

function MainSlider() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={3000}>
        <CarouselImage text="First slide" />
        <Carousel.Caption className='sliderCaption'>
          <p className='sliderCaptionMain defbodyFont'> <b> Delivering value <br/> through technology</b></p>
          <p className='sliderCaptionSubtext defbodyFont'>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <CarouselImage text="Second slide" />
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain defbodyFont'><b> Delivering Value <br/> Through Technology</b></p>
          <p className='sliderCaptionSubtext defbodyFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <CarouselImage text="Third slide" />
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain defbodyFont'> <b> Delivering Value <br/> Through Technology </b></p>
          <p className='sliderCaptionSubtext defbodyFont'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;