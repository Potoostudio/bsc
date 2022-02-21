import { UncontrolledCarousel, Row, Col } from 'reactstrap';



const items = [
    {   
        src: "https://cdn11.bigcommerce.com/s-n5mai91uu3/images/stencil/1280w/carousel/23/surface_86_stretch__46762.jpg?c=1",
        altText: "Slide 1",
        caption: "Cut through the crowds and get your content in front of your customers with our elegantly designed enclosures. Available in most screen sizes.",
        header: "Stylish",
        key: "1",
        className: "carousel-product-info"
    },
    {   
        src: "https://cdn11.bigcommerce.com/s-n5mai91uu3/images/stencil/1280w/carousel/19/essentials_kiosk__16050.jpg?c=1",
        altText: "Slide 2",
        caption: "Save service and maintenance frustration by using our products. BSC Enclosures designs all of our products with ease of use at top of mind.",
        header: "Simple",
        key: "2",
        className: "carousel-product-info"
    }
];

const exmapleCarousel = () => (
    <Row className="mx-0 w-100">
        <Col md="12" className="mx-0 px-0">
            <UncontrolledCarousel items={items}/>
        </Col>
    </Row>
);

export default exmapleCarousel;