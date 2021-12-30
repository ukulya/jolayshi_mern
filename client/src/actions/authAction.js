import * as api from '../api';
import {AUTH} from '../constants/actionTypes'

export const userSignin = (formData, navigate) => async (dispatch) => {

    try {
        const {data} = await api.userSignin(formData);
        dispatch({type: AUTH,data})
        navigate('/home')
    } catch (e){
        console.log('error coming from actions/authAction.js/userSignin',e.message)
    }
}

export const passengerSignup = (formData,navigate) => async (dispatch) => {

    try {
        const {data} = await api.passengerSignup(formData);
        dispatch({type: AUTH,data})
        navigate('/login')
    } catch (e){
        console.log('error coming from actions/authAction.js/passengerSignup',e.message)
    }
}
export const passengerSignIn = (formData, navigate) => async (dispatch) => {

    try {
        const {data} = await api.passengerSignIn(formData);
        dispatch({type: AUTH,data})
        navigate('/home')
    } catch (e){
        console.log('error coming from actions/authAction.js/passengerSignIn',e.message)
    }
}
export const driverSignup = (formData,navigate) => async (dispatch) => {

    try {
        const {data} = await api.driverSignup(formData);
        dispatch({type: AUTH,data})
        navigate('/login')
    } catch (e){
        console.log('error coming from actions/authAction.js/driverSignup',e.message)
    }
}
export const driverSignIn = (formData, navigate) => async (dispatch) => {

    try {
        const {data} = await api.driverSignIn(formData);
        dispatch({type: AUTH,data})
        navigate('/home')
    } catch (e){
        console.log('error coming from actions/authAction.js/driverSignIn',e.message)
    }
}