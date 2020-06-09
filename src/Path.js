import React, { Component } from 'react'
import Img from './path.png'


export class Path extends Component {
    render() {
        const style = {
            paddingTop: '18%',            
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundImage: `url(${Img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'auto'           
        }
        const text_style={           
            width: '30em',
            paddingLeft:'3em',
            paddingBottom:'5em'
        }
        return (
            <div style={style}>
                <div style={text_style}>
                <h1>Roadmap</h1><br />
                <li>Step 1 with one line description</li><br />
                <li>Step 2 with one line description</li><br />
                <li>Step 3 with one line description</li><br />
                <li>Step 4 with one line description</li><br />
                </div>
                
            </div>
        )
    }
}

export default Path
