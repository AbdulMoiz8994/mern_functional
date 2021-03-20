import React from 'react'

export const GitHubUser = ({ users }) => {
    console.log(users)
    const { login, avatar_url, html_url } = users

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="User" title={login} className="round-img" />
            <h1 className="userName">{login}</h1>
            <a href={html_url} className="btn btn-dark btn-sm my-1">GitHub Profile</a>
        </div>
    )
}
