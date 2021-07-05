import './Profil.css';
import {Row, Col, Card, Button, Form, Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import React, {  useState, useRef, useEffect } from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";


export default function Register() {

    const {t} = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [field, setField] = useState([]);

    const history = useHistory();

    let serv=sessionStorage.getItem('services');

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    // const inputRef = useRef<HTMLInputElement>(null);
    //
    // const handleUpload = () => {
    //     inputRef.current?.click();
    // };

    return (<div className="parent">

            <div className="titl">
                <b>{t('Title.11')}</b>
            </div>

            {/*const valueJSON=sessionStorage.getItem('user-info');*/}
            {/*const value = JSON.parse(valueJSON);*/}

            <div className="cnt">
                <Row className="card-row mx-auto" style={{width: '72rem'}}>
                    <Col className="card-content">
                        <Card className="crd mx-auto" bg="transparent" text="white" style={{width: '30rem'}}>
                            <Card.Body>
                                <Card.Title>{t('Nav.7')}</Card.Title>
                                <Card.Text>
                                    {/*let it=JSON.parse(sessionStorage.getItem('user-info')).name;*/}
                                    {/*if(!it){history.push('/home')}*/}

                                    {t('Field.1')}: {JSON.parse(sessionStorage.getItem('user-info')).name}<br/>
                                    E-mail: {JSON.parse(sessionStorage.getItem('user-info')).email}<br/>
                                    {t('Field.7')}: ********<br/>
                                    {t('Field.8')}: {serv}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="row justify-content-center">
                <Button variant="light" onClick={async () => {
                    let mail = JSON.parse(sessionStorage.getItem('user-info')).email;
                    let item = {mail};
                    //const api_url = "http://localhost:8000/api/register";
                    let response = await fetch("http://localhost:8000/api/services", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    console.log(item);
                    response = await response.json();
                    console.warn("response", response);
                    if (!response.message) {
                        sessionStorage.setItem('services',response.services);

                    } else {
                        alert("Complete all fields!");
                    }

                }}>Services</Button>
            </div>

            <div className="conta">
                <div className="form-container">
                    <Row className="form-row">
                        <Col className="form-col">
                            <Form.Group controlId="formBasicNume">
                                <Form.Label>{t('Field.1')}*</Form.Label>
                                <Form.Control type="nume" placeholder="Introduceti numele dvs."
                                              value={name}
                                              onChange={e => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-row-pass">
                        <Col className="form-col-pass">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail*</Form.Label>
                                <Form.Control type="email" placeholder="Introduceti adresa dvs. de e-mail"
                                              value={email}
                                              onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="form-row">
                        <Col className="form-col">
                            <Form.Group controlId="formBasicParola">
                                <Form.Label>{t('Field.7')}*</Form.Label>
                                <Form.Control type="password" placeholder="Introduceti parola dvs."
                                              value={password}
                                              onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="form-row">
                        <Col className="form-col">
                            <Form.Group as={Col} controlId="my_multiselect_field">
                                <Form.Label>{t('Field.8')}</Form.Label>
                                <Form.Control as="select" multiple value={field}
                                              onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                                    <option value="Consultatii ">{t('Table.1')}</option>
                                    <option value="Profilaxie ">{t('Table.5')}</option>
                                    <option value="Estetica dentara ">{t('Table.13')}</option>
                                    <option value="Documentare foto">{t('Table.4')}</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>

                <Row className="form-row">
                    <Col className="form-col">
                        <Form.File id="fileUpload" label={t('Field.9')}/>
                    </Col>
                </Row>

                <div className="row justify-content-center">
                    <Button variant="light" onClick={async () => {
                        let n = JSON.parse(sessionStorage.getItem('user-info')).name;
                        let item = {n, name, email, password, field};
                        //const api_url = "http://localhost:8000/api/register";
                        let response = await fetch("http://localhost:8000/api/update", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify(item)
                        });
                        console.log(item);
                        response = await response.json();
                        console.warn("response", response);
                        if (!response.message) {
                            setName("");
                            setEmail("");
                            setPassword("");
                            setField("");

                            alert("Update successful!");
                        } else {
                            alert("Complete all fields!");
                        }

                    }}>Submit</Button>
                </div>
                {/*<div className="m-3">*/}
                {/*    <label className="mx-3">Choose file: </label>*/}
                {/*    <input ref={inputRef} className="d-none" type="file" />*/}
                {/*    <button onClick={handleUpload} className="btn btn-outline-primary">*/}
                {/*        Upload*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/*<div className="row justify-content-center">*/}
                {/*    <Button variant="light" onClick={async () => {*/}
                {/*        let item = { name, email, password };*/}
                {/*        //const api_url = "http://localhost:8000/api/register";*/}
                {/*        let response = await fetch("http://localhost:8000/api/register", {*/}
                {/*            method: "POST",*/}
                {/*            headers: {*/}
                {/*                "Content-Type": "application/json",*/}
                {/*                "Accept":"application/json"*/}
                {/*            },*/}
                {/*            body: JSON.stringify(item)*/}
                {/*        });*/}
                {/*        console.log(JSON.stringify(item));*/}
                {/*        response=await response.json();*/}
                {/*        console.warn("response",response);*/}
                {/*        if(!response.message) {*/}
                {/*            setName("");*/}
                {/*            setEmail("");*/}
                {/*            setPassword("");*/}
                {/*            history.push("/login");*/}
                {/*        }*/}
                {/*        else{*/}
                {/*            alert("Complete all fields!");*/}
                {/*        }*/}

                {/*    }}>Register</Button>*/}
                {/*</div>*/}
            </div>


        </div>
    );
}