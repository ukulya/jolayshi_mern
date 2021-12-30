import React, {useState} from "react";
import logo from '../img/logo-blue.svg';
import gl from '../img/google.svg';
import fb from '../img/fb.svg';
import ig from '../img/ig.svg';
import {NavLink} from "react-router-dom";
import Navbar from "./Header/Navbar";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {driverSignIn, passengerSignIn} from "../actions/authAction";
import {GoogleLogin} from "react-google-login";
import FacebookLogin from '@greatsumini/react-facebook-login';
import { InstagramLogin } from '@amraneze/react-instagram-login';
import {AUTH} from "../constants/actionTypes";

const initialState = {email: '',password:''}

const Login = () => {
    const [formData,setFormData] = useState(initialState)
    const [role,setRole] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (role){
            dispatch(driverSignIn(formData,navigate))
        } else {
            dispatch(passengerSignIn(formData,navigate))
        }

    }
    const googleSuccess = async (res) =>{
        //console.log(res)
        const result = res?.profileObj
        const token = res?.tokenId;

        try {
            dispatch({type:AUTH,data:{result,token}});
            navigate('/home')
        }catch (e){
            console.log('error coming from google sign in',e)
        }
    }
    const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

    const handleSwitch = () => {
        setRole(!role)
    }
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');
    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    const responseInstagram = (response) => {
        console.log(response);
    };

    return(
        <div>
            <Navbar img={logo}/>
            <div className="container">
                <p className="text_xxl text-center mb-30 mt-30">Авторизация</p>
                <div className="custom-card pb-20 br-16">
                    <p className="text_sm text-center mt-5 mb-20">Ваша роль в поездке</p>
                    <div className="row align-items-center text-center">
                        <div className="col-5">
                            <button className={`btn ${role && 'active'} btn-toggle text-darkgrey text_reg`} onClick={handleSwitch}>
                                <span className="icon-wheel d-block"/>
                                Я водитель
                            </button>
                        </div>
                        <div className="col-2">
                            <span className="material-icons">swap_horiz</span>
                        </div>
                        <div className="col-5">
                            <button className={`btn ${!role && 'active'} btn-toggle text-darkgrey text_reg`} onClick={handleSwitch}>
                                <span className="icon-seat-belt d-block"/>
                                Я пассажир
                            </button>
                        </div>
                    </div>
                </div>
                    <form onSubmit={handleSubmit}>
                        <div className="custom-card d-flex">
                        <div className="progress-block mr-20">
                            <div className="progress-bar active"/>
                            <div className="progress-bar"/>
                            <div className="progress-bar"/>
                            <div className="progress-bar"/>
                            <div className="progress-bar"/>
                            <div className="progress-bar"/>
                            <div className="progress-bar"/>
                        </div>
                        <div className="">
                        <div className="form-group">
                            <label htmlFor="email">{/*Номер телефона или*/} Почта
                            <input required={true} value={formData.email} name="email" onChange={handleChange} id="email" type="text" className="form-control" placeholder="Введите номер телефона или почту"/>
                            </label>
                            <div className="hr"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль
                            <input required={true} value={formData.password} name="password" onChange={handleChange} id="password" type="password" className="form-control" placeholder="Введите пароль"/>
                            </label>
                        </div>
                        </div>
                        </div>
                        <p className="text-center mt-10 mb-30"><button className="text_sm text_blue btn">Забыли пароль?</button></p>
                        <p className="text-center">
                            <NavLink to="/signup" className="custom_btn btn-md justify-content-center mr-20">Регистрация</NavLink>
                            <button className="custom_btn btn-md">Войти<span className="material-icons">chevron_right</span></button>
                        </p>
                        <p className="flex-center mt-40"><span className="hr mb-0"/><span className="px-5 text-grey text_sm">Войти через</span><span className="hr mb-0"/></p>
                        <ul className="list-inline">
                            <li>
                                <GoogleLogin clientId="205567178028-e9jmoaladmbadpv9056fh749knrt35bf.apps.googleusercontent.com" render={renderProps => (
                                    <button className='plain-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={gl} alt="google"/>google</button>)}
                                             onSuccess={googleSuccess}
                                             onFailure={googleError}
                                             cookiePolicy="single_host_origin"/>
                            </li>
                            <li>
                                <FacebookLogin
                                    appId="201249138794169"
                                    onSuccess={(response) => {
                                        console.log('Login Success!');
                                        console.log('id: ', response.id);
                                    }}
                                    onFail={(error) => {
                                        console.log('Login Failed!');
                                        console.log('status: ', error.status);
                                    }}
                                    onProfileSuccess={(response) => {
                                        console.log('Get Profile Success!');
                                        console.log('name: ', response.name);
                                    }}
                                    render={({ onClick }) => (
                                        <button onClick={onClick} className='plain-btn'>
                                            <img src={fb} alt=""/>
                                            facebook
                                        </button>
                                    )}
                                />
                                {/*{!login &&
                                <FacebookLogin
                                    appId="201249138794169"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    scope="public_profile,user_friends"
                                    callback={responseFacebook}
                                    icon="fa-facebook" />
                                }
                                {login &&
                                <img src={picture} alt={'img'} />
                                }
                                {login &&
                                <p>{data.name} <br/>
                                    {data.email}</p>
                                }*/}
                            </li>
                            <li>
                                <InstagramLogin
                                    clientId="CLIENT_ID"
                                    onSuccess={responseInstagram}
                                    onFailure={responseInstagram}
                                    render={({ onClick }) => (
                                        <button onClick={onClick} className='plain-btn'>
                                            <img src={ig} alt=""/>instagram
                                        </button>
                                    )}
                                />
                            </li>
                        </ul>
                    </form>
            </div>
        </div>
    )
}
export default Login;