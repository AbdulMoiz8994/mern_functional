import React from 'react'
import { Link } from 'react-router-dom'

export const GitHubUser = ({ users }) => {
    // console.log(users)
    // const { login, avatar_url, html_url } = users
    const { login, avatar_url } = users

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="User" title={login} className="round-img" />
            <h1 className="userName">{login}</h1>
            <Link to={`/UserIndividual/${login}`} className="btn btn-dark btn-sm my-1">GitHub Profile</Link>
        </div>
    )
}
