import './Medici.css';
import {Card, Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import i18next from "i18next";

export default function Medici() {

    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">

            <div className="titl">
                <b>{t('Title.5')}</b>
            </div>

            <div className="cont">
                <Row className="card-rowM mx-auto" style={{width: '72rem'}}>
                    <Col className="card-contentM">
                        <Card className="crdM mx-auto" bg="transparent" text="white" style={{width: '20rem', height: '35rem'}}>
                            <Card.Title>Miriam Pop</Card.Title>
                            <Card.Img variant="top" src="images/d3.jpg"
                                      style={{width: '20rem', height: '23rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {t('Card.1')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="card-contentM">
                        <Card className="crdM mx-auto" bg="transparent" text="white" style={{width: '19rem', height: '35rem'}}>
                            <Card.Title>Andrei Muresan</Card.Title>
                            <Card.Img variant="top" src="images/d6.jpg"
                                      style={{width: '19rem', height: '23rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {t('Card.2')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="card-contentM">
                        <Card className="crdM mx-auto" bg="transparent" text="white" style={{width: '18rem', height: '35rem'}}>
                            <Card.Title>Ioana Olar</Card.Title>
                            <Card.Img variant="top" src="images/d4.jpg"
                                      style={{width: '18rem', height: '23rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {t('Card.3')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="card-rowM mx-auto" style={{width: '72rem'}}>
                    <Col className="card-contentM">
                        <Card className="crdM mx-auto" bg="transparent" text="white" style={{width: '19rem', height: '35rem'}}>
                            <Card.Title>Vlad Mitrea</Card.Title>
                            <Card.Img variant="top" src="images/d7.jpg"
                                      style={{width: '19rem', height: '23rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {t('Card.4')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="card-contentM">
                        <Card className="crdM mx-auto" bg="transparent" text="white" style={{width: '19rem', height: '35rem'}}>
                            <Card.Title>Cristina Luca</Card.Title>
                            <Card.Img variant="top" src="images/d5.jpg"
                                      style={{width: '19rem', height: '23rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {t('Card.5')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="card-contentM">
                        <Card className="crdM mx-auto" bg="transparent" text="white" style={{width: '20rem', height: '35rem'}}>
                            <Card.Title>Ionut Avram</Card.Title>
                            <Card.Img variant="top" src="images/d8.jpg"
                                      style={{width: '20rem', height: '23rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    {t('Card.6')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <ul className="pagination">
                <li className="back"><a href="/despre-noi">Back</a></li>
                <li className="forward"><a href="/servicii&tarife">Forward</a></li>
            </ul>

        </div>
    );
}