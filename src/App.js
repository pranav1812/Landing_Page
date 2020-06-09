import React, { Component } from 'react'
import { navbar } from './navbars/navbar'
import {Home} from './home'
import {About} from './about'
import {Value} from './value'
import {Faq} from './Faq'
import {Path} from './Path'
import {Contact} from './Contact'


export class App extends Component {
    render() {
        return ( 
            <div> 
                <div style={{position:'fixed', zIndex: 5, width: '100%', height:'8em'}}>
                    { navbar('dark', 'dark') }  
                </div>
                <div style={{paddingTop: '2em', zIndex:4}}>
                    <div>
                        <a name='home'></a>
                        <Home />
                        <br /><br /><br /><br /><br />
                        <a name='about'></a>
                        <About /><br /><br /><br />
                        <a name='values'></a>
                        <Value /><br /><br /><br />
                        <a name='faq'></a>
                        <Faq />
                        <a name='path'></a>
                        <Path /><br />
                        <a name='contact'></a>
                        <Contact />
                    </div>
                    
                </div>
                
             
             
            </div>
            
        )
    }
}