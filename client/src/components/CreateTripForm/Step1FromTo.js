import ReactGoogleAutocomplete ,{usePlacesWidget} from "react-google-autocomplete";


const Step1FromTo = ({formData,handleChange,setFormData}) => {
    /*const handleChange = e => {
        [e.target.name] = e.target.value
    }*/

    const { ref } = usePlacesWidget({
        apiKey: 'AIzaSyCBEz0cMDDfCgtEuBn1OiC2msEcAtvZDeY',
        onPlaceSelected: (place) => {
            formData.fromLat = place.geometry.location.lat()
            formData.fromLng = place.geometry.location.lng()
            console.log(formData)
        }
    });
    const { ref: inputRef} = usePlacesWidget({
        apiKey: 'AIzaSyCBEz0cMDDfCgtEuBn1OiC2msEcAtvZDeY',
        onPlaceSelected: (place) => {
            //formData.to = place.address_components[0].short_name
            formData.toLat = place.geometry.location.lat()
            formData.toLng = place.geometry.location.lng()
            console.log(formData)
        }
    });

    return <div className="tab-body">
        <p className="text_25 text-center mb-80">Пункты посадки <br/>и высадки</p>
        <div className="custom-card br-5 d-flex pb-0 mb-0">
            <div className="mr-20">
                <span className="material-icons text_amber text_13">place</span>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <div className="progress-bar sm-bar"/>
                <span className="material-icons text_blue text_13">place</span>
            </div>
            <div className="flex-auto">
                <div className="form-group">
                    <label htmlFor="from">Откуда
                        {/*<ReactGoogleAutocomplete
                            apiKey={'AIzaSyCBEz0cMDDfCgtEuBn1OiC2msEcAtvZDeY'}
                            onPlaceSelected={(place) => console.log(place)}
                        />*/}
                        <input ref={ref} value={formData.from}
                               onChange={handleChange}
                               required name="from" id="from" type="text" className="form-control" placeholder="Семей" />
                    </label>
                    <div className="hr"/>
                </div>
                <div className="form-group">
                    <label htmlFor="to">Куда
                        <input ref={inputRef} value={formData.to}
                               onChange={handleChange}
                               required name="to" id="to" type="text" className="form-control" placeholder="Алматы" />
                    </label>
                </div>
            </div>
        </div>
        <div className="text-center mb-70">
            <button className="text_md btn show_location_btn"><span className="material-icons-outlined mr-5 text_lg">place</span>Использовать мое местоположение</button>
        </div>
    </div>
}
export default Step1FromTo;