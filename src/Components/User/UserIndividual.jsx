import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const UserIndividual = (props) => {
    useEffect(() => {
        props.getUser(props.match.params.login)
    }, [])


    const { name, company, avatar_url, html_url, location, bio, blog, login, followers, following } = props.users
    const { loading } = props
    return (
        <div>
            <Link to="/" className="btn btn-light">Back To Home</Link>
            <h1>{name}</h1>
        </div>
    )
}
