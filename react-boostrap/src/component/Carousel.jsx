import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/pizza1.jpg';
import image2 from '../images/pizza2.jpg';
import image3 from '../images/pizza3.jpg';
import '../App.css';
const Carousel1 = () => {
    return (
        <>
        <div class = 'carousel'>
        <Carousel>
      <Carousel.Item>
      <img src={image1} alt="..." />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="..." />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="..." />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h2 class = 'name-menu'>Menu</h2>
    </div>
    {/* </div> */}
        </>
    )
}
export default Carousel1;
