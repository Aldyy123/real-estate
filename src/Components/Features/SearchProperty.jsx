import React, { useState } from 'react'
import closeIcon from '../../Assets/Images/icons/close.svg'
import location from '../../Assets/Images/icons/location.svg'
import { places } from '../../_mocks/mocks'
import { useDispatch } from 'react-redux'
import { setPropertiPlace } from '../../redux/slices/property-place'
import { setOpenModal } from '../../redux/slices/modalHandle'

const SearchProperty = () => {
    const dispatch = useDispatch()
    const [resultPlace, setResultPlace] = useState([])

    const handleModalClick = (isOpen, idView = 0, popUpFull = false) => {
        dispatch(setOpenModal({
            type: idView, open: isOpen, popUpFull
        }))
    }

    const searchCity = e => {
        const filterCity = places.filter(value => {
            if (value.place.toLowerCase().includes(e.target.value.toLowerCase())) {
                return value
            }
        })
        setResultPlace(filterCity)
        console.log(filterCity);
    }

    const chooseCity = place => {
        dispatch(setPropertiPlace(place))
        handleModalClick(false)
    }


    return (
        <>
            <section className='search-property'>
                <div className="form-input">
                    <div className="close" onClick={() => handleModalClick(false)}>
                        <img style={{ width: '20px' }} src={closeIcon} alt="" />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Type Keyword...' onChange={(e) => searchCity(e)} />
                    </div>
                </div>

                <div className="result-place">
                    <span>Most people find :</span>

                    {(resultPlace.length > 0) ? resultPlace.map(place => (
                        <div className="place" key={place.id} onClick={() => chooseCity(place)}>
                            <img src={location} className="icon" alt="" />
                            <p>{place.place}</p>
                        </div>)) : places.map(place => (
                            <div className="place" key={place.id} onClick={() => chooseCity(place)}>
                                <img src={location} className="icon" alt="" />
                                <p>{place.place}</p>
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}

export default SearchProperty
