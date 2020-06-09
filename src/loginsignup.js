import React, { Component } from 'react'
import {Form,Button, Col } from 'react-bootstrap';
import axios from 'axios'


export class Signup extends Component {
    state={
        email: '',
        password: ''
    }

    submit=(e)=>{

        e.preventDefault()
        var bodyFormData = new FormData()
        bodyFormData.append('email', this.state.email)
        bodyFormData.append('password', this.state.password)
        bodyFormData.append('returnSecureToken', true)

        var user={
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }



        }


    setformdata=(e)=>{
        var email= document.querySelector('#email').value
        var password= document.querySelector('#password').value
        this.setState({
            email: email,
            password: password
        })
        console.log(this.state)
    }
    render() {
        const style={
            top:'14%',
            paddingTop:'10%',
            paddingLeft: '22%',
            width: '79%'

        }
        return (
            <div style={style} >
                <Form onSubmit={this.submit} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="email"  >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                onBlur={this.setformdata}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="password" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            onBlur={this.setformdata}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>First name</Form.Label>
                        <Form.Control placeholder="eg. John" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="eg. Smith" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." >
                            <option>Choose...</option>
                            <option>Punjab</option>
                            <option>Haryana</option>
                            <option>Delhi</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Create Account
                    </Button>
                </Form>
            </div>
        )
    }
}
export class Login extends Component {
    state={
        email: '',
        password: ''
    }

    submit=(e)=>{

        e.preventDefault()
        var bodyFormData = new FormData()
        bodyFormData.append('email', this.state.email)
        bodyFormData.append('password', this.state.password)
        bodyFormData.append('returnSecureToken', true)

        var user={
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
    }


    setformdata=(e)=>{
        var email= document.querySelector('#email').value
        var password= document.querySelector('#password').value
        this.setState({
            email: email,
            password: password
        })
        console.log(this.state)
    }

    render() {
        const style={
            paddingTop:'10%',
            paddingLeft: '22%',
            width: '79%'
        }
        return (
            <div>
                <Form style={style}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        onBlur={this.setformdata}
                        />

                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        onBlur={this.setformdata}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
            </div>
        )
    }
}



