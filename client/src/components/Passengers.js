import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img from "../img/user-img.png";

const Passengers = (props)=>{
    return(
        <div>
            <CommonNavbar title="Пассажиры"/>
            <div className="container mt-20">
                <div className="custom-card text_xs p-15">
                    <div className="flex-center">
                        <div className="circle user-img">
                            <img src={user_img} alt=""/>
                        </div>
                        <div className="px-15 text_reg">
                            <p className="driver_name text_md mb-5">Итадори Хамуро</p>
                            <p className="text_extra_grey mb-0"><span className="user pr-15">Водитель</span> <span className="total_trips">240 поездок</span></p>
                        </div>
                        <button className="circle btn settings_btn ml-auto"><span className="material-icons">more_vert</span></button>
                    </div>
                    <p className="text_sm d-flex mt-20">
                        <span className="from pr-5 text-grey">Шымкент</span>
                        <span className="progress-custom flex-auto overflow-hidden">
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                        </span>
                        <span className="to pl-5 text-grey">Алматы</span>
                    </p>
                    <div className="dark-card mt-10">
                        <div className="row text-center text-light-grey">
                            <div className="col-4">
                                <span className="material-icons mb-5">star_half</span>
                                <div className="rating-block text_sm">
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                </div>
                                <p className="mb-0 text_light">Рейтинг</p>
                            </div>
                            <div className="col-4 p-0">
                                <span className="material-icons mb-5">airline_seat_recline_normal</span>
                                <p className="seats text_sm text_white">2</p>
                                <p className="mb-0 text_light">Кол-во пассажиров</p>
                            </div>
                            <div className="col-4">
                                <span className="material-icons mb-5">attach_money</span>
                                <p className="price text_sm text_white">42 000 т.</p>
                                <p className="mb-0 text_light">Стоимость</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-card text_xs p-15">
                    <div className="flex-center">
                        <div className="circle user-img">
                            <img src={user_img} alt=""/>
                        </div>
                        <div className="px-15 text_reg">
                            <p className="driver_name text_md mb-5">Итадори Хамуро</p>
                            <p className="text_extra_grey mb-0"><span className="user pr-15">Водитель</span> <span className="total_trips">240 поездок</span></p>
                        </div>
                        <button className="circle btn settings_btn ml-auto"><span className="material-icons">more_vert</span></button>
                    </div>
                    <p className="text_sm d-flex mt-20">
                        <span className="from pr-5 text-grey">Шымкент</span>
                        <span className="progress-custom flex-auto overflow-hidden">
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                        </span>
                        <span className="to pl-5 text-grey">Алматы</span>
                    </p>
                    <div className="dark-card mt-10">
                        <div className="row text-center text-light-grey">
                            <div className="col-4">
                                <span className="material-icons mb-5">star_half</span>
                                <div className="rating-block text_sm">
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                </div>
                                <p className="mb-0 text_light">Рейтинг</p>
                            </div>
                            <div className="col-4 p-0">
                                <span className="material-icons mb-5">airline_seat_recline_normal</span>
                                <p className="seats text_sm text_white">2</p>
                                <p className="mb-0 text_light">Кол-во пассажиров</p>
                            </div>
                            <div className="col-4">
                                <span className="material-icons mb-5">attach_money</span>
                                <p className="price text_sm text_white">42 000 т.</p>
                                <p className="mb-0 text_light">Стоимость</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passengers;