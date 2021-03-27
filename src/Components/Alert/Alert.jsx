import React, { useContext, useState } from 'react'
import AlertContext from '../../Context/Alert/AlertContext'



export const Alert = () => {
    // { alert, removeDusbin }
    const alertContext = useContext(AlertContext)
    // console.log(alert)
    const useStyle = {
        padding: '2%',
        cursor: 'pointer'
    }
    const { alert } = alertContext;

    return (
        alert !== null && (

            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-exclamation-circle"></i> {alert.msg}

                <i className="fas fa-trash-alt" style={useStyle}></i>
            </div >
        )

    )
}
