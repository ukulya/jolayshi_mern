import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img_big from "../img/user-img-big.png";
import user_img_xs from "../img/user-img-xs.png";

const Reviews = (props)=>{
    return(
        <div>
            <CommonNavbar title="Отзывы"/>
            <div className="container mt-20 review-block">
                <div className="custom-card">
                    <div className="flex-center">
                        <div className="user-img-big br-50">
                            <img src={user_img_big} alt=""/>
                        </div>
                        <div className="px-15">
                            <p className="driver_name text_17 mb-5 text_bold">Итадори Хамуро</p>
                            <div className="rating-block flex-center">
                                <span className="rating-sum mr-5 text_blue text_semi">4,0</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                                <span className="reviews_total text-grey text_sm ml-20">5 отзывов</span>
                            </div>
                        </div>
                    </div>
                    <div className="hr my-10"></div>
                    <div className="row text_xs text_reg text-grey">
                        <div className="col-4">
                            <div className="rating-block">
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                            </div>
                            <div className="rating-block">
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                            </div>
                            <div className="rating-block">
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                                <span className="material-icons">star_border</span>
                            </div>
                            <div className="rating-block">
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                                <span className="material-icons">star_border</span>
                                <span className="material-icons">star_border</span>
                            </div>
                            <div className="rating-block">
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_border</span>
                                <span className="material-icons">star_border</span>
                                <span className="material-icons">star_border</span>
                                <span className="material-icons">star_border</span>
                            </div>
                        </div>
                        <div className="col-4 text-right">
                            <p className="mb-5">75%</p>
                            <p className="mb-5">0%</p>
                            <p className="mb-5">25%</p>
                            <p className="mb-5">0%</p>
                            <p className="mb-5">0%</p>
                        </div>
                        <div className="col-4 text-right">
                            <p className="mb-5">3 отзыва</p>
                            <p className="mb-5">0 отзывов</p>
                            <p className="mb-5">2 отзыва</p>
                            <p className="mb-5">0 отзывов</p>
                            <p className="mb-5">0 отзывов</p>
                        </div>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="d-flex text_xs">
                        <div className="user-img-xs">
                            <img src={user_img_xs} alt=""/>
                        </div>
                        <div className="pl-15">
                            <p className="text_md mb-10">Нишиноя Адзуки</p>
                            <p className="text_reg text-grey">Пассажир</p>
                        </div>
                        <p className="text_reg text-grey ml-auto">06.06.21   |   18:48</p>
                    </div>
                    <div className="hr"></div>
                    <p className="text_sm my-15">Быстро, уверенно, весело</p>
                    <div className="hr mb-15"></div>
                    <div className="rating-block text-center">
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="d-flex text_xs">
                        <div className="user-img-xs">
                            <img src={user_img_xs} alt=""/>
                        </div>
                        <div className="pl-15">
                            <p className="text_md mb-10">Нишиноя Адзуки</p>
                            <p className="text_reg text-grey">Пассажир</p>
                        </div>
                        <p className="text_reg text-grey ml-auto">06.06.21   |   18:48</p>
                    </div>
                    <div className="hr"></div>
                    <p className="text_sm my-15">Быстро, уверенно, весело</p>
                    <div className="hr mb-15"></div>
                    <div className="rating-block text-center">
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;