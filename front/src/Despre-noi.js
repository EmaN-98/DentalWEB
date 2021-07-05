import './Despre-noi.css';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useTranslation} from "react-i18next";
import i18next from "i18next";

export default function DespreNoi() {

    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">

        <div className="titl">
            <i>DentaWEB</i> {t('Title.3')}
            <br/>
            {t('Title.4')}
            <br/>
        </div>

        <div className="descriere">
            {t('Description.3')}
        </div>

        <div className="container">
            <Container fluid>
                <Row>
                    <Col>{t('Description.4')}</Col>
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

            </Container>
        </div>
        </div>
        );
        }