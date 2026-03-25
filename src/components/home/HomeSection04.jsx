import React, { useEffect, useState } from 'react';
import useTitle from '../../assets/img/home/useTitle.png';
import useFind from '../../assets/img/home/useFind.png';
import useSearch from '../../assets/img/home/useSearch.png';
import useQr from '../../assets/img/home/useQr.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeSection04() {
  const [isSlideMode, setIsSlideMode] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSlideMode(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardData = [
    { id: 1, img: useFind, alt: '크루 찾기' },
    { id: 2, img: useSearch, alt: '산 검색하기' },
    { id: 3, img: useQr, alt: 'QR 이용하기' },
  ];

  return (
    <section className="home-section04">
      <figure>
        <img className="useTitle" src={useTitle} alt="" />
      </figure>

      <div className="usecard">
        <div className="inner">
          {isSlideMode ? (
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={16}
              pagination={{ clickable: true }}
              className="usecard-swiper"
            >
              {cardData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="usecard-item">
                    <img src={item.img} alt={item.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ul>
              {cardData.map((item) => (
                <li key={item.id}>
                  <img src={item.img} alt={item.alt} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}