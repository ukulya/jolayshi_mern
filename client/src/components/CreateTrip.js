import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import car from '../img/car_arrow.png';
import user_img from "../img/user-img.png";
import InviteModal from "./Modal/InviteModal";

const CreateTrip = (props)=>{
    return(
        <div>
            <InviteModal/>
            <CommonNavbar title=""/>Создать поездку
            <div className="container create-trip-block overflow-hidden">
                <img src={car} alt=""/>
                <div className="custom-card br-35 text_xs mb-0 p-15">
                    <div className="flex-center">
                        <div className="circle user-img">
                            <img src={user_img} alt=""/>
                        </div>
                        <div className="px-15 text_reg">
                            <p className="driver_name text_md mb-5">Серкенбаев Ерлан</p>
                            <p className="text_extra_grey mb-0"><span className="user">Водитель</span></p>
                        </div>
                        <button className="circle btn settings_btn ml-auto"><span className="material-icons">more_vert</span></button>
                    </div>
                    <p className="text_sm d-flex mt-20">
                        <span className="from pr-5">Семей</span>
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
                    <div className="dark-card">
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
                    <div className="mt-20 button-group">
                        <button className="custom_btn red_btn_outline br-12 remove_trip_btn text_md">Удалить<span className="material-icons-outlined">cancel</span></button>
                        <button className="custom_btn red_btn br-12 create_trip_btn text_md modal_btn">Создать поездку<span className="material-icons-outlined">add_circle_outline</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateTrip;