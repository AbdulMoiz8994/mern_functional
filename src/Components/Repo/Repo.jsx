import React from 'react'
import { RepoItem } from './RepoItem'


export const Repo = ({ repo }) => {
    // console.log(repo)
    return (
        <div>
            {repo.map((repos) => <RepoItem repos={repos} key={repos.id} />)}
        </div>
    )
}
