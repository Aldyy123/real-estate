import React from 'react'
import loveRed from '../Assets/Images/icons/love-red.svg'
import love from '../Assets/Images/icons/love.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {homes} from '../_mocks/mocks'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

export default function Carousel (props) {
  const Favorite = () => {
    if(props.showLove){
      if(props.favourite){
        return(
          <img src={loveRed} style={{
            position: 'absolute',
            zIndex: 6,
            top: 20,
            right: '30px'
          }} alt="" />
        )
      }else{
        return(
          <img src={love} style={{
            position: 'absolute',
            zIndex: 6,
            top: 20,
            right: '30px'
          }} alt="" />
        )
      }
    }
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Pagination]}
        style={{
          margin: '0 auto'
        }}
      >
        {homes[0].images.map((image, i) => (
        <SwiperSlide key={i}>
          <div style={{ position: 'relative' }}>
            <Favorite/>
            <img className='img' src={image} alt="" />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
