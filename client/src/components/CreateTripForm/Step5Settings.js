import React from "react";

const Step5Settings = ({handleChange,formData}) => {
    return <div className="tab-body">
        <p className="text_25 text-center mb-80">Укажите дополнительные настройки</p>
        <div className="row">
            <div className="col-6 pr-5">
                <select className="form-select" onChange={handleChange} name='seatsNumber' value={formData.seatsNumber} required>
                    <option value="1">Кол-во мест</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select className="form-select" onChange={handleChange} name='luggage' value={formData.luggage} required>
                    <option value={true}>Перевозка багажа</option>
                    <option value={true}>Да</option>
                    <option value={false}>Нет</option>
                </select>
                <select className="form-select" onChange={handleChange} name='animals' value={formData.animals} required>
                    <option value={false}>Перевозка животных</option>
                    <option value={true}>Да</option>
                    <option value={false}>Нет</option>
                </select>
            </div>
            <div className="col-6 pl-5">
                <select className="form-select" onChange={handleChange} name='childSeat' value={formData.childSeat} required>
                    <option value={false}>Детское кресло</option>
                    <option value={true}>Да</option>
                    <option value={false}>Нет</option>
                </select>
                <select className="form-select" onChange={handleChange} name='smoking' value={formData.smoking} required>
                    <option value={false}>Курение в салоне</option>
                    <option value={true}>Да</option>
                    <option value={false}>Нет</option>
                </select>
            </div>
        </div>
        <textarea onChange={handleChange} value={formData.comment} required name='comment' className="form-control custom-card comment" rows="3" placeholder="Напишите комментарии к поездке"/>
    </div>
}
export default Step5Settings;