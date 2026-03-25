import React, { useEffect, useState } from 'react'
import images from '../../data/MyPage'
import '../../css/mypagesec02.css'

const heartIcon = images.mountain.mountainHeart

const goalList = [
  { id: 1, month: '1월', name: '감악산', image: images.mountain.mountain1 },
  { id: 2, month: '2월', name: '광교산', image: images.mountain.mountain2 },
  { id: 3, month: '3월', name: '고라산', image: images.mountain.mountain3 },
  { id: 4, month: '4월', name: '마니산', image: images.mountain.mountain9 }
]

const goalMore = [
  { id: 5, month: '5월', name: '도봉산', image: images.mountain.mountain17 },
  { id: 6, month: '6월', name: '가야산', image: images.mountain.mountain18 },
  { id: 7, month: '7월', name: '백화산', image: images.mountain.mountain19 },
  { id: 8, month: '8월', name: '두타산', image: images.mountain.mountain20 }
]

export default function Goal() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    document.body.style.overflow = openModal ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openModal])

  return (
    <>
      <section className="goal-wrap">
        <div className="goal-head">
          <div className="goal-copy">
            <h3 className="goal-title">“2026” 목표 산</h3>
            <p className="goal-text">
              매달 한 산씩 도전하며 나만의 정상 기록을 완성해보세요.
            </p>
          </div>

          <button type="button" className="goal-btn" onClick={handleOpen}>
            전체보기
          </button>
        </div>

        <div className="goal-grid">
          {goalList.slice(0, 3).map((item) => (
            <div className="goal-item" key={item.id}>
              <span className="goal-month">{item.month}</span>

              <div className="goal-card">
                <img src={item.image} alt={item.name} className="goal-img" />
                <div className="goal-dim"></div>

                <div className="goal-info">
                  <span className="goal-name">{item.name}</span>
                  <img src={heartIcon} alt="좋아요" className="goal-heart" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {openModal && (
        <div className="goal-back" onClick={handleClose}>
          <div className="goal-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="goal-close"
              onClick={handleClose}
              aria-label="닫기"
            >
              ×
            </button>

            <div className="goal-head">
              <div className="goal-copy">
                <h3 className="goal-title">“2026” 목표 산</h3>
                <p className="goal-text">
                  매달 한 산씩 도전하며 나만의 정상 기록을 완성해보세요.
                </p>
              </div>
            </div>

            <div className="goal-grid">
              {[...goalList, ...goalMore].map((item) => (
                <div className="goal-item" key={item.id}>
                  <span className="goal-month">{item.month}</span>

                  <div className="goal-card">
                    <img src={item.image} alt={item.name} className="goal-img" />
                    <div className="goal-dim"></div>

                    <div className="goal-info">
                      <span className="goal-name">{item.name}</span>
                      <img src={heartIcon} alt="좋아요" className="goal-heart" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}