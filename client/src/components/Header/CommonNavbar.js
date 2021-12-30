import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as trip from "../../actions/tripsAction";
import Step1FromTo from "../CreateTripForm/Step1FromTo";
import Step2DateTime from "../CreateTripForm/Step2DateTime";
import Step3Seats from "../CreateTripForm/Step3Seats";
import Step4Price from "../CreateTripForm/Step4Price";
import Step5Settings from "../CreateTripForm/Step5Settings";
import {useDispatch} from "react-redux";

const creatorName = JSON.parse(localStorage.getItem('profile')).result.name
const creatorId = JSON.parse(localStorage.getItem('profile')).result._id
const initialState = {from:'',fromLat:'',fromLng:'',to:'',toLat:'',toLng:'',price:'',date: '',time:'',seats:'',seatsOccupied:'',seatsNumber:'',childSeat:false,luggage:false,smoking:false,animals:false,comment:'',creatorName: creatorName}
const pathname = window.location.pathname
console.log(pathname)

const CommonNavbar =(props)=>{
    const dispatch = useDispatch()
    const [menu,setMenu] = useState(false)
    const [formData,setFormData] = useState(initialState)
    const [step,setStep] = useState(1)
    const [disabled,setDisabled] = useState(true)
    const [modal,setModal] = useState(false)

    const handleMenu = () => {
      setMenu(!menu)
        document.body.classList.toggle('active')
    }
    const createTrip = () => {
        setModal(!modal)
        if (!menu){
            document.body.classList.toggle('active')
        }

        if (step === 6) setStep(1)
    }
    const handleChange = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
        if (step === 1){
            //console.log(e.target.value)
            //console.log(e.target.value.length) // immediately
            //console.log(e.target.name)
            //console.log(formData.from) // empty
            //console.log(typeof formData.from) // string
            //console.log(formData.from.value)//undefined
            //console.log(formData.from.length)//undefined
            if (formData.to !== '' && formData.from !== ''){
                setDisabled(false)
            }
            /*if (e.target.value.length !== 0){
                setDisabled(false)
            }*/
        }
        if (step === 2){
            if (formData.date !== '' && formData.time !== ''){
                setDisabled(false)
            }
        }
        if (step === 3){
            if (formData.seatsOccupied !== ''){
                setDisabled(false)
            }
        }
        if (step === 4){
            if (formData.price !== ''){
                setDisabled(false)
            }
        }
        if (step === 5){
            if (formData.luggage !== '' && formData.animals !== '' && formData.childSeat !== '' && formData.smoking !== ''){
                setDisabled(false)
            }
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(trip.createTrip(formData))
        //console.log(formData)
    }

    const nextStep = () => {
        setStep(step + 1);
        setDisabled(true)
        console.log(formData)
    };

    const prevStep = () => {
        setStep(step - 1);
        setDisabled(false)
    };

    const lastStep = (e) => {
        setStep(step + 1);
        setFormData(initialState)
        handleSubmit(e)
    }

    useEffect(()=>{

    },[formData])

    return(
        <div>
            <div className={`modal ${modal ? 'd-block' : 'd-none'}`}>
                <div className="container">
                    <div className="text-right mt-35 mb-125">
                        <button onClick={createTrip} className="btn modal_btn"><span className="material-icons-outlined">cancel</span></button>
                    </div>
                    <>
                        {step === 1 && <Step1FromTo handleChange={handleChange} formData={formData} setFormData={setFormData}/>}
                        {step === 2 && <Step2DateTime handleChange={handleChange} formData={formData}/>}
                        {step === 3 && <Step3Seats handleChange={handleChange} formData={formData}/>}
                        {step === 4 && <Step4Price handleChange={handleChange} formData={formData}/>}
                        {step === 5 && <Step5Settings handleChange={handleChange} formData={formData}/>}
                        {step === 6 && <div className='text-center'>Поздравляем! <br/> Ваш запрос успешно сформирован </div>}
                        <div className="flex-between">
                            {step !== 1 && step !== 6 && <button id="prevBtn" onClick={prevStep} className="btn return_btn text_semi text_md"><span className="material-icons mr-15">chevron_left</span>Вернуться</button>}
                            {step !== 5 && step !== 6 && <button id="nextBtn" disabled={disabled} onClick={nextStep} className="ml-auto custom_btn continue_btn text_semi common_btn">Продолжить <span className="material-icons">chevron_right</span></button>}
                            {step === 5 && <button type='submit' onClick={lastStep} className="custom_btn continue_btn text_semi common_btn">Создать поездку <span className="material-icons">chevron_right</span></button>}
                        </div>
                    </>
                </div>
            </div>
            {(pathname === '/' || pathname === '/home') && <button onClick={createTrip} className="custom_btn red_btn add_trip_btn text_sm text_reg modal_btn"><span className="material-icons">add_circle_outline</span>Создать поездку</button>}
            <nav className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <button onClick={handleMenu} className="btn"><span className="material-icons">{menu ? 'close' : 'menu'}</span></button>
                        </div>
                        <div className="col-8 text-center">
                            <p className="text_xxl">{props.title}</p>
                        </div>
                        <div className="col-2 pl-10 text-right">
                            <NavLink to='/notifications' className="btn"><span className="material-icons">notification_important</span></NavLink>
                            <NavLink to='/messages' className="btn "><span className="material-icons">forum</span></NavLink>
                        </div>
                    </div>
                </div>
                <div className={`${menu ? '' : 'hidden'} navbar-collapse`}>
                    <div className="bg-black flex-center">
                        <button className="btn circle bg-white"><span className="material-icons text_black">account_balance_wallet</span></button>
                        <div className="px-15">
                            <p className="text_xs text_extra_grey mb-5">Мой баланс</p>
                            <p className="balance text_md mb-0">500 т</p>
                        </div>
                        <button className="btn circle ml-auto bg-dark"><span className="material-icons">more_vert</span></button>
                    </div>
                    <div className="custom-card list-group">
                        <NavLink to='/home' onClick={handleMenu} className="btn list-group-item">
                            <span><span className="material-icons">add_circle_outline</span>Главная</span>
                            <span className="material-icons">chevron_right</span>
                        </NavLink>
                        <button onClick={createTrip} type="button" className="btn list-group-item">
                            <span><span className="material-icons">add_circle_outline</span>Создать поездку</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <NavLink to='/mytrips' onClick={handleMenu} className="btn list-group-item">
                            <span><span className="material-icons">restore</span>Мои поездки</span>
                            <span className="material-icons">chevron_right</span>
                        </NavLink>
                        <NavLink to='/trips/search' onClick={handleMenu} className="btn list-group-item">
                            <span><span className="material-icons">search</span>Поиск</span>
                            <span className="material-icons">chevron_right</span>
                        </NavLink>
                        <NavLink to={`/profile/${creatorId}`} onClick={handleMenu} className="btn list-group-item">
                            <span><span className="material-icons-outlined">account_circle</span>Профиль</span>
                            <span className="material-icons">chevron_right</span>
                        </NavLink>
                        <NavLink to='/settings' onClick={handleMenu} className="btn list-group-item">
                            <span><span className="material-icons-outlined">settings</span>Настройки</span>
                            <span className="material-icons">chevron_right</span>
                        </NavLink>
                    </div>
                    <div className="text-center pt-10 pb-20 text_md">
                        <button className="custom_btn text_reg text_md signup_btn">Стать пассажиром <span className="icon-seat-belt"/></button>
                        <p className="mt-25"><NavLink to="/terms" onClick={handleMenu}>Пользовательское соглашение</NavLink></p>
                        <p><NavLink to="/privacy" onClick={handleMenu}>Политика конфиденциальности</NavLink></p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default CommonNavbar;