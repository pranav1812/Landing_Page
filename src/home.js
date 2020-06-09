import React, { Component } from 'react'
import Try from './mtp.png'
import {Button} from 'react-bootstrap'

export class Home extends Component {
    
    render() {
        const style = {
            paddingTop: '10%',            
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundImage: `url(${Try})`,
            backgroundRepeat: 'no-repeat',
            
            backgroundSize: 'auto'
            
            
        }
        const text_style={           
            width: '25em',
            paddingLeft:'3em'
        }
        
        return (
            
            <div className = "home"
            style = { style } >

            <div style={text_style}>
                <h1> hello world </h1>
                <p>Letter wooded direct two men indeed income sister. Impression up admiration<br />
                he by partiality is. Instantly immediate his saw one day perceived. Old blushes <br />
                respect but offices hearted minutes effects. Written parties winding oh as in without<br />
                 on started. Residence gentleman yet preserved few convinced. Coming regret <br />
                 simple longer little am sister on. Do danger in to adieus ladies houses oh <br />
                 eldest. Gone pure late gay ham. They sigh were not find are rent. </p><br /> <br />
                <Button variant="success" style={{width:"16em", height:"3em"}}>Get Started</Button>

            </div>
            
        
            
            </div>
        )
    }
}