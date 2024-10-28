
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';
import './home.css'

function MainSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption className='sliderCaption'>
          <p className='sliderCaptionMain'> <b> 1 Delivering Value <br/> Through Technology</b></p>
          <p className='sliderCaptionSubtext'>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain'><b>2 Delivering Value <br/> Through Technology</b></p>
          <p className='sliderCaptionSubtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain'> <b>3 Delivering Value <br/> Through Technology </b></p>
          <p className='sliderCaptionSubtext'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;