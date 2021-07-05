import './Login.css';
import {Row, Col, Card, Button, Form, Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {  useState } from "react";
import {  useHistory } from "react-router-dom";

export default function Login() {

    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">

            <div className="titl">
                <b>{t('Title.8')}</b>
            </div>

            <div className="conta">
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
                </Row>
                <Row className="form-row">
                    <Col className="form-col">
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
            </div>
                <div className="row justify-content-center">
                    <Button variant="light" onClick={async () => {
                        let item = { name, email, password };
                        //const api_url = "http://localhost:8000/api/register";
                        let response = await fetch("http://localhost:8000/api/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept":"application/json"
                            },
                            body: JSON.stringify(item)
                        });
                        console.log(JSON.stringify(item));
                        response=await response.json();

                        console.warn("response",response);
                        if(!response.error) {
                            setName("");
                            setEmail("");
                            setPassword("");
                            sessionStorage.setItem("user-info",JSON.stringify(response));
                            localStorage.setItem("log","true");
                            history.push("/");
                        }
                        else{
                            alert("Wrong email or password!");
                        }
                    }}>Login</Button>
                </div>
            </div>


        </div>
    );
}