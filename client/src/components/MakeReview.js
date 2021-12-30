import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img from "../img/user-img.png";

const MakeReview = (props)=>{
    return(
        <div>
            <CommonNavbar title="Оставить отзыв"/>
            <div className="container mt-20 make-review-block">
                <div className="custom-card">
                    <div className="flex-center">
                        <div className="user-img br-50 circle">
                            <img src={user_img} alt=""/>
                        </div>
                        <div className="px-15">
                            <p className="driver_name text_md mb-5 text_bold">Итадори Хамуро</p>
                            <div className="rating-block flex-center">
                                <span className="rating-sum mr-5 text_blue text_semi text_sm">4,0</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                                <span className="reviews_total text-grey text_sm ml-20">5 отзывов</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-card text-center">
                    <p className="text_sm mb-17">Поставьте оценку профиля</p>
                    <div className="rating-block review-input-block">
                        <span className="material-icons">star_border</span>
                        <span className="material-icons">star_border</span>
                        <span className="material-icons">star_border</span>
                        <span className="material-icons">star_border</span>
                        <span className="material-icons">star_border</span>
                    </div>
                </div>
                <div className="custom-card p-15">
                    <p className="text_sm mb-17 text-center">Поставьте оценку профиля</p>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="wrong_img_car"/>
                        <label className="btn custom-card" htmlFor="wrong_img_car">
                            Не соответствует фото машины
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="no_show"/>
                        <label className="btn custom-card" htmlFor="no_show">
                            Не приехал
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="advance_payment_demand"/>
                        <label className="btn custom-card" htmlFor="advance_payment_demand">
                            Требует предоплату
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="price_inflate"/>
                        <label className="btn custom-card" htmlFor="price_inflate">
                            Завышает цену
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="no_reach"/>
                        <label className="btn custom-card" htmlFor="no_reach">
                            Невозможно связаться с водителем
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="rude"/>
                        <label className="btn custom-card" htmlFor="rude">
                            Нагрубил
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="wrong_img_profile"/>
                        <label className="btn custom-card" htmlFor="wrong_img_profile">
                            Не соответствует фото профиля
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="last_moment_reservation_decline"/>
                        <label className="btn custom-card" htmlFor="last_moment_reservation_decline">
                            Отклонил бронь в последний момент
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="late"/>
                        <label className="btn custom-card" htmlFor="late">
                            Опоздал
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="suspicious_profile"/>
                        <label className="btn custom-card" htmlFor="suspicious_profile">
                            Подозрительный профиль
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="wrong_number"/>
                        <label className="btn custom-card" htmlFor="wrong_number">
                            Другой номер
                        </label>
                    </div>
                    <div className="d-inline-block">
                        <input type="radio" className="btn-check" name="profile_rate" id="other"/>
                        <label className="btn custom-card" htmlFor="other">
                            Другое
                        </label>
                    </div>
                    <textarea name="rating_comment" id="" cols="30" rows="3" placeholder="Опишите проблему" className="custom-card mb-0 form-control"/>

                </div>
                <div className="text-center pt-30 pb-40">
                    <button className="custom_btn continue_btn text_semi send_rating_btn">Отправить отчет <span className="material-icons">chevron_right</span></button>
                </div>
            </div>
        </div>
    )
}

export default MakeReview;