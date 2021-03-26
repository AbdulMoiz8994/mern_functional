import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Repo } from '../Repo/Repo'
import GithubContext from '../../Context/GithubContext/GithubContext'


export const UserIndividual = ({ repo, getUserRepo, match }) => {
    const githubContext = useContext(GithubContext)
    const { getUser, user, loading } = githubContext;

    useEffect(() => {
        getUser(match.params.login)
        getUserRepo(match.params.login)
        // eslint-disable-next-line
    }, [])


    const { name, company, avatar_url, html_url, location, bio, blog, login, followers, following, hireable, public_repo, public_gists } = user
    // const {  } = props
    // console.log(repo)
    if (loading) {
        return <Spinner />
    }
    const useStyle = {
        fontSize: '150%',
        marginBottom: '-0.8rem',
        paddingLeft: '2%'
    }
    return (
        <div>
            <Link to="/" className="btn btn-light">Back To Home</Link>
            <span style={useStyle}>Hireable {hireable ? <FaCheckCircle className="fas fa-check text-success" /> : <FaTimesCircle className="fas fa-times-circle text-danger" />}</span>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt={name} title={name} className="round-img" style={{ width: '40%' }} />
                    <h1>{name}</h1>
                    {location && (
                        <h3>Location:{location}</h3>
                    )}
                </div>
                <div>
                    {bio && (
                        <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>
                    )}
                    <a href={html_url} className="btn btn-dark my-1" style={{ marginTop: '4%' }}>GitHub Profile</a>
                    <ul>
                        <li>
                            {login && (
                                <p>Username: {login}</p>
                            )}
                        </li>
                        <li>
                            {company && (
                                <p>Compnay Name: {company}</p>
                            )}
                        </li>
                        {/* basically in github api this is blog but this is webiste or user */}
                        <li>{blog &&
                            <p>Webiste: {blog}</p>
                        }</li>

                    </ul>
                </div>
            </div>
            {/* This is the end of our first card */}

            {/* This is the start of our second card */}
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repo: {public_repo}</div>
                <div className="badge badge-dark">Public Jists: {public_gists}</div>

            </div>
            <Repo repo={repo} />
        </div>
    )
}
