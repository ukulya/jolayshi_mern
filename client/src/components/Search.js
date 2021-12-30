import React, {useState} from "react";
import CommonNavbar from "./Header/CommonNavbar";

const Search = () =>{

    /*const searchPost = () => {
        if (search.trim() || tags){
            // dispatch -> fetch search post
            dispatch(getPostsBySearch({search,tags: tags.join(',')}))
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            navigate('/')
        }
    }*/
    const [searchData,setSearchData] = useState({from:'',to:'',date: '',time:'',seats:'',childSeat:false,luggage:false,smoking:false,animals:false})

    const handleSearch = (e) => {
        //setSearchTerm(e.target.value)
        setSearchData({...searchData, [e.target.name]: e.target.value})
    }
    const submitSearch = e => {
        e.preventDefault()
        /*const filteredData = trips?.filter(trip => {
            trip.from.toLowerCase().includes(str.toLowerCase())
        })*/

    }

    const clearSearch = () => {

    }

    return(
        <div>
            <CommonNavbar title='Поиск'/>
            <div className="container">
                <div className="text-center mb-20">
                    <button className="text_md btn show_location_btn"><span className="material-icons-outlined mr-5 text_lg">place</span>Использовать мое местоположение</button>
                </div>
                <div className="custom-card br-5 d-flex pb-0">
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
                                <input value={searchData.from} onChange={handleSearch} name='from' required id="from" type="text" className="form-control" placeholder="Семей"/>
                            </label>
                            <div className="hr"/>
                        </div>
                        {/*<div className="form-group">
                            <label htmlFor="to">Куда
                                <input value={searchData.to} onChange={handleSearch} name='to' required id="to" type="text" className="form-control" placeholder="Алматы"/>
                            </label>
                        </div>*/}
                    </div>
                </div>
               {/* <div className="row">
                    <div className="col-6 pr-5">
                        <p className="text_sm text-center">Календарь</p>
                        <input value={searchData.date} type="date" name='date' onChange={handleSearch} className='form-control' required/>
                        <select className="form-select" value={searchData.seats} onChange={handleSearch} name='seats' required>
                            <option value='1'>Кол-во мест</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="form-select" value={searchData.luggage} onChange={handleSearch} name='luggage' required>
                            <option value={false}>Перевозка багажа</option>
                            <option value={true}>Да</option>
                            <option value={false}>Нет</option>
                        </select>
                        <select className="form-select" value={searchData.animals} onChange={handleSearch} name='animals' required>
                            <option value={false}>Перевозка животных</option>
                            <option value={true}>Да</option>
                            <option value={false}>Нет</option>
                        </select>
                    </div>
                    <div className="col-6 pl-5">
                        <p className="text_sm text-center">Время</p>
                        <input value={searchData.time} type="time" name='time' onChange={handleSearch} className='form-control' required/>
                        <select className="form-select" value={searchData.childSeat} onChange={handleSearch} name='childSeat' required>
                            <option value={false}>Детское кресло</option>
                            <option value={true}>Да</option>
                            <option value={false}>Нет</option>
                        </select>
                        <select className="form-select" value={searchData.childSeat} onChange={handleSearch} name='childSeat' required>
                            <option value={false}>Курение в салоне</option>
                            <option value={true}>Да</option>
                            <option value={false}>Нет</option>
                        </select>
                    </div>
                </div>*/}
                <div className="text-center mt-45">
                    <button onClick={clearSearch} className="btn text_sm text_red reset_filter_btn mb-20">Удалить все фильтры <span className="material-icons-outlined text_13 ml-10">cancel</span></button><br/>
                    <button onClick={submitSearch} className="custom_btn red_btn search_btn common_btn">Найти<span className="material-icons ml-10">chevron_right</span></button>
                </div>
            </div>
        </div>
    )
}

export default Search;