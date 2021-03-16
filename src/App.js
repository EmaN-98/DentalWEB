import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Noutati from "./Noutati";
import DespreNoi from "./Despre-noi";
import Medici from "./Medici";
import ServiciiTarife from "./Servicii-tarife";

function App() {
    return (
        <div className="parent">

            <header className="App-header">

                <Router>
                    <div className="nav-bar">
                        <ul>
                            <li id="nav-bar-logo" className="nav-bar-item-logo">
                                <img alt="LOGO" src="logo.png"/>
                            </li>
                            <li id="nav-bar-home" className="nav-bar-item">
                                <Link to="/">Acasa</Link>
                            </li>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/servicii&tarife">Servicii&Tarife</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/medici">Medici</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/despre-noi">Despre noi</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/noutati">Noutati</Link>
                                </li>
                            </div>

                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                        <Route exact path="/servicii&tarife">
                            <ServiciiTarife/>
                        </Route>
                        <Route exact path="/medici">
                            <Medici/>
                        </Route>
                        <Route exact path="/despre-noi">
                            <DespreNoi/>
                        </Route>
                        <Route exact path="/noutati">
                            <Noutati/>
                        </Route>
                    </Switch>

                </Router>
            </header>

        </div>
    );
}

export default App;
