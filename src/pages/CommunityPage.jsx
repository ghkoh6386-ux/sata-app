import React, { useState } from 'react'
import Hero from "../components/Hero"
import HomeSection01Card from '../components/home/HomeSection01Card'
import communityCard from '../data/communityCard'
import '../css/communityPage.css'

export default function CommunityPage() {
  const [category, setCategory] = useState('전체');

  const categories = ['전체', '상급', '중급', '초급']

  const filteredData =
    category === '전체'
      ? communityCard
      : communityCard.filter((item) => item.difficulty === category)

  return (
    <div className='communitypage-wrap'>
      <div className="communitypage">
        <Hero video="/video/CommunityPage.mp4"
          titleImg="/img/community/h1.png"
          subtitle="오늘의 산타 메이트를 찾아요"
        />
      </div >
      <div className="inner">
        <h2 className='explain'>
          같이 산타고 싶은 모임을 찾아보세요
        </h2>
        <div className="category-box">
          <div className="category-button">
            {
              categories.map((item, i) => (
                <button
                  type='button'
                  key={i}
                  className={category === item ? 'active' : ''}
                  onClick={() => setCategory(item)}
                >{item}</button>
              ))
            }
          </div>
          <div className="card-wrap">
            {filteredData.map((card) => (
              <HomeSection01Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
