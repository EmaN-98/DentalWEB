import './Programare.css';
import {Row, Col, Card, Button, Form, Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import React, {  useState } from "react";
import { Calendar } from "./calendar-component";

export default function Contact() {

    const { t } = useTranslation();

    const [date, setDate] = useState("");
    const [doctor, setDoctor] = useState("");

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    const [selectedDate, setSelectedDate] = useState(new Date());

    const selectedDateChange = (date) => {
        setSelectedDate(date);
    };

    return (<div className="parent">

            <div className="titl">
                <b>{t('Title.10')}</b>
            </div>

                <Row className="form-roww">
                    <Col className="form-col">
                        <Form.Group controlId="formBasicData">
                            <Form.Label>{selectedDate.toDateString()}</Form.Label>
                            <Calendar selected={selectedDate}  onSelectedChange={selectedDateChange} />

                        </Form.Group>
                    </Col>
                </Row>
                <Row className="form-roww">

                    <Col className="form-col">
                        <Form.Group controlId="forBasicSelect">
                            <Form.Label>{t('Field.5')}</Form.Label>
                            <Form.Control size="sm" as="select" type="cabinet" placeholder="Alegeti cabinetul"
                                          value={doctor}
                                          onChange={e => setDoctor(e.target.value )}
                                          //onSelect={e => setCabinet(e.target.value )}
                                         // onClick={e => setCabinet(e.target.value )}
                                >
                                <option>Alegeti medicul</option>
                                <option>Miriam Pop</option>
                                <option>Andrei Muresan</option>
                                <option>Ioana Olar</option>
                                <option>Vlad Mitrea</option>
                                <option>Cristina Luca</option>
                                <option>Ionut Avram</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>


            <div className="row justify-content-center">
                <Button variant="light" onClick={async () => {
                    let n = JSON.parse(sessionStorage.getItem('user-info')).name;
                    let appointmentDate=selectedDate.toDateString(); let appointmentDoctor=doctor;
                    let item = {n, appointmentDate, appointmentDoctor};
                    //const api_url = "http://localhost:8000/api/appointment";
                    let response = await fetch("http://localhost:8000/api/appointment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    console.log(JSON.stringify(item));
                    response = await response.json();
                    console.warn("response", response);
                    if (!response.message) {
                        setDate("");
                        setDoctor("");
                        alert("Appointment successful!");
                    } else {
                        alert("Complete all fields!");
                    }

                }}>Submit</Button>
            </div>


        </div>
    );
}