import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img_lg from "../img/user-img-lg.png"

const Profile1 = (props)=>{
    return(
        <div>
            <CommonNavbar title="Профиль пользователя"/>
            <div className="container mt-20">
                <div className="profile1-block">
                    <div className="user-img-lg br-50 mx-auto">
                        <img src={user_img_lg} alt=""/>
                    </div>
                    <p className="text-center user_name text_xxl text_bold mt-20 mb-5">Ерлан</p>
                    <p className="text-center user text_extra_grey text_reg text_md mb-25">Водитель</p>
                    <div className="custom-card py-10 flex-between-center">
                        <div className="">
                            <div className="rating-block flex-center">
                                <span className="rating-sum mr-5 text_blue text_semi">4,0</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                            </div>
                            <span className="reviews_total text-grey text_sm">5 отзывов</span>
                        </div>
                        <span className="material-icons">chevron_right</span>
                    </div>
                    <div className="custom-card text_sm">
                        <p className="text-center mb-20">Подтверждения</p>
                        <p className="text-grey"><span className="material-icons v-middle">done</span>Номер подтвержден</p>
                        <div className="hr"></div>
                        <p className="mb-0 text-grey"><span className="material-icons v-middle">done</span>Почта подтверждена</p>
                    </div>
                    <div className="custom-card text_sm">
                        <p className="text-center mb-20">Дополнительные данные</p>
                        <p className="mb-5 text-grey text_xs">Автомобиль</p>
                        <p className="car">Chevrolet Impala 67</p>
                        <div className="hr"></div>
                        <p className="mb-5 text-grey text_xs">На сайте</p>
                        <p className="time_on_web">Больше года</p>
                        <div className="hr"></div>
                        <p className="mb-5 text-grey text_xs">Стаж вождения</p>
                        <p className="experience">12 лет</p>
                        <div className="hr"></div>
                        <p className="mb-5 text-grey text_xs">Количество поездок</p>
                        <p className="trip_total">240</p>
                    </div>
                </div>
                <div className="flex-center mb-30 justify-content-center">
                    <button className="btn report_btn text_red text_semi text_md mr-30"><span className="material-icons mr-15">report</span>ПОЖАЛОВАТЬСЯ</button>
                    <button className="custom_btn red_btn write_btn text_reg text_md">Написать<span className="material-icons ml-15 text_lg">forum</span></button>
                </div>
            </div>
        </div>
    )
}

export default Profile1;