import React from 'react'
import { Link } from 'react-router-dom'

const useStyle = {
    paddingRight: '3%',
}


export const Pages = () => {
    return (
        <div>
            <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <li style={useStyle}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}
