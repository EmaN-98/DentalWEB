import React, {Component, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './CalendarProgramari.css';
import events from './events';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const writeFileP = require("write-file-p");

let u2=sessionStorage.getItem('user-info');

let doctor=JSON.parse(u2).name;
console.log(doctor);


let ev=events;
let app="";

let a= [
    {
        title  : 'eventA',
        allDay: true,
        start  : '2021-09-09',
        end    : '2021-09-09'
    }

]

export default function EventCalendar()  {

    let [cld, setCld] = useState([
        {
            title  : 'event2',
            allDay: true,
            start  : '2021-07-07',
            end    : '2021-07-07'
        },
        {
            title  : 'event22',
            allDay: true,
            start  : '2021-07-08',
            end    : '2021-07-08'
        }
    ]);

        return(

            <div className="row justify-content-center">
                <Button variant="light" onClick={async () => {

                    //const api_url = "http://localhost:8000/api/register";
                    let response = await fetch('http://localhost:8000/api/getAppointmentsForDoctor/'+doctor, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept":"application/json"
                        },
                        //body: JSON.stringify(doctor)
                    });
                    console.log(JSON.stringify(doctor));
                    response=await response.json();
                    console.warn("response",response);

                    if(!response.error) {

                        console.log("result: "+JSON.stringify(response));
                        app=response;
                         for(let k in app) {
                             if (app.hasOwnProperty(k)) {
                                 console.log(k, app[k]);
                                 console.log("date: ", app[k].appointmentDate);
                                 let parts = app[k].appointmentDate.split('-');
                                 console.log("parts: ", parts);
                                 let i = {
                                     title: app[k].name,
                                     allDay: true,
                                     start: app[k].appointmentDate,//new Date(Number(parts[0]), Number(parts[1]-1), Number(parts[2])),
                                     end: app[k].appointmentDate //new Date(Number(parts[0]), Number(parts[1]-1), Number(parts[2]))
                                 }
                                 //
                                 // ev.push(i);
                                 // console.log("ev: ", ev);
                                 a.push(i);
                                 console.log("a: ", a);

                             }
                         }
                        setCld(a);
                        console.log("cld: ",cld);
                        }
                    else{
                        alert("Could not find your appointments!");
                    }

                }}>Get Appointments</Button>

            <FullCalendar
                 defaultView="dayGridMonth" plugins={[dayGridPlugin]} events={cld}
            />

            </div>
        )
  //  }
}