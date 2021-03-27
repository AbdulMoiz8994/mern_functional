import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types'


export const AlertState = (props) => {

    const initialState = {
        alert: null
    }      // we have one property o we are assignining null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // This is a function of alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        })
        // console.log(msg, type);
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT
            })
        }, 3000);
    };


    return (

        <AlertContext.Provider value={{
            alert: state,
            setAlert,
        }}>
            {props.children}
        </AlertContext.Provider>

    )
}