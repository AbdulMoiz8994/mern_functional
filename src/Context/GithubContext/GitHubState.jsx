import React, { useReducer } from 'react'
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING, } from '../types'


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
            `https://api.github.com/search/users?q=${text}&?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
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
            `https://api.github.com/users/${userName}?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
        );
        console.log(data);
        dispatch({
            type: GET_USER,
            payload: data
        })
    };
    const getUserRepo = async (userName) => {
        setloading();
        const { data } = await axios.get(
            `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
        );
        console.log(data);
        dispatch({
            type: GET_REPOS,
            payload: data
        })
    };


    //This Function is for clar the data


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
