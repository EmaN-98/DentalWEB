import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {
    Container,
    Row,
    Col,
    Carousel
} from 'react-bootstrap';
import {Player} from "video-react";
import '../node_modules/video-react/dist/video-react.css'
import {useTranslation} from "react-i18next";
import i18next from "i18next";


function Home() {

    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">
            <div className="title">
                {t('Title.1')} <br/><i><b>~DentaWEB~</b></i>
            </div>

            <div className="container">
                <Container fluid>
                    <Row>
                        <Col>{t('Description.1')}</Col>
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
                    <Row>
                        <Col>{t('Description.2')}</Col>
                    </Row>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fQyhxULzA0w"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                </Container>
            </div>
        </div>

    );
}

export default Home;