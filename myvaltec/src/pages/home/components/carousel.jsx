
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import '../home.css'
import DefaultButton from '../../../components/defaultButton';

function MainSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption className='sliderCaption'>
          <p className='sliderCaptionMain'> <b> Delivering Value <br/> Through Technology</b></p>
          <p className='sliderCaptionSubtext'>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <DefaultButton name="Request a Quote" className="mt-5"/>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain'><b> Delivering Value <br/> Through Technology</b></p>
          <p className='sliderCaptionSubtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <DefaultButton name="Request a Quote"/>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption className='sliderCaption'>
        <p className='sliderCaptionMain'> <b> Delivering Value <br/> Through Technology </b></p>
          <p className='sliderCaptionSubtext'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          <DefaultButton name="Request a Quote"/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;