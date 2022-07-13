import React from 'react'
import Carousel from '../Components/Carousel'
import '../Assets/Styles/App.scss'
import notification from '../Assets/Images/icons/notification.svg'
import love from '../Assets/Images/icons/love.svg'
import FindEstate from '../Components/FindEstate'
import BottomNav from '../Components/BottomNav'
import ModalFind from '../Components/ModalFind'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        propertyPlaces: state.propertyPlaces,
        handleModal : state.modalHandler
    }
}

function Home(props) {

    return (
        <>
            <ModalFind open={props.handleModal.open} type={props.handleModal.type} fullPopUp={props.handleModal.fullPopUp} />

            <div className='header-app'>
                <h2>Real Estate finder</h2>
                <div className='icons'>
                    <img src={notification} alt="notification" />
                    <img src={love} alt="love" />
                </div>
            </div>
            <Carousel />
            <FindEstate />
            <BottomNav />
        </>
    )
}

export default connect(mapStateToProps)(Home)
