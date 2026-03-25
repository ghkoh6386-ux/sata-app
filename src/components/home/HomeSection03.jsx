import React, { useEffect, useState } from 'react';
import HomeSection03Data from '../../data/HomeSection03';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import placeTitle from '../../assets/img/home/placeTitle.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export default function HomeSection03() {
  const navigate = useNavigate();
  const [isSlideMode, setIsSlideMode] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSlideMode(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="home-section03">
      <figure>
        <img src={placeTitle} alt="" />
      </figure>

      <div className="home-section03-inner">
        <div className="section03-top">
          <div className="section03-title-box">
            <div className="text">
              <p>
                정상 찍고 내려오면 제일 먼저 생각나는, 배도 마음도
                든든하게 채워주는 산타 맛집 모음
              </p>

              <button className="all" onClick={() => navigate('/place')}>
                전체보기 <Plus className="plus" />
              </button>
            </div>
          </div>
        </div>

        {isSlideMode ? (
          <Swiper
            modules={[Grid, Pagination]}
            slidesPerView={2}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            className="food-swiper"
          >
            {HomeSection03Data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="food-card"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="food-card-overlay" />

                  <div className="food-card-info">
                    <h3>{item.title}</h3>

                    <p className="food-card-rating">
                      <span className="stars">★★★★★</span>
                      <span>{item.rating}</span>
                      <span>리뷰 {item.review}</span>
                    </p>

                    <div className="food-card-tags">
                      <span>{item.tag1}</span>
                      <span>{item.tag2}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="food-list">
            {HomeSection03Data.map((item) => (
              <div
                className="food-card"
                key={item.id}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="food-card-overlay" />

                <div className="food-card-info">
                  <h3>{item.title}</h3>

                  <p className="food-card-rating">
                    <span className="stars">★★★★★</span>
                    <span>{item.rating}</span>
                    <span>리뷰 {item.review}</span>
                  </p>

                  <div className="food-card-tags">
                    <span>{item.tag1}</span>
                    <span>{item.tag2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}