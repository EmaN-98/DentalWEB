import './Despre-noi.css';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function DespreNoi() {
    return (<div className="parent">

        <div className="titl">
            <i>DentaWEB</i> este rezultatul pasiunii echipei noastre pentru medicina -stomatologie,<br/> dar mai
            ales pentru oameni.
            <br/>
            <b>Dorinta</b> noastra: sa va vedem <b>zambind</b> :)
            <br/>
        </div>

        <div className="descriere">
            In cabinetele noastre veti putea opta pentru servicii din cadrul tuturor specialitatilor medicinei dentare
            moderne, servicii realizate de catre medici profestionisti, folosind materiale de inalta calitate si
            aparatura moderna.
        </div>

        <div className="container">
            <Container fluid>
                <Row>
                    <Col>Va asteptam intr-un mediu primitor, recent reamenajat:</Col>
                </Row>
                <Row>
                    <Col md={9} className="carousel-content">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web3.jpg"
                                    width="350"
                                    height="360"
                                    alt="1st slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web6.jpg"
                                    width="300"
                                    height="360"
                                    alt="2nd slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web8.jpg"
                                    width="300"
                                    height="360"
                                    alt="3rd slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web7.jpg"
                                    width="400"
                                    height="360"
                                    alt="4th slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web9.jpg"
                                    width="300"
                                    height="360"
                                    alt="5th slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web10.jpg"
                                    width="400"
                                    height="360"
                                    alt="6th slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web2.jpg"
                                    width="360"
                                    height="360"
                                    alt="7th slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block mx-auto"
                                    src="images/web11.jpg"
                                    width="450"
                                    height="360"
                                    alt="8th slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col>...si multe alte servicii de calitate!</Col>
                </Row>
            </Container>
        </div>
        </div>
        );
        }