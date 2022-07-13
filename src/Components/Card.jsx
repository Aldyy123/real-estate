import React from 'react'
import Carousel from '../Components/Carousel'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
        <>
            <Link to={'/detail/'+props?.data?.id} className='card'>
                <Carousel showLove={props.showLove} favourite={props?.data?.favourite} />
                <div className="body">
                    <span>2 Rooms 1 Bath room 250M2</span>
                    <h4>{props?.data?.title}</h4>
                    {props.showPrice && <span>Rp {props?.data?.price} Juta</span>}
                </div>
            </Link>
        </>
  )
}

export default Card
