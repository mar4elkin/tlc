import React from 'react';
import { NavDropdown, Form, Button, FormControl, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import  MainPage  from './MainPage';
import MainPageCSS from './MainPage.css'

export default class TLCHeader extends React.Component {
    
    render() {

        const NavBarStyle = {
            backgroundColor: 'white',
            width: '100%',
            marginLeft:'auto',
            marginRight:'auto',
            zIndex:'2',
            opacity: '1'
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
                    
                    
                    <Nav.Link href="#home">Ссылка</Nav.Link>
                    
                    <Nav.Link href="#home">Ссылка</Nav.Link>
                    
                    
                    <Nav.Link href="#home">Ссылка</Nav.Link>
                    
                    <Nav.Link href="#home">О компании</Nav.Link>
                    
                    
                    </Nav>
                    <Form inline>
                        <NavDropdown className='dropDEbase' title="Перевозка Грузов" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Все</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">что </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">связонно</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">с грузами</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='dropDEbase' title="Таксомоторные перевозки" id="basic-nav-dropdown">
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


