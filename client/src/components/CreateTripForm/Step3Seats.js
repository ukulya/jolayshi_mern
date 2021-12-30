import React from "react";

const Step3Seats = ({handleChange,formData}) => {
    return <div className="tab-body check-block">
        <p className="text_25 text-center mb-80">Забронируйте <br/>количество мест</p>
        <div className="row text-center">
            <div className="col-6 pr-5">
                <div className="form-group">
                    <input onChange={handleChange} value='1' type="radio" className="btn-check" name="seats" id="one-seat" checked/>
                    <label className="btn custom-card text_md text_semi" htmlFor="one-seat">
                        <span className="material-icons">airline_seat_recline_normal</span><br/>
                        1 место
                    </label>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} value='3' type="radio" className="btn-check" name="seats" id="three-seat"/>
                    <label className="btn custom-card text_md text_semi" htmlFor="three-seat">
                        <span className="material-icons">airline_seat_recline_normal</span>
                        <span className="material-icons">airline_seat_recline_normal</span>
                        <span className="material-icons">airline_seat_recline_normal</span><br/>
                        3 места
                    </label>
                </div>
            </div>
            <div className="col-6 pl-5">
                <div className="form-group">
                    <input onChange={handleChange} value='2' type="radio" className="btn-check" name="seats" id="two-seat"/>
                    <label className="btn custom-card text_md text_semi" htmlFor="two-seat">
                        <span className="material-icons">airline_seat_recline_normal</span>
                        <span className="material-icons">airline_seat_recline_normal</span><br/>
                        2 места
                    </label>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} value='4' type="radio" className="btn-check" name="seats" id="four-seat" disabled/>
                    <label className="btn custom-card text_md text_semi" htmlFor="four-seat">
                        <span className="material-icons">airline_seat_recline_normal</span>
                        <span className="material-icons">airline_seat_recline_normal</span>
                        <span className="material-icons">airline_seat_recline_normal</span>
                        <span className="material-icons">airline_seat_recline_normal</span><br/>
                        4 места
                    </label>
                </div>
            </div>

        </div>
        <div className="custom-card d-flex pb-0">
            <div className="progress-block mr-20">
                <div className="progress-bar bg-white"/>
            </div>
            <div className="form-group flex-auto">
                <label htmlFor="seats" className="text_white">Введите число занимаемых мест
                    <input value={formData.seatsOccupied} required name='seatsOccupied' onChange={handleChange} id="seats" type="number" className="form-control" placeholder="Введите число занимаемых мест"/>
                </label>
            </div>
        </div>
    </div>
}
export default Step3Seats;