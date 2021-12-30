import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img from "../img/user-img.png";

const MyTrips = ()=>{
    return(
        <div>
            <CommonNavbar title="Мои поездки"/>
            <div className="container">
                <p className="text-center text_medium_grey text_sm date my-20">25.05.2021</p>
                <div className="custom-card br-25 text_xs p-15">
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
                        <span className="from pr-5">Семей</span>
                        <span className="progress-custom flex-auto overflow-hidden">
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                            <span className="progress-bar"/>
                        </span>
                        <span className="to pl-5">Талдыкорган</span>
                    </p>
                    <div className="row text-semigrey text_semi trip-block">
                        <div className="col-6">
                            <p><span className="material-icons-outlined">picture_in_picture</span><span className="date">12.09.2021  |  15:00</span></p>
                            <p className="text_bold text_blue"><span className="material-icons">attach_money</span><span className="price">50 000 т.</span></p>
                            <p><span className="material-icons">picture_in_picture</span>Стаж: <span className="experience">12</span> лет</p>
                            <p><span className="material-icons">pets</span>Животные: <span className="pets">нет</span></p>
                        </div>
                        <div className="col-6">
                            <p><span className="material-icons">airline_seat_recline_normal</span><span className="seats">3 места</span></p>
                            <p><span className="material-icons">account_circle</span>Я: <span className="user">водитель</span></p>
                            <p><span className="material-icons-outlined">directions_car</span><span className="car">Chevrolet Impala 67</span></p>
                            <p><span className="material-icons">smoking_rooms</span>Курение: <span className="smoke_break">нет</span></p>
                        </div>
                    </div>
                    <div className="dark-card mt-10">
                        <div className="row text-center">
                            <div className="col-4">
                                <span className="material-icons">map</span>
                                <p className="distance text_sm">1 138,2 км</p>
                                <p className="text-light-grey text_light">Расстояние</p>
                            </div>
                            <div className="col-4">
                                <span className="material-icons">watch_later</span>
                                <p className="duration text_sm">18 ч 8 мин.</p>
                                <p className="text-light-grey text_light">Длительность</p>
                            </div>
                            <div className="col-4">
                                <span className="material-icons">attach_money</span>
                                <p className="price text_sm">50 000 т.</p>
                                <p className="text-light-grey text_light">Стоимость</p>
                            </div>
                        </div>
                        <p className="text-left mb-0 d-flex disclaimer"><span className="material-icons-outlined">error_outline</span>
                            <span className="text-light-grey text_light text_xxs">Информация о расстоянии и длительности поездки основаны на данных
                        из сервисов Google</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyTrips;