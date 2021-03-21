import React from 'react'

export const SearchUser = () => {
    return (
        <div>
            <form method="post" className="form">
                <input type="text" name="text" placeholder="Github User" />
                <input type="submit" value="search" className="btn btn-dark btn-block" />
            </form>
        </div>
    )
}
