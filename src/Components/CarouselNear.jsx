import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { homes } from '../_mocks/mocks'
import 'swiper/css'
import 'swiper/css/pagination'


export default function CarouselNear(props) {
  const locationProperty = useSelector(state => state.propertyPlaces)
  const [nearProperty, setNearProperty] = useState([])

  useEffect(() => {
    homes.filter(value => {
      if (value.title.toLowerCase().includes(props?.nearby?.place.toLowerCase())) {
        setNearProperty(properties => [...properties, value])
      }
    })
  }, [locationProperty, props])

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
        style={{
          margin: 0,
          padding: 0
        }}
      >
        {nearProperty?.map((value, i) => (
          <SwiperSlide key={i} style={{
            width: '25px',
            margin: 0,
            padding: 0
          }}>
            <Card showPrice data={value}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
