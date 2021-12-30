import React from "react";
import CommonNavbar from "./Header/CommonNavbar";


const Balance = (props)=>{
    return(
        <div>
            <CommonNavbar title="Баланс"/>
            <div className="container text-center balance-block">
                <div className="custom-card balance-card">
                    <p className="text_sm mt-50 mb-20">Ваш текущий баланс</p>
                    <p className="text_31 mb-45">0,00 т.</p>
                </div>
                <p className="text_md text_reg pt-80 mb-35">Для просмотра списка пассажиров <br/>
                    и возможности создавать свои поездки, <br/>
                    вам необходимо купить один из тарифов </p>
                <div className="custom-card br-16 p-15">
                    <div className="">
                        <span className="material-icons mb-5">watch_later</span>
                        <p className="mb-5 text_light text_xs text-light-grey">Длительность</p>
                        <p className="duration text_sm text_white">12ч 00мин.</p>
                    </div>
                    <div className="hr mb-10"></div>
                    <div className="">
                        <span className="material-icons mb-5">attach_money</span>
                        <p className="mb-5 text_light text_xs text-light-grey">Стоимость</p>
                        <p className="price text_sm text_white">500 т.</p>
                    </div>
                    <div className="hr mb-15"></div>
                    <button className="custom_btn purchase_btn">Купить</button>
                </div>
                <div className="pb-30">
                    <button className="custom_btn continue_btn text_semi top_up_balance_btn">Пополнить баланс <span className="material-icons">chevron_right</span></button>
                </div>
            </div>
        </div>
    )
}

export default Balance;