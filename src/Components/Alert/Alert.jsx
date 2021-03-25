import React from 'react'

export const Alert = ({ alert, removeDusbin }) => {
    // console.log(alert)
    const useStyle = {
        padding: '2%',
        cursor: 'pointer'
    }
    return (
        alert !== null && (

            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-exclamation-circle"></i> {alert.msg}

                <i className="fas fa-trash-alt" style={useStyle} onClick={removeDusbin}></i>
            </div >
        )

    )
}
