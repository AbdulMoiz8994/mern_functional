import React from 'react'
import { Spinner } from '../Spinner/Spinner'
import { GitHubUser } from './GitHubUser'

export const User = ({ fetchData, loading, users }) => {
    // console.log(fetchData, loading)
    // console.log(users)

    //give css
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
