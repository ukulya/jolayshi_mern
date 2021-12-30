import * as api from '../api';
import {CREATE_PASSENGER, GET_PASSENGER, UPDATE_PASSENGER} from "../constants/actionTypes";

export const getPassenger = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPassenger(id);
        dispatch({ type: GET_PASSENGER, payload: { passenger: data } });
    } catch (error) {
        console.log('error coming from actions/getPassenger.js',error.message)
    }
};

export const createPassenger = (passenger) => async (dispatch) => {

    try {
        const {data} = await api.createPassenger(passenger)
        dispatch({type: CREATE_PASSENGER,payload: data})
        // navigate(`/trips/${data._id}`)
    } catch (e){
        console.log('error coming from actions/createTrip.js',e.message)
    }
}
export const updatePassenger = (id,passenger) => async (dispatch) => {

    try {
        const {data} = await api.updatePassenger(id,passenger)
        dispatch({type: UPDATE_PASSENGER,payload: data})
    } catch (e){
        // console.log(e.message)
        console.log('error coming from actions/updateTrip.js',e.message)
    }
}