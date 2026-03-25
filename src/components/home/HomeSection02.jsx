import React, { useEffect, useRef, useState } from 'react'
import searchBg from '../../assets/img/home/background-search.png'
import santa from '../../assets/img/home/santa-search.png'
import searchTitle from '../../assets/img/home/searchTitle.png'
import mountains from '../../data/HomeSection02'
import HomeSection02Card from './HomeSection02Card'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'

export default function HomeSection02() {
  const navigate = useNavigate()
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const updateCurrentIndex = () => {
      const cards = Array.from(slider.querySelectorAll('.trail-card'))
      if (!cards.length) return

      const sliderCenter = slider.scrollLeft + slider.clientWidth / 2

      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(sliderCenter - cardCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setCurrentIndex(closestIndex)
    }

    updateCurrentIndex()

    slider.addEventListener('scroll', updateCurrentIndex, { passive: true })
    window.addEventListener('resize', updateCurrentIndex)

    return () => {
      slider.removeEventListener('scroll', updateCurrentIndex)
      window.removeEventListener('resize', updateCurrentIndex)
    }
  }, [])

  const handleDotClick = (index) => {
    const slider = sliderRef.current
    if (!slider) return

    const cards = slider.querySelectorAll('.trail-card')
    const targetCard = cards[index]
    if (!targetCard) return

    const targetLeft =
      targetCard.offsetLeft - (slider.clientWidth - targetCard.offsetWidth) / 2

    slider.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className="section02"
      style={{
        backgroundImage: `url(${searchBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="inner section02-inner">
        <div className="section02-left">
          <div className="section02-intro-card">
            <div className="section02-top">
              <img className="section02-santa" src={santa} alt="" />
              <img className="section02-title" src={searchTitle} alt="산타랑 이 길 탈래?" />
              <p className="section02-desc">
                정상 찍고 내려오면 제일 먼저 생각나는, 배도 마음도 <br />
                <span> 든든하게 채워주는 산타 맛집 모음</span>
              </p>
            </div>

            <button className="all" onClick={() => navigate('/search')}>
              전체보기 <Plus className="plus" />
            </button>


          </div>
        </div>

        <div className="section02-right">
          <div className="section02-card-wrap" ref={sliderRef}>
            {mountains.map((item) => (
              <HomeSection02Card key={item.id} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}