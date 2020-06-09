import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export class Contact extends Component {
    render() {
        const style={
            backgroundColor: '#CDA42E'
        }
        const innerStyle={
            width: '100%',
            paddingLeft:'3em',
            paddingTop:'3em',
            marginBottom:'3em',
            borderBottom: 'dotted black'

        }
        const footerStyle={
            fontSize: '1.5em',
            textAlign: 'center',
            paddingBottom: '3em',
            color:'#FFFFFF ',
            fontWeight:'bold'
        }
        
        return (
            <div style={style}>
                <div style={innerStyle}>
                    <h1 >Contact Us</h1><br />
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={{width:'40%'}} type="text" placeholder="Full Name" />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control style={{width:'40%'}} type="email" placeholder="Enter your email" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Query</Form.Label>
                        <Form.Control style={{ width:'40%'}} as="textarea" placeholder="Message or Querry" />
                    </Form.Group>

                    <Button variant="success" type="submit" style={{width:'16%'}}>
                        Submit
                    </Button><br /><br />

                </div>
                <div style={footerStyle}>
                    <a href="https://www.taleoface.com/" style={{color:'#FFFFFF', fontWeight:'bold'}}>Tale of Ace</a><br />
                    <span>+91-7894561230 </span>
                </div>
                
            </div>
        )
    }
}

export default Contact
