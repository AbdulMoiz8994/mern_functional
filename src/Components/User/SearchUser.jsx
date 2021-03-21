import React, { useState } from 'react'

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

    return (
        <div>
            <form className="form" onSubmit={onSubmitFunc}>
                <input type="text" name="text" value={state} placeholder="Github User" onChange={onChnageFunc} />
                <input type="submit" value="search" className="btn btn-dark btn-block" />
            </form>
            {showClearBtn && (
                <button className="btn btn-block" onClick={ClearUserFunc}>Clear</button>
            )}
        </div>
    )
}
