import React, { useState, useRef, useEffect } from 'react'

export const SearchUser = ({ searchUserFunc, ClearUserFunc, showClearBtn, setAlert }) => {

    let [state, setState] = useState('')

    const onChnageFunc = (e) => {
        setState(e.target.value)
    }
    const onSubmitFunc = (e) => {
        e.preventDefault()
        if (state === '') {
            setAlert('Please enter a valid username', 'light')
        } else {
            searchUserFunc(state)
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
            {showClearBtn && (
                <button className="btn btn-block" onClick={ClearUserFunc}>Clear</button>
            )}
        </div>
    )
}
