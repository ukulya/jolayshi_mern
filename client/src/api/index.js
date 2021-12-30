import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000'})
API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchTrip = (id) => API.get(`/trips/${id}`);
// export const fetchTrips = (page) => API.get(`/trips?page=${page}`);
export const fetchTrips = () => API.get(`/trips`);
export const fetchTripsBySearch = (searchQuery) => API.get(`/trips/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createTrip = (newTrip) => API.post('/trips/createTrip',newTrip);
export const updateTrip = (id,updatedTrip) => API.patch(`/trips/${id}`,updatedTrip);
export const deleteTrip = (id) => API.delete(`/trips/${id}`);
export const likeTrip = (id) => API.patch(`/trips/${id}/likeTrip`);

export const userSignin = (formData) => API.post('/user/signin',formData);
export const passengerSignup = (formData) => API.post('/passenger/signup',formData);
export const passengerSignIn = (formData) => API.post('/passenger/signin',formData);
export const driverSignup = (formData) => API.post('/driver/signup',formData);
export const driverSignIn = (formData) => API.post('/driver/signin',formData);

export const fetchDriver = (id) => API.get(`/driver/${id}`);
export const fetchPassenger = (id) => API.get(`/passenger/${id}`);
export const createPassenger = (newPassenger) => API.post('/passenger/createPassenger',newPassenger);
export const updatePassenger = (id,updatedPassenger) => API.patch(`/passenger/${id}`,updatedPassenger);
