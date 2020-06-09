import React, { Component } from 'react'
import {Accordion, Card} from 'react-bootstrap'

export class Faq extends Component {
    render() {
        const style={
            // backgroundColor:'#000000 ',
            paddingLeft:'3em',
            width:'97%',
            marginBottom:'3em'
        }
        const toggleStyle={
            backgroundColor:'#262831',
            color: 'white',
            cursor: 'pointer',
            // height: '4em',
            border: '#ffffff solid 1.5px'
        }
        return (
            <div style= {style}>
                <h1 style={{textAlign:'center'}}>FAQ's</h1> <br />
                <Accordion defaultActiveKey="0">
                <Card style={toggleStyle}>
                    <Accordion.Toggle style={{borderBottom:'white dotted 0.8px'}} as={Card.Header} eventKey="0">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={toggleStyle}>
                    <Accordion.Toggle style={{borderBottom:'white dotted 0.8px'}} as={Card.Header} eventKey="1">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={toggleStyle}>
                    <Accordion.Toggle style={{borderBottom:'white dotted 0.8px'}} as={Card.Header} eventKey="2">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={toggleStyle}>
                    <Accordion.Toggle style={{borderBottom:'white dotted 0.8px'}} as={Card.Header} eventKey="3">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}

export default Faq
