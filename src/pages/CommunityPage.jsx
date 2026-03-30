import React, { useEffect, useMemo, useState } from 'react'
import Hero from "../components/Hero"
import HomeSection01Card from '../components/home/HomeSection01Card'
import communityCard from '../data/communityCard'
import '../css/communityPage.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function CommunityPage() {
  const [category, setCategory] = useState('전체')
  const [isMobileSlider, setIsMobileSlider] = useState(window.innerWidth < 1024)

  const categories = ['전체', '상급', '중급', '초급']

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSlider(window.innerWidth < 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredData =
    category === '전체'
      ? communityCard
      : communityCard.filter((item) => item.difficulty === category)

  const groupedCards = useMemo(() => {
    const result = []
    for (let i = 0; i < filteredData.length; i += 3) {
      result.push(filteredData.slice(i, i + 3))
    }
    return result
  }, [filteredData])

  return (
    <div className='communitypage-wrap'>
      <div className="communitypage">
        <Hero
          video="/video/CommunityPage.mp4"
          titleImg="/img/community/h1.png"
          subtitle="오늘의 산타 메이트를 찾아요"
        />
      </div>

      <div className="inner">
        <h2 className='explain'>
          같이 산타고 싶은 모임을 찾아보세요
        </h2>

        <div className="category-box">
          <div className="category-button">
            {categories.map((item, i) => (
              <button
                type='button'
                key={i}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {!isMobileSlider ? (
            <div className="card-wrap">
              {filteredData.map((card) => (
                <HomeSection01Card key={card.id} {...card} />
              ))}
            </div>
          ) : (
            <div className="community-slider-wrap">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                className="community-swiper"
              >
                {groupedCards.map((group, index) => (
                  <SwiperSlide key={index}>
                    <div className="mobile-slide-group">
                      {group.map((card) => (
                        <HomeSection01Card key={card.id} {...card} />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}