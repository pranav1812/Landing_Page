import React from 'react'
import {Card}from 'react-bootstrap'

export function card(title,imglink, pad, info) {
    console.log(imglink)
    return (
        <div>
            <Card style={{ width: '18rem', position: 'relative', marginLeft:`${pad}` }}>
                <img alt="txt" src={imglink} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p> {info} </p>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
