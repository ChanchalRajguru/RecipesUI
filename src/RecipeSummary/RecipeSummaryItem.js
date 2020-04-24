import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './RecipeSummaryItem.css';


const recipeSummaryItem = (props) => {
    return (<div className="mainBox">
        <Card className="newcard" md={4} onClick={props.clickHandler}>
        <Card.Title>{props.name}</Card.Title>
            <Card.Body > Recipe By: {props.author} </Card.Body>
        </Card>
    </div>

    );
}


export default recipeSummaryItem;

