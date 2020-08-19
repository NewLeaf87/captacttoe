import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

import './boot.css';

import App1 from './App';


ReactDOM.render(
    <Container>
        <Row>
            <Col xs="8"><App1 /></Col>
        </Row>
    
    </Container>


, document.getElementById('root'));
