import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Doctores from './Doctores';
import Horario from './Horario'
import Pacientes from './Pacientes'
import Especialidades from './Especialidades'
import Contact from './Contact'
import Citas from './Citas'
import Login from './Login'
export default class NavbarComp extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Navbar bg="ligth" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Clinica Dental</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/doctores"}>Doctores</Nav.Link>
                            <Nav.Link as={Link} to={"/horario"}>Horario</Nav.Link>
                            <Nav.Link as={Link} to={"/pacientes"}>Pacientes</Nav.Link>
                            <Nav.Link as={Link} to={"/especialidades"}>Especialidades</Nav.Link>
                            <Nav.Link as={Link} to={"/citas"}>Citas</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contactanos</Nav.Link>
                            <Nav.Link as={Link} to={"/login"}>Log In</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>               
                </div>
                <div>
                    <Switch>
                        <Route path="/doctores">
                            <Doctores/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/horario">
                            <Horario/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/pacientes">
                            <Pacientes/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/especialidades">
                            <Especialidades/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/citas">
                            <Citas/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>                                  
                </div>
            </Router>
        )
    }
}