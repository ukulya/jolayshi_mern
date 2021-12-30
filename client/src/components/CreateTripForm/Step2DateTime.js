import React from "react";

const Step2DateTime = ({handleChange,formData}) => {
    return <div className="tab-body">
        <p className="text_25 text-center mb-80">Дата и время <br/>поездки</p>
        <div className="row">
            <div className="col-6 pr-5">
                <p className="text_md text-center">Календарь</p>
                <input value={formData.date} type="date" name='date' onChange={handleChange} className='form-control' required/>
            </div>
            <div className="col-6 pl-5">
                <p className="text_md text-center">Время</p>
                <input value={formData.time} type="time" name='time' onChange={handleChange} className='form-control' required/>
            </div>
        </div>
    </div>
}
export default Step2DateTime;