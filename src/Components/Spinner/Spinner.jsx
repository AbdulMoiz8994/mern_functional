import React from 'react'
import Imagegif from './nobgspinner.gif';
export const Spinner = () => {
    return (
        <div>
            <img src={Imagegif} alt="Spinner Gif" title="Spinner" style={{ width: '500px', height: '500px', margin: '-10% 0% auto 35%' }} />
        </div>
    )
}
