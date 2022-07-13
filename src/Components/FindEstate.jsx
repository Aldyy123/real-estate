import React from 'react'
import location from '../Assets/Images/icons/location.svg'
import home from '../Assets/Images/icons/home.svg'
import checklist from '../Assets/Images/icons/checklist.svg'
import { ButtonLink } from './Elements/Button'
import { connect } from 'react-redux'
import { setOpenModal } from '../redux/slices/modalHandle'

const mapStateToProps = state => {
    return {
        ...state
    }
}

const FindEstate = props => {

    const {propertyPlaces, typeProperty, statusProperty, modalHandler} = props

    const handleModalClick = (isOpen, idView, fullPopUp) => {
        props.dispatch(
            setOpenModal({ type: idView, open: isOpen, fullPopUp }))
    }
    

    return (
        <>
            <div className="find-estate">
                <div className="location" onClick={() => handleModalClick(true, 1, true)}>
                    <div className="icons">
                        <img src={location} alt="" />
                    </div>
                    <div className="info">
                        <span>Pick Location</span>
                        <h4>{propertyPlaces?.place ?? 'pilih lokasi'}</h4>
                    </div>
                </div>
                <hr />
                <div className="type-property" onClick={() => handleModalClick(true, 2, modalHandler.fullPopUp)}>
                    <div className="icons">
                        <img src={home} alt="" />
                    </div>
                    <div className="info">
                        <span>Type Property</span>
                        <h4>{typeProperty?.type ?? 'Pilih Type'}</h4>
                    </div>
                </div>
                <hr />
                <div className="status" onClick={() => handleModalClick(true, 3, modalHandler.fullPopUp)}>
                    <div className="icons">
                        <img src={checklist} alt="" />
                    </div>
                    <div className="info">
                        <span>Status</span>
                        <h4>{statusProperty?.title ?? 'Pilih Status'}</h4>
                    </div>
                </div>
                <hr />

                <div className="button-find">
                    <ButtonLink to={{
                        pathname: '/result'
                    }}>Find</ButtonLink>
                </div>

            </div>
        </>
    )
}

export default connect(mapStateToProps)(FindEstate)
