import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Button, ButtonLink } from '../Components/Elements/Button'
import contactIcon from '../Assets/Images/icons/message-square.png'
import theRock from '../Assets/Images/img/the-rock.png'
import CarouselNear from "../Components/CarouselNear";
import {homes, places} from '../_mocks/mocks'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return{
        ...state
    }
}

const Detail = (props) => {
    const params = useParams()
    const [indexHome, setIndexHome] = useState(null)
    const [nearby, setNearby] = useState()

    useEffect(() => {
        const index = homes.findIndex(value => value.id === parseInt(params.id))
        setIndexHome(index)
        const near = places.filter(value => value.id === homes[index].place)[0]
        setNearby(near)
    }, [indexHome, params])
    return (
        <>
            <section className="detail">
                <Card data={homes[indexHome]} detail />
                <div className="tab">
                    <Button to={'/'} colorBg={'#E4E4E4'}>Detail</Button>
                    <Button to={'/'} colorBg={'#F8F8F8'}>Map</Button>
                    <Button to={'/'} colorBg={'#F8F8F8'}>Loan</Button>
                </div>
                <div className="spec">
                    <div className="list-line">
                        <span className="title">Type of Property</span>
                        <h4>House</h4>
                    </div>
                    <div className="list-line">
                        <span className="title">Status</span>
                        <h4>Rent</h4>
                    </div>
                </div>
                <div className="information">
                    <div>
                        <span className="title">Price Start From : Rp 800 Juta</span>
                        <ButtonLink to={'/chat/2'} style={{
                            verticalAlign: 'middle',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }} radius={'10px'} width={'50%'}>
                            <img src={contactIcon} alt="" />
                            Contact Landlord
                        </ButtonLink>
                    </div>
                    <div className="spec">
                        <div className="list-line">
                            <span className="title">Type of Property</span>
                            <h4>House</h4>
                        </div>
                        <div className="list-line">
                            <span className="title">Building Size</span>
                            <h4>300M2</h4>
                        </div>
                        <div className="list-line">
                            <span className="title">Full Furnished</span>
                            <h4>Yes</h4>
                        </div>
                        <div className="list-line">
                            <span className="title">Garage</span>
                            <h4>Yes</h4>
                        </div>
                        <div className="list-line">
                            <span className="title">Carport</span>
                            <h4>Not Available</h4>
                        </div>
                    </div>
                    <div className="price-rent">
                        <div>
                            <span style={{ fontSize: '14px', color: '#42505C' }}>See loan options. start from</span>
                            <span style={{
                                fontSize: '16px', color: '#42505C'
                            }}>Rp 1.2 Juta / Bulan</span>
                        </div>
                        <ButtonLink to={'/'} radius={'10px'} width={'50%'} style={{ padding: '10px' }}>Loan</ButtonLink>
                    </div>
                    <div className="profile">
                        <div className="img-profile">
                            <img src={theRock} alt="" />
                        </div>
                        <div className="name-profile">
                            <h5 style={{
                                margin: 0,
                                fontSize: '14px'
                            }}>Shahrul M Landlord</h5>
                            <span className="title">Last Online : 1 hour ago</span>
                        </div>
                    </div>
                </div>
                <div className="nearby">
                    <h3>Property near {nearby?.place}</h3>

                    <CarouselNear nearby={nearby} />
                </div>
            </section>
        </>
    )
}

export default connect(mapStateToProps)(Detail)