import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function PlaceCardRest() {
  const [cafeList, setCafeList] = useState([])

  useEffect(() => {
    fetch('/rest.json')
      .then((res) => res.json())
      .then((data) => {
        setCafeList(data)
      })
  }, [])

  return (
    <section id="rest">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="common-area"
        slidesPerView={1}
        spaceBetween={20}
      >
        {cafeList.map((cafe) => (
          <SwiperSlide key={cafe.id}>
            <div className="common-slide">
              <div className="common-text">
                <div className="common-badges">
                  <span className="location">{cafe.location}</span>
                  <span className="badge">{cafe.badge}</span>
                </div>

                <div className="title-area">
                  <h3>{cafe.title}</h3>
                  <div>
                    <img className='star' src="/img/hotspot/star.png" alt="star" /> {cafe.star}
                    <span>리뷰 {cafe.review}건</span>
                  </div>
                </div>

                <span className='time'>영업시간: {cafe.opentime} - {cafe.closetime}</span>
                <p className='desc'>{cafe.desc}</p>

                <div className="keywords">
                  {cafe.keyword.map((k, i) => (
                    <span key={i}>#{k}</span>
                  ))}
                </div>
              </div>

              <div className="common-images">
                {cafe.images.map((img, i) => (
                  <div className="common-image" key={i}>
                    <img src={img} alt={cafe.title} />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}