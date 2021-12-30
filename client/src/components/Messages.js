import React from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img_big from "../img/user-img-big.png";
import user_img_1 from "../img/user-img-lady.png";

const Messages = (props)=>{
    return(
        <div>
            <CommonNavbar title="Сообщения"/>
            <div className="container">
                <div className="search-block">
                    <form className="d-flex">
                        <button className="btn"><span className="material-icons">search</span></button>
                        <input type="text" placeholder="Найти" className="form-control text_sm"/>
                    </form>
                </div>
                <div className="custom-card br-5 message-card">
                    <div className="flex-between-center">
                        <div className="circle user-img-big">
                            <img src={user_img_big} alt=""/>
                        </div>
                        <div className="px-15">
                            <p className="driver_name text_md mb-5 text_reg">Итадори Хамуро</p>
                            <p className="text_extra_grey mb-0 user_description text_light text_sm">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="text_xs">
                            <p className="text_bold mb-10 time">15:15</p>
                            <span className="br-50 messages_count text_semi flex-center mx-auto">1</span>
                        </div>
                    </div>
                </div>
                <div className="custom-card br-5 message-card">
                    <div className="flex-between-center">
                        <div className="circle user-img-big">
                            <img src={user_img_1} alt=""/>
                        </div>
                        <div className="px-15">
                            <p className="driver_name text_md mb-5 text_reg">Химавари Синтару</p>
                            <p className="text_extra_grey mb-0 user_description text_light text_sm">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="text_xs">
                            <p className="text_bold mb-10 time">15:15</p>
                            <span className="br-50 messages_count text_semi flex-center mx-auto d-none">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;