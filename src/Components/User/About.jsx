import React from 'react'


export const About = () => {
    const useStyle = {
        textAlign: "center",
        h1: {
            fontSize: '30px'
        }

    }
    return (
        <div style={useStyle}>
            <h1 style={useStyle.h1}>My name is Abdul Moiz Batch(7).This is my <a target="_blank" rel="noreferrer" href="https://github.com/AbdulMoiz8994/mern_functional">GitHub Repository.</a> </h1>
        </div>
    )
}
