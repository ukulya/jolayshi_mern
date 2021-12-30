import {useState} from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
//import useOnclickOutside from "react-cool-onclickoutside";

const Step1FromTo = ({formData,setFormData}) => {
    const {
        ready,
        value,
        valueTo,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });
    /*const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });*/

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };
    const handleInputTo = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({ address: description })
                    .then((results) => getLatLng(results[0]))
                    .then(({ lat, lng }) => {
                        console.log("📍 Coordinates: ", { lat, lng });
                    })
                    .catch((error) => {
                        console.log("😱 Error: ", error);
                    });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });
    const handleSelectTo =
        ({ description }) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({ address: description })
                    .then((results) => getLatLng(results[0]))
                    .then(({ lat, lng }) => {
                        console.log("📍 Coordinates: ", { lat, lng });
                    })
                    .catch((error) => {
                        console.log("😱 Error: ", error);
                    });
            };

    const renderSuggestionsTo = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelectTo(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
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
                        <div>
                            <input
                                value={value}
                                onChange={handleInput}
                                disabled={!ready}
                                placeholder="Where are you going?"
                            />
                            {/* We can use the "status" to decide whether we should display the dropdown or not */}
                            {status === "OK" && <ul>{renderSuggestions()}</ul>}
                        </div>
                    </label>
                    <div className="hr"/>
                </div>
                <div className="form-group">
                    <label htmlFor="to">Куда
                        <div>
                            <input
                                value={valueTo}
                                onChange={handleInputTo}
                                disabled={!ready}
                                placeholder="Where are you going?"
                            />
                            {/* We can use the "status" to decide whether we should display the dropdown or not */}
                            {status === "OK" && <ul>{renderSuggestionsTo()}</ul>}
                        </div>
                        {/*<input ref={inputRef} value={formData.to} onChange={()=>{}} required name="to" id="to" type="text" className="form-control" placeholder="Алматы" />*/}
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