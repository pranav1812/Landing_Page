import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


// bg options:
// dark
// light
// primary,etc

// variant options:
// dark
// light

export function navbar(background, variant) {
    const list_style={
        display: 'flex',
        float:'left',
        listStyle:'none',
        marginTop: '1em',
        marginLeft: '2em',
        paddingLeft: '2em'
    }
    const linkstyle = {       
        color: '#A6ACAF',
        marginLeft: '2em',
        whiteSpace: 'nowrap', 
        fontSize: '1em',        
    }
    return (               
        <div>       
        <Navbar bg = { background } variant = { variant }  style = {{ position: 'fixed', height: '4.5em', width: '100%', display: 'flex'}} expand="lg" >      
        
        <Navbar.Brand href = "#home" > Tale of Ace </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
         
        <Nav className = "mr-auto" >

        
            <Nav.Link href='#home' style={linkstyle}>Home</Nav.Link>
            <Nav.Link href='#about' style={linkstyle}>About Us</Nav.Link>
            <Nav.Link href='#values' style={linkstyle}>Values</Nav.Link>
            <Nav.Link href='#faq' style={linkstyle}>FAQ's</Nav.Link>
            <Nav.Link href='#path' style={linkstyle}>Path</Nav.Link>
            <Nav.Link href='#contact' style={linkstyle}>Contact</Nav.Link>        
        </Nav>

        </Navbar.Collapse>
        
        </Navbar>  
        
        </div > 
        
    )
}