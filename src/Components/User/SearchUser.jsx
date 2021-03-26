import React, { useState, useRef, useEffect, useContext } from 'react'
import GithubContext from '../../Context/GithubContext/GithubContext'


export const SearchUser = ({ setAlert }) => {


    const githubContext = useContext(GithubContext)

    let [state, setState] = useState('')
    const onChnageFunc = (e) => {
        setState(e.target.value)
    }
    const onSubmitFunc = (e) => {
        e.preventDefault()
        if (state === '') {
            setAlert('Please enter a valid username', 'light')
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
















// let [show, setShow] = useState(false)
// const luckyName = useRef(null);

// const secondonsubmitFunc = (e) => {
//     e.preventDefault();
//     console.log(luckyName);
//     const name = luckyName.current.value;
//     { name === "" ? alert("plsea type correct") : setShow(true) }
// };

{/* <form onSubmit={secondonsubmitFunc}>
<input type='text' ref={luckyName} />
<button type="submit">Submit</button>
</form> */}

// <h1>{show && `your name is ${luckyName.current.value}`}</h1>