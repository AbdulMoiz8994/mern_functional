import React, { useState, useRef, useEffect, useContext } from 'react'
import GithubContext from '../../Context/GithubContext/GithubContext'
import AlertContext from '../../Context/Alert/AlertContext'

export const SearchUser = () => {

    // This i github context 
    const githubContext = useContext(GithubContext)
    //This is alert context we are importing
    const alertContext = useContext(AlertContext)
    let [state, setState] = useState('')
    const onChnageFunc = (e) => {
        setState(e.target.value)
    }
    const onSubmitFunc = (e) => {
        e.preventDefault()
        if (state === '') {
            alertContext.setAlert('Please enter a valid username', 'light')
        } else {
            githubContext.searchUserFunc(state)
            setState('')
        }


    }
    //whenever we render method execute then it wil automatically execute
    const inputRef = useRef(null)
    useEffect(() => inputRef.current.focus(), [])
    return (
        <div>
            <form className="form" onSubmit={onSubmitFunc}>
                <input type="text" name="text" value={state} placeholder="Github User" onChange={onChnageFunc} ref={inputRef} />
                <input type="submit" value="search" className="btn btn-dark btn-block" />

            </form>
            {githubContext.users.length > 0 && (
                <button className="btn btn-block" onClick={githubContext.ClearUserFunc}>Clear</button>
            )}

        </div>
    )
}



