import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {
    Container,
    Row,
    Col,
    Carousel
} from 'react-bootstrap';


function Home() {
    return (<div className="parent">
        <div className="title">
            Bine ati venit pe site-ul cabinetului stomatologic<br /><i><b>~DentaWEB~</b></i>
        </div>

    <div className="container">
        <Container fluid>
            <Row>
                <Col>Noi va oferim calitate, profesionalism si preturi accesibile, indiferent de serviciile de care aveti nevoie:</Col>
            </Row>
            <Row>
                <Col md={9} className="carousel-content">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/web5.png"
                                width="250"
                                height="270"
                                alt="1st slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/white.jpg"
                                width="300"
                                height="270"
                                alt="2nd slide"
                            />
                            <Carousel.Caption>
                                <h3>Albire profesionala a dintilor</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/obtur.png"
                                width="300"
                                height="270"
                                alt="3rd slide"
                            />
                            <Carousel.Caption>
                                <h3>Obturatii dentare</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/ponte.jpg"
                                width="400"
                                height="270"
                                alt="4th slide"
                            />
                            <Carousel.Caption>
                                <h3>Coronite/punti dentare</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/implant.jpg"
                                width="300"
                                height="270"
                                alt="5th slide"
                            />
                            <Carousel.Caption>
                                <h3>Implanturi dentare</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/aparat.jpg"
                                width="400"
                                height="270"
                                alt="6th slide"
                            />
                            <Carousel.Caption>
                                <h3>Aparate dentare</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="images/extractie.jpg"
                                width="550"
                                height="270"
                                alt="7th slide"
                            />
                            <Carousel.Caption>
                                <h3>Extractii</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </div></div>

    );
}

export default Home;