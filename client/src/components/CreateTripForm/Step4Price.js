import React from "react";

const Step4Price = ({handleChange,formData}) => {
    return <div className="tab-body">
        <p className="text_25 text-center mb-80">Укажите сумму поездки</p>
        <div className="custom-card d-flex pb-0">
            <div className="progress-block mr-20">
                <div className="progress-bar bg-white"/>
            </div>
            <div className="form-group flex-auto">
                <label htmlFor="price" className="text_white">Введите сумму поездки
                    <input required value={formData.price} onChange={handleChange} name='price' id="price" type="number" className="form-control" placeholder="Введите сумму поездки"/>
                </label>
            </div>
        </div>
    </div>
}
export default Step4Price;