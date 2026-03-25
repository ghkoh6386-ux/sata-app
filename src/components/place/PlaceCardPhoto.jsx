import React, { useState, useEffect, useMemo } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PlaceCardPhoto() {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}photo.json`)
      .then((res) => res.json())
      .then((data) => {
        setPhotoList(data);
      });
  }, []);

  const rollingList = useMemo(() => {
    if (!photoList.length) return [];
    return [...photoList, ...photoList, ...photoList];
  }, [photoList]);

  return (
    <section id="photo">
      <Swiper
        modules={[Autoplay]}
        className="photo-area"
        slidesPerView="auto"
        spaceBetween={24}
        loop={true}
        speed={5000}
        allowTouchMove={false}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        {rollingList.map((photoZone, index) => (
          <SwiperSlide key={`${photoZone.id}-${index}`}>
            <div className="photo-slide">
              <img src={photoZone.images} alt={photoZone.title} />
              <div className="photo-text">
                <span className="photo-loca">{photoZone.title}</span>
                <span className="photo-desc">{photoZone.desc}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}