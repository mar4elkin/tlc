import React from 'react';
import { Row, Container, Col, Image, Jumbotron, Card } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import Cargo from '../assets/cargo.png';
import CargoCard from '../assets/truckCard.jpg';
import TaxiCard from '../assets/taxiPhoto.jpg';
import MainPageCSS from './MainPage.css'
import AnimateCss from 'hover.css'


export default class MainPage extends React.Component {
    
    render() {

        const SelectionContainer = {
            marginLeft:'auto',
            marginRight:'auto'
        }
        
        const ImgHollder = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            height:'400px',
            width: '80%',
            backgroundImage: `url(${Cargo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'bottom'
        }

        const CardImg = {
            height: '190px',
            width: '285px'
        }

        return (
            // <img onClick={() => fullpageApi.moveTo(2)} src={Cargo} />
            <ReactFullpage
                scrollingSpeed = {1000} /* Options here */

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>

                            <div className="section">
                            <Jumbotron style={ImgHollder}>
                                <h1 class="huper">TLC</h1>
                                <p class="huper">
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                                <p class="huper">
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                                <p class="huper">
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                            </Jumbotron>
                                <Container style={{display: 'flex', justifyContent: 'center'}}>
                                    <Row>

                                        <Col className="hvr-grow" onClick={() => fullpageApi.moveTo(3)}>                     
                                            <Image id='item' style={CardImg} src={TaxiCard} rounded  />        
                                            <h4>Таксомоторные перевозки</h4>
                                        </Col>

                                        <Col className="hvr-grow" onClick={() => fullpageApi.moveTo(2)}>
                                            <Image id='item' style={CardImg} src={CargoCard} rounded  />     
                                            <h4>Перевозка Грузов</h4>
                                        </Col>

                                    </Row>
                                </Container>

                            </div>

                            <div className="section">
                                <h1>Cargo</h1>
                            </div>

                            <div className="section">
                                <h1>Taxi</h1>
                            </div>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }

}  


