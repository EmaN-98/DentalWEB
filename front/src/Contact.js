import './Contact.css';
import {Row, Col, Card, Button, Form, Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import React, {  useState } from "react";

export default function Contact() {

    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [cabinet, setCabinet] = useState("");


    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">

            <div className="titl">
                <b>{t('Title.6')}</b>
            </div>

            <Row className="card-row mx-auto" style={{width: '72rem'}}>
                <Col className="card-content">
                    <Card className="crd mx-auto" bg="transparent" text="white" style={{width: '30rem'}}>
                        <Card.Body>
                            <Card.Title>Cabinet 1</Card.Title>
                            <Card.Text>
                                {t('Card.7')}<br/>
                                E-mail: dentaweb1@gmail.com<br/>
                                Tel: 0722442842 , 0264224824
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="card-content">
                    <Card className="crd mx-auto" bg="transparent" text="white" style={{width: '30rem'}}>
                        <Card.Body>
                            <Card.Title>Cabinet 2</Card.Title>
                            <Card.Text>
                                {t('Card.8')}<br/>
                                E-mail: dentaweb2@gmail.com<br/>
                                Tel: 0744242842 , 0264228844
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="form-container">
                <Row className="form-row">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicNume">
                            <Form.Label>{t('Field.1')}</Form.Label>
                            <Form.Control type="nume" placeholder="Introduceti numele dvs."
                                          value={name}
                                          onChange={e => setName(e.target.value)}
                                              />
                        </Form.Group>
                    </Col>
                    <Col className="form-col">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Introduceti adresa dvs. de e-mail"
                                          value={email}
                                          onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicTelefon">
                            <Form.Label>{t('Field.2')}</Form.Label>
                            <Form.Control type="telefon" placeholder="Introduceti numarul dvs. de telefon"
                                          value={telephone}
                                          onChange={e => setTelephone(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col className="form-col">
                        <Form.Group controlId="formBasicData">
                            <Form.Label>{t('Field.3')}</Form.Label>
                            <Form.Control type="data"
                                          placeholder="Introduceti data la care ati dori sa va programam 'ZZ.LL.AAAA'"
                                          value={date}
                                          onChange={e => setDate(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicMesaj">
                            <Form.Label>{t('Field.4')}</Form.Label>
                            <Form.Control size="lg" type="mesaj" placeholder="Introduceti orice detaliu suplimentar"
                                          value={message}
                                          onChange={e => setMessage(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col className="form-col">
                        <Form.Group controlId="forBasicSelect">
                            <Form.Label>{t('Field.5')}</Form.Label>
                            <Form.Control size="sm" as="select" type="cabinet" placeholder="Alegeti cabinetul"
                                          value={cabinet}
                                          onChange={e => setCabinet(e.target.value )}
                                          //onSelect={e => setCabinet(e.target.value )}
                                         // onClick={e => setCabinet(e.target.value )}
                                >
                                <option>Alegeti cabinetul</option>
                                <option>1</option>
                                <option>2</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="row justify-content-center">
                    <Button variant="light" onClick={async () => {
                        const contact_form = { name, email, telephone, date, message, cabinet };
                        //const api_url = "http://172.17.0.2:5000/contact-mail";
                        const response = await fetch("/contact-mail", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(contact_form)
                        });
                        console.log(JSON.stringify(contact_form));
                        if (response.ok) {
                            console.log("response worked!");
                            setName("");
                            setCabinet("");
                            setMessage("");
                            setDate("");
                            setEmail("");
                            setTelephone("");
                        }
                    }}>{t('Field.6')}</Button>
                </div>
            </div>

            <div className="anunt">
                {t('Text.25')}
            </div>

        </div>
    );
}