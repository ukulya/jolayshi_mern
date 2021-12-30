import React, {useEffect, useState} from "react";
import CommonNavbar from "./Header/CommonNavbar";
import user_img from "../img/user-img.png";
import * as api from "../api";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

const Profile = () =>{
    const {id} = useParams()
    const [user,setUser] = useState()

    useEffect(() => {
        api.fetchPassenger(id).then(res => {
            setUser(res.data);
        })
    },[id])

    if (!user) return 'Loading...'

    return(
        <div>
            <CommonNavbar title="Профиль"/>
            <div className="container mt-20">
                <div className="custom-card flex-center br-11 px-15">
                    <div className="circle user-img">
                        {user?.userImg
                            ? <img src={user?.userImg} alt={user?.name}/>
                            : <img src={user_img} alt={user?.name}/>}
                    </div>
                    <div className="px-15">
                        <p className="driver_name text_md text_bold mb-0">{user.name}</p>
                        <p className="text_xs text_extra_grey text_red">Пассажир</p>
                    </div>
                    <NavLink to='/settings' className="circle btn settings_btn ml-auto"><span className="material-icons-outlined">settings</span></NavLink>
                </div>
                <div className="custom-card br-5 py-0 px-15">
                    <NavLink to='/reviews' className="btn list-group-item">Отзывы<span className="material-icons">chevron_right</span></NavLink>
                    <NavLink to='/notifications' className="btn list-group-item">
                        <span>Уведомления <span className="notifications_total text_blue ml-5">+1</span></span>
                        <span className="material-icons">chevron_right</span>
                    </NavLink>
                    <NavLink to='/messages' className="btn list-group-item">
                        <span>Сообщения <span className="messages_total text_blue ml-5">+1</span></span>
                        <span className="material-icons">chevron_right</span>
                    </NavLink>
                    <NavLink to='/balance' className="btn list-group-item">
                        Мой баланс
                        <span className="material-icons">chevron_right</span>
                    </NavLink>
                    <button type="button" className="btn list-group-item">
                        Банковская карта
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
                <div className="custom-card br-5 py-0 px-15">
                    <button type="button" className="btn list-group-item">О проекте<span className="material-icons">chevron_right</span></button>
                    <button type="button" className="btn list-group-item">
                        Блог
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Вопросы и ответы
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Безопасность
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Обратная связь
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <NavLink to='/terms' className="btn list-group-item">
                        Пользовательское соглашение
                        <span className="material-icons">chevron_right</span>
                    </NavLink>
                    <NavLink to='/privacy' className="btn list-group-item">
                        Политика конфиденциальности
                        <span className="material-icons">chevron_right</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Profile;