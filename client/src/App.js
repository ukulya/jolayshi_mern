import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home";
import TripDetails from "./components/TripDetails/TripDetails";
import TripDetails1 from "./components/TripDetails/TripDetails1";
import CreateTrip from "./components/CreateTrip";
import MyTrips from "./components/MyTrips";
import Search from "./components/Search";
import Terms from "./components/Terms";
import Profile from "./components/Profile";
import Profile1 from "./components/Profile1";
import Settings from "./components/Settings/Settings";
import PersonalInfo from "./components/Settings/PersonalInfo";
import Notifications from "./components/Settings/Notifications";
import Messages from "./components/Messages";
import Chat from "./components/Chat";
import Passengers from "./components/Passengers";
import MakeReview from "./components/MakeReview";
import Reviews from "./components/Reviews";
import Balance from "./components/Balance";
import Privacy from "./components/Privacy";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {passengerSignIn} from "./actions/authAction";

const isAuth = !!localStorage.getItem('profile')

const App = () => {
    /*const dispatch = useDispatch()
    const {authData} = useSelector(state => state.auth)

    console.log(authData)

    useEffect(() => {
        dispatch(passengerSignIn())
    },[dispatch])*/

    return (
        <div>
        {!isAuth ? <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                </Routes>
        : <Routes>
                    <Route path='/' element={<Navigate to={'/home'}/>}/>
                    <Route path='/login' element={<Navigate to={'/home'}/>}/>
                    <Route path='/signup' element={<Navigate to={'/home'}/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route path='/tripdetails/:id' element={<TripDetails/>}/>
                    <Route path='/tripdetails1' element={<TripDetails1/>}/>
                    <Route path='/createtrip' element={<CreateTrip/>}/>
                    <Route path='/mytrips' element={<MyTrips/>}/>
                    <Route path='/trips/search' element={<Search/>}/>
                    <Route path='/profile/:id' element={<Profile/>}/>
                    <Route path='/profile1' element={<Profile1/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/personal-info' element={<PersonalInfo/>}/>
                    <Route path='/notifications' element={<Notifications/>}/>
                    <Route path='/messages' element={<Messages/>}/>
                    <Route path='/chat' element={<Chat/>}/>
                    <Route path='/passengers' element={<Passengers/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/make-review' element={<MakeReview/>}/>
                    <Route path='/balance' element={<Balance/>}/>
                    <Route path='/terms' element={<Terms/>}/>
                    <Route path='/privacy' element={<Privacy/>}/>
                    <Route path='*' element={<div>Not found</div>}/>
            </Routes>
        }

        </div>
    );
}

export default App;
