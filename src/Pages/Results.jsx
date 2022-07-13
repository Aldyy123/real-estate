import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import arrowLeft from '../Assets/Images/icons/arrow-left.svg'
import searchIcon from '../Assets/Images/icons/search-icon.svg'
import Card from '../Components/Card'
import filter from '../Assets/Images/icons/filter2.svg'
import sort from '../Assets/Images/icons/sliders1.svg'
import ModalFind from '../Components/ModalFind'
import { connect } from 'react-redux'
import {setOpenModal} from '../redux/slices/modalHandle'
import {homes} from '../_mocks/mocks'

const mapStateToProps = state => {
    return {
        ...state
    }
}

const Results = (props) => {
    const {propertyPlaces, typeProperty, statusProperty, modalHandler, dispatch} = props
    const [placeHome, setPlaces] = useState([])

    const openModal = () => {
        if(modalHandler.open){
            dispatch(setOpenModal({open: false}))
        }else{
            dispatch(setOpenModal({open: true, type: 4, fullPopUp: true}))
        }
    }

    useEffect(() => {
        setPlaces([])
        homes.filter(value => {
            if(value.title.toLowerCase().includes(propertyPlaces.place?.toLowerCase())){
                setPlaces(places => [...places, value])
            }
            return value
        })
    }, [propertyPlaces])


    return (
        <>
            <ModalFind open={modalHandler.open} type={modalHandler.type} fullPopUp={modalHandler.fullPopUp} />

            <section className='results'>
                <div className='search-bar'>
                    <Link to={'/'}>
                        <img src={arrowLeft} alt="" />
                    </Link>
                    <div className="input">
                        <input type="text" disabled placeholder={`${statusProperty.title} ${typeProperty.type} at ${propertyPlaces.place}`} />
                        <img src={searchIcon} style={{ color: '#79828B' }} alt="" />
                    </div>
                </div>
                <hr />
                <div className="floating-actions">
                    <div onClick={() => openModal()}>
                        <img src={filter} alt="" />
                        <span>Filter</span>
                    </div>
                    <div>
                        <img src={sort} alt="" />
                        <span>Sort</span>
                    </div>
                </div>
                <div className='list-property'>
                    <p>{placeHome?.length} {typeProperty.type} found at {propertyPlaces.place}</p>

                    {placeHome?.length >= 0? placeHome?.map((home, i) => (
                        <Card showPrice data={home} showLove={true} key={i} />
                    )) : 'Tidak ada'}
                </div>
            </section>
        </>
    )
}

export default connect(mapStateToProps)(Results)
