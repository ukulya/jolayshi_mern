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
export const getTrip = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchTrip(id);

        dispatch({ type: FETCH_TRIP, payload: { trip: data } });
    } catch (error) {
        console.log('error coming from actions/getTrip.js',error.message)
    }
};

export const getTrips = () => async (dispatch) => {

    try {
        const { data } = await api.fetchTrips();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (e){
        console.log('error coming from actions/getTrips.js',e.message)
    }
}

export const getTripsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING})
        const {data: {data}} = await api.fetchTripsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH,payload: {data}})
        //console.log(data)
        dispatch({type: END_LOADING})
    } catch (e){
        console.log('error coming from actions/getTripsBySearch.js',e.message)
    }
}

// export const createTrip = (trip,navigate) => async (dispatch) => {
export const createTrip = (trip) => async (dispatch) => {

    try {
        const {data} = await api.createTrip(trip)
        dispatch({type: CREATE,payload: data})
        // navigate(`/trips/${data._id}`)
    } catch (e){
        console.log('error coming from actions/createTrip.js',e.message)
    }
}

export const updateTrip = (id,trip) => async (dispatch) => {

    try {
        const {data} = await api.updateTrip(id,trip)
        dispatch({type: UPDATE,payload: data})
    } catch (e){
        // console.log(e.message)
        console.log('error coming from actions/updateTrip.js',e)
    }
}

export const deleteTrip = (id) => async (dispatch) => {

    try {
        await api.deleteTrip(id)
        dispatch({type: DELETE,payload: id})
    } catch (e){
        // console.log(e.message)
        console.log('error coming from actions/deleteTrip.js',e)
    }
}

export const likeTrip = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    try {
        const {data} = await api.likeTrip(id,user?.token)
        dispatch({type: LIKE,payload: data})
    } catch (e){
        console.log('error coming from actions/likeTrip.js',e)
    }
}