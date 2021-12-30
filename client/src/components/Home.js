import React, {useEffect, useState} from "react";
import CommonNavbar from "./Header/CommonNavbar";
import {NavLink} from "react-router-dom";
import * as api from "../api";

const Home = () =>{

    const [trips,setTrips] = useState()

    useEffect(() => {
        api.fetchTrips().then(res => {
            setTrips(res.data);
        })
    },[])

    if( !trips?.length) return 'Loading...'

    return(
        <div>
            <CommonNavbar title="JOLAUSHY"/>
            <div className="container">
                <div className="search-block">
                    <NavLink to='/trips/search' className="btn align-items-center d-flex"><span className="material-icons">search</span> Найти</NavLink>
                </div>
                <div className="result-block">
                    {/*{trips?.map((trip,idx) => (
                        <div className="custom-card" key={idx}>
                            <div className="d-flex">
                                <NavLink to={`/tripdetails/${trip._id}`} className="flex-auto">
                                    <div className="flex-between text_md text_bold">
                                        <p className="progress-custom">
                                            <span className="from pr-5">{trip.from}</span>
                                            <span className="progress-bar"/>
                                            <span className="progress-bar"/>
                                            <span className="progress-bar"/>
                                            <span className="to pl-5">{trip.to}</span>
                                        </p>
                                        <p className="price px-15">{trip.price} т.</p>
                                    </div>
                                    <div className="flex-between text_xs">
                                        <p className="">
                                            <span className="passenger-name text-grey pr-15">{trip.creatorName}</span>
                                            <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                        </p>
                                        <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                            <span className="seats ml-5">{trip.seats} места</span>
                                        </p>
                                    </div>
                                </NavLink>
                                <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                            </div>
                            <div className="hr"/>
                            <p className="text-center text_xs mb-5">Комментарий</p>
                            <p className="text_sm">{trip.comment}</p>
                        </div>
                    ))}*/}
                </div>
            </div>
        </div>
    )
}
export default Home;