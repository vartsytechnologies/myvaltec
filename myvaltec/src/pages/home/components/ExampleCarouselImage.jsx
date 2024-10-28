import sliderImage from '../../../assets/slider1.png';


function ExampleCarouselImage() {
    return (
        <div className='container-fluid m-0 p-0'>
            <img src={sliderImage} alt="sliderImage" style={{width: '100%', height: '70vh', backgroundAttachment: 'fixed', overflow: 'hidden' }} className='img-fluid' />
        </div>
    );
}

export default ExampleCarouselImage;
