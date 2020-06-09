import React from 'react'


export default function ListItem(linkaddress, content) {
    const style={
        width: '100%',
        fontSize: '1em',
        listStyle: 'none',
        fontFamily: "'Gotu', sans-serif",
        height: '1.6em'

    }
    return (
        <div style={style}>
            {content}
        </div>
    )
}
