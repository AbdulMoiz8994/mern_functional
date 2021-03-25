import React from 'react'

export const RepoItem = ({ repos }) => {
    // console.log(repos)
    const { html_url, name } = repos
    return (
        <div className="card">
            <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
        </div>
    )
}
