import React, { useReducer } from 'react'
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING, } from '../types'


//we will use this  for checking  and also we will use this var below
let GithubClinetId;
let GithubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    GithubClinetId = process.env.React_App_Client_ID
    GithubClientSecret = process.env.React_App_Client_Secret
} else {
    GithubClinetId = process.env.React_App_Client_ID
    GithubClientSecret = process.env.React_App_Client_Secret
}



export const GitHubState = (props) => {
    const initialState = {
        loading: false,
        users: [],
        user: {},
        repo: [],
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //This is serach user
    const searchUserFunc = async (text) => {
        setloading();
        const { data: { items }, } = await axios.get(
            `https://api.github.com/search/users?q=${text}&?client_id=${GithubClinetId}&client_secret=${GithubClientSecret}`
        );
        console.log(items);
        dispatch({
            type: SEARCH_USERS,
            payload: items
        })
    };
    // This is clear fucntion button
    const ClearUserFunc = () => dispatch({ type: CLEAR_USERS });


    const getUser = async (userName) => {
        setloading();
        const { data } = await axios.get(
            `https://api.github.com/users/${userName}?client_id=${GithubClinetId}&client_secret=${GithubClientSecret}`
        );
        console.log(data);
        dispatch({
            type: GET_USER,
            payload: data
        })
    };
    //This is function for signal user data
    const getUserRepo = async (userName) => {
        setloading();
        const { data } = await axios.get(
            `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc?client_id=${GithubClinetId}&client_secret=${GithubClientSecret}`
        );
        console.log(data);
        dispatch({
            type: GET_REPOS,
            payload: data
        })
    };


    //This is set Loading
    const setloading = () => dispatch({ type: SET_LOADING })
    return (
        <div>
            <GithubContext.Provider
                value={{
                    users: state.users,
                    user: state.user,
                    loading: state.loading,
                    repo: state.repo,
                    searchUserFunc,
                    ClearUserFunc,
                    getUser,
                    getUserRepo,
                }}>
                {props.children}
            </GithubContext.Provider>
        </div>
    )
}
