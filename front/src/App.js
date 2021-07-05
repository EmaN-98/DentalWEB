import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Noutati from "./Noutati";
import DespreNoi from "./Despre-noi";
import Medici from "./Medici";
import ServiciiTarife from "./Servicii-tarife";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Login from "./Login";
import Register from "./Register";
import Profil from "./Profil";
import Programare from "./Programare";
import CalendarProgramari from "./CalendarProgramari";
import GraficProgramari from "./GraficProgramari";

function App() {

    const { t } = useTranslation();
    const history=useHistory();


     let u=sessionStorage.getItem('user-info');
     let role=JSON.parse(u).role;


    function handleClick(lang) {
        i18next.changeLanguage(lang);
        localStorage.preferredLanguage = lang;
    }

    function handleLogout() {
        sessionStorage.setItem("user-info",null);
    }

    return (
        <div className="parent">

            <header className="App-header">

                <Router>
                    <div className="nav-bar">
                        <ul>

                            <button className="button" onClick={()=>handleClick('ro')} >
                                Ro
                            </button>
                            <button className="button" onClick={()=>handleClick('en')} >
                                En
                            </button>

                            <li id="nav-bar-logo" className="nav-bar-item-logo">
                                <img alt="LOGO" src="logo.png"/>
                            </li>
                            <li id="nav-bar-home" className="nav-bar-item">
                                <Link to="/">{t('Nav.1')}</Link>
                            </li>


                            <div className="nav-bar-item">
                                <li>
                                    <button className="button" onClick={()=>handleLogout()} >
                                        Logout
                                    </button>
                                </li>
                            </div>

                            <div className="nav-bar-item-login">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item-login">
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/contact">{t('Nav.6')}</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/servicii&tarife">{t('Nav.5')}</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/medici">{t('Nav.4')}</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/despre-noi">{t('Nav.3')}</Link>
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    <Link to="/noutati">{t('Nav.2')}</Link>
                                </li>
                            </div>

                            {/*<div className="nav-bar-item">*/}
                            {/*    <li>*/}
                            {/*        <button className="button" onClick={()=>handleProfil()} >*/}
                            {/*            {t('Nav.7')}*/}
                            {/*        </button>*/}

                            {/*    </li>*/}
                            {/*</div>*/}
                            <div className="nav-bar-item">
                                <li>
                                    {/*let it=sessionStorage.getItem("user-info");*/}
                                    {/*console.log("it");*/}
                                    {/*if(it){*/}
                                      {u!=null && <Link to="/profil">{t('Nav.7')}</Link>}
                                {/*}*/}
                                {/*    else  {alert("You are not logged in!")}*/}
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    {u!=null && <Link to="/programare">{t('Nav.8')}</Link>}
                                </li>
                            </div>


                            <div className="nav-bar-item">
                                <li>
                                    {u!=null && role==='doctor' && <Link to="/calendarProgramari">C</Link>}
                                </li>
                            </div>

                            <div className="nav-bar-item">
                                <li>
                                    {u!=null && role==='doctor' && <Link to="/graficProgramari">G</Link>}
                                </li>
                            </div>

                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
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

                        <Route exact path="/profil">
                            <Profil/>
                        </Route>
                        <Route exact path="/programare">
                            <Programare/>
                        </Route>
                        <Route exact path="/calendarProgramari">
                        <CalendarProgramari/>
                          </Route>
                        <Route exact path="/graficProgramari">
                            <GraficProgramari/>
                        </Route>
                    </Switch>

                </Router>
            </header>

        </div>
    );
}

export default App;
