import React from 'react';
import { NavDropdown, Form, Button, FormControl, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  MainPage  from './MainPage';

export default class TLCHeader extends React.Component {
    
    render() {

        const NavBarStyle = {
            background: 'rgba(89, 254, 195, 0.69)',
            borderRadius: '20px',
            marginTop: '5px',
            width: '95%',
            marginLeft:'auto',
            marginRight:'auto',
            zIndex:'2'
        }

        return (
            <Router>
                <Navbar style={NavBarStyle} expand="lg">
                <Link to="/">
                    <Navbar.Brand>TLC</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <Link to="about">
                        <Nav.Link href="#home">Ссылка</Nav.Link>
                    </Link>
                    <Link to="about">
                        <Nav.Link href="#home">Ссылка</Nav.Link>
                    </Link>
                    <Link to="about">
                        <Nav.Link href="#home">Ссылка</Nav.Link>
                    </Link>
                    <Link to="about">
                        <Nav.Link href="#home">Ссылка</Nav.Link>
                    </Link>
                    
                    </Nav>
                    <Form inline>
                        <NavDropdown title="Перевозка Грузов" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Все</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">что </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">связонно</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">с грузами</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Таксомоторные перевозки" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Все</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">что </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">связонно</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">с такси</NavDropdown.Item>
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact strict path="/">
                        <MainPage />
                    </Route>
                </Switch>

            </Router>
        )
    }

}  


