import React, { useContext } from 'react'
import { Spinner } from '../Spinner/Spinner'
import { GitHubUser } from './GitHubUser'
import GithubContext from '../../Context/GithubContext/GithubContext'



export const User = () => {
    const githubContext = useContext(GithubContext)

    // console.log(fetchData, loading)
    // console.log(users)

    //give css
    const { loading, users } = githubContext
    const useStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '0.5rem'
    }

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={useStyles}>
                {users.map((users) => <GitHubUser users={users} key={users.id} />)}
            </div>
        )
    }


}
