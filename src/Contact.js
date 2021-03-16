import './Contact.css';
import {Row, Col, Card, Button, Form} from 'react-bootstrap';

export default function Contact() {
    return (<div className="parent">

            <div className="titl">
                <b>Pentru informatii suplimentare si programari, va punem la dispozitie datele noastre de contact,
                    oferindu-va totodata si posibilitatea de a va programa online:</b>
            </div>

            <Row className="card-row mx-auto" style={{width: '72rem'}}>
                <Col className="card-content">
                    <Card className="crd mx-auto" bg="transparent" text="white" style={{width: '30rem'}}>
                        <Card.Body>
                            <Card.Title>Cabinet 1</Card.Title>
                            <Card.Text>
                                Adresa: strada Paris, 22, Cluj-Napoca, Romania<br/>
                                E-mail: dentaweb1@gmail.com<br/>
                                Telefon: 0722442842 , 0264224824
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="card-content">
                    <Card className="crd mx-auto" bg="transparent" text="white" style={{width: '30rem'}}>
                        <Card.Body>
                            <Card.Title>Cabinet 2</Card.Title>
                            <Card.Text>
                                Adresa: strada Izlazului, 42, Cluj-Napoca, Romania<br/>
                                E-mail: dentaweb2@gmail.com<br/>
                                Telefon: 0744242842 , 0264228844
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="form-container">
                <Row className="form-row">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicNume">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="nume" placeholder="Introduceti numele dvs."/>
                        </Form.Group>
                    </Col>
                    <Col className="form-col">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Introduceti adresa dvs. de e-mail"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicTelefon">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control type="telefon" placeholder="Introduceti numarul dvs. de telefon"/>
                        </Form.Group>
                    </Col>
                    <Col className="form-col">
                        <Form.Group controlId="formBasicData">
                            <Form.Label>Data programarii</Form.Label>
                            <Form.Control type="data"
                                          placeholder="Introduceti data la care ati dori sa va programam 'ZZ.LL.AAAA'"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicMesaj">
                            <Form.Label>Mesaj</Form.Label>
                            <Form.Control size="lg" type="mesaj" placeholder="Introduceti orice detaliu suplimentar"/>
                        </Form.Group>
                    </Col>
                    <Col className="form-col">
                        <Form.Group controlId="forBasicSelect">
                            <Form.Label>Selectare cabinet</Form.Label>
                            <Form.Control size="sm" as="select">
                                <option>1</option>
                                <option>2</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="row justify-content-center">
                    <Button variant="light">Trimite</Button>
                </div>
            </div>

            <div className="anunt">
                Programarea dvs. va va fi confirmata prin e-mail si telefonic in maxim 2 zile lucratoare, in functie de existenta unui loc disponibil la data dorita, in caz contrar se va stabili telefonic o alta data.
            </div>
        </div>
    );
}