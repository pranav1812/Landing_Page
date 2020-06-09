import React, { Component } from 'react'
import {card} from './micro_components/card'
import Img1 from './mentorship_plant.png'
export class Value extends Component {
    
    render() {
        const style={
            paddingLeft:'3em',
            width:'100%'
        }
        const cardGroup={
            display: 'flex',
            
            flexDirection: 'horizontal',
            paddingBottom:'3em'
        }
        return (
            <div style={style}>
                <h1 style={{textAlign:'center'}}>Our Values</h1><br />
                <div style={cardGroup}>
                    {card('Value1',`${Img1}`,'1em', 'some info will be added. Its random')}
                    {card('Value2',`${Img1}`,'1em', 'some info will be added. Its random')}
                    {card('Value3',`${Img1}`,'1em', 'some info will be added. Its random')}
                    {card('Value4',`${Img1}`,'1em', 'some info will be added. Its random')}
                </div>
                
            </div>
        )
    }
}

export default Value
