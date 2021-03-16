import './Medici.css';
import {Card, Col, Row} from "react-bootstrap";

export default function Medici() {
    return (<div className="parent">

            <div className="titl">
                <b>Cei care </b><i>va readuc zambetul pe buze</i>:
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
                                    Cu multa pasiune pentru medicina si pentru copii, Miriam este medicul nostru
                                    pedodont de mai bine de 5 ani.
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
                                    Andrei este cel care se ocupa de partea de chirurgie orala, avand multi ani de experienta la activ.
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
                                    Ioana este cea care ofera pacientilor un zambet perfect, redandu-le increderea, prin diferite servicii ortodontice.
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
                                    Cand vine vorba de implanturi dentare, Vlad este cel care face posibila aceasta procedura.
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
                                    Tot ce tine de profilaxie si estetica dentara la noi revine in sarcina Cristinei care mereu o duce la capat cu succes.
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
                                    Ionut se ocupa de serviciile de endodontie si odontoterapie, asigurandu-va o dantura sanatoasa si nedureroasa.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}