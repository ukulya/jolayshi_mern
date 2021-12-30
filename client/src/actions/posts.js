import * as api from '../api';
import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    FETCH_BY_SEARCH,
    START_LOADING,
    FETCH_TRIP, END_LOADING
} from '../constants/actionTypes'

// Action Creators
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchPost(id);

        dispatch({ type: FETCH_TRIP, payload: { post: data } });
    } catch (error) {
        console.log('error coming from actions/getPost.js',error.message)
    }
};

export const getPosts = (page) => async (dispatch) => {
    //const action = {type: 'FETCH_ALL',payload:[]}
    // return action
    //dispatch(action)

    try {
        dispatch({type: START_LOADING})
        const {data:{ data, currentPage, numberOfPages }} = await api.fetchPosts(page);
        dispatch({type: FETCH_ALL,payload: { data, currentPage, numberOfPages }})
        dispatch({type: END_LOADING})
    } catch (e){
        console.log('error coming from actions/getPosts.js',e.message)
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH,payload: {data}})
        //console.log(data)
        dispatch({type: END_LOADING})
    } catch (e){
        console.log('error coming from actions/getPostsBySearch.js',e.message)
    }
}

export const createPost = (post,navigate) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const {data} = await api.createPost(post)
        dispatch({type: CREATE,payload: data})
        navigate(`/posts/${data._id}`)
    } catch (e){
        console.log('error coming from actions/createPost.js',e.message)
    }
}

export const updatePost = (id,post) => async (dispatch) => {

    try {
        const {data} = await api.updatePost(id,post)
        dispatch({type: UPDATE,payload: data})
    } catch (e){
        // console.log(e.message)
        console.log('error coming from actions/updatePost.js',e)
    }
}

export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id)
        dispatch({type: DELETE,payload: id})
    } catch (e){
        // console.log(e.message)
        console.log('error coming from actions/deletePost.js',e)
    }
}

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const {data} = await api.likePost(id,user?.token)
        dispatch({type: LIKE,payload: data})
    } catch (e){
        console.log('error coming from actions/likePost.js',e)
    }
}