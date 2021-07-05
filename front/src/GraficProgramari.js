import React, {Component} from 'react';
import './GraficProgramari.css'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import {Button} from "react-bootstrap";

let u2=sessionStorage.getItem('user-info');
let doctor=JSON.parse(u2).name;
console.log(doctor);



let data=[{x:1,y:1}];

export default class GraficProgramari extends Component {
    constructor(props){
        super(props)
        this.state = {
            //key: Date.now(),
            d:[

            ]
        }
        //console.log("key: ",this.state.key)
    }


    render() {
        // data = [
        //
        // ];
        return (

                <div className="row justify-content-center">
                    <Button variant="light" onClick={async () => {

                        //const api_url = "http://localhost:8000/api/register";
                        let response = await fetch('http://localhost:8000/api/getAppointmentsForGraphic/'+doctor, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept":"application/json"
                            },
                            //body: JSON.stringify(doctor)
                        });
                        response=await response.json();
                        console.warn("response",response);

                        if(!response.error) {
                            console.log("result: "+JSON.stringify(response));
                            let app=response;
                            for(let k in app) {
                              if (app.hasOwnProperty(k)) {
                                    console.log(k, app[k]);
                                  let parts = app[k].date.split('-');
                                    let i = {
                                        x: Number(parts[2]),
                                        y: app[k].count
                                    }
                                   data.push(i);
                                  console.log("data: ", data);
                                  this.setState({ d:data});
                                  console.log("d: ", this.state.d);
                                 }
                             }
                   // this.setState({key:Date.now()});
                           // console.log("key2: ",this.state.key);
                        }
                        else{
                            alert("Could not find your appointments!");
                        }
                    }}>Get Statistics</Button>




                <XYPlot height={585} width={800} >
                    <LineSeries data={this.state.d} />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
        );
    }
}