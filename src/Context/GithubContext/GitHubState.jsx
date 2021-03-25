import React, { useReducer } from 'react'
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SEARCH_USERS, GET_USER, GET_REPO, CLEAR_USERS, SET_LOADING, } from '../types'


export const GitHubState = (props) => {
    const initialState = {
        loading: false,
        users: [],
        user: {},
        repo: [],
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)
    return (
        <div>
            <GithubContext.Provider value={{ users: state.users, user: state.user, loading: state.loading, repo: state.repo }}>
                {props.children}
            </GithubContext.Provider>
        </div>
    )
}
