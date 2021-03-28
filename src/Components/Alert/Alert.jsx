import React, { useContext } from 'react'
import AlertContext from '../../Context/Alert/AlertContext'



export const Alert = () => {
    // { alert, removeDusbin }
    const alertContext = useContext(AlertContext)
    // console.log(alert)
    const useStyle = {
        paddingLeft: '4%',
        cursor: 'pointer'

    }
    const { alert, clearAlert } = alertContext;

    return (
        alert !== null && (

            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-exclamation-circle"></i> {alert.msg}

                <i onClick={clearAlert} className="fas fa-trash-alt" style={useStyle}></i>
            </div >
        )

    )
}
