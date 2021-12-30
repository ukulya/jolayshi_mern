import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {useState} from "react";

/*
const Step1FromTo = ({formData,setFormData}) => {
    const [address,setAddress] = useState('')
    const handleChange = e => {

    };

    const handleSelect = address => {
        setAddress(address);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));

    };

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
                        <PlacesAutocomplete
                            value={address}
                            onChange={handleChange}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Search Places ...',
                                            className: 'location-search-input',
                                        })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map((suggestion,id) => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div key={id}
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                        {/!*<GooglePlacesAutocomplete
                            apiKey='AIzaSyCBEz0cMDDfCgtEuBn1OiC2msEcAtvZDeY'
                        />*!/}
                       {/!* <input ref={ref} value={formData.from} onChange={()=>{}} required name="from" id="from" type="text" className="form-control" placeholder="Семей" />*!/}
                    </label>
                    <div className="hr"/>
                </div>
                <div className="form-group">
                    <label htmlFor="to">Куда
                        {/!*<input ref={inputRef} value={formData.to} onChange={()=>{}} required name="to" id="to" type="text" className="form-control" placeholder="Алматы" />*!/}
                    </label>
                </div>
            </div>
        </div>
        <div className="text-center mb-70">
            <button className="text_md btn show_location_btn"><span className="material-icons-outlined mr-5 text_lg">place</span>Использовать мое местоположение</button>
        </div>
    </div>
}
export default Step1FromTo;*/
class Step1FromTo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#000', cursor: 'pointer' }
                                    : { backgroundColor: 'green', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}
export default Step1FromTo;