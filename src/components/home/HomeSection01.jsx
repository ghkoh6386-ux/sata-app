import { useEffect, useRef, useState } from 'react'
import HomeSection01Card from './HomeSection01Card'
import communityCard from '../../data/communityCard'
import '../../css/homePage.css'
import communityBg from '../../assets/img/home/community-background.png'
import communityTitle from '../../assets/img/home/communityTitle.png'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'

export default function HomeSection01() {
  const navigate = useNavigate()
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCards = communityCard.slice(0, 3)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const updateCurrentIndex = () => {
      const cards = Array.from(slider.querySelectorAll('.card'))
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

    const cards = slider.querySelectorAll('.card')
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
      className="section01"
      style={{
        backgroundImage: `url(${communityBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '118px',
      }}
    >
      <div className="text-area">
        <div className="inner">
          <img className="community-title" src={communityTitle} alt="" />
          <div className="text">
            <p>
              산탈 사람? 여기 다 모였다. <span>초보도 환영—페이스 맞춰서 편하게 올라가요.</span>
            </p>
            <button className="all" onClick={() => navigate('/community')}>
              전체보기 <Plus className="plus" />
            </button>
          </div>
        </div>
      </div>

      <div className="inner">
        <div className="card-wrap" ref={sliderRef}>
          {visibleCards.map((card) => (
            <HomeSection01Card key={card.id} {...card} />
          ))}
        </div>

        <div className="section01-pagination">
          {visibleCards.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`${index + 1}번 카드 보기`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}