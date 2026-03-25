import React, { useEffect, useState } from 'react'
import images from '../../data/MyPage'
import '../../css/mypagesec02.css'

const heartIcon = images.mountain.mountainHeart

const climbedList = [
  { id: 1, name: '관악산', image: images.mountain.mountain1, stamp: images.stamp.stamp01 },
  { id: 2, name: '유명산', image: images.mountain.mountain5, stamp: images.stamp.stamp02 },
  { id: 3, name: '수리산', image: images.mountain.mountain6, stamp: images.stamp.stamp03 },
  { id: 4, name: '태백산', image: images.mountain.mountain7, stamp: images.stamp.stamp04 },
  { id: 5, name: '설악산', image: images.mountain.mountain12, stamp: images.stamp.stamp05 },
  { id: 6, name: '북한산', image: images.mountain.mountain11, stamp: images.stamp.stamp06 },
  { id: 7, name: '속리산', image: images.mountain.mountain10, stamp: images.stamp.stamp07 },
  { id: 8, name: '계룡산', image: images.mountain.mountain16, stamp: images.stamp.stamp08 },
  { id: 9, name: '내장산', image: images.mountain.mountain13, stamp: images.stamp.stamp09 },
  { id: 10, name: '팔공산', image: images.mountain.mountain14, stamp: images.stamp.stamp10 },
  { id: 11, name: '유명산', image: images.mountain.mountain15, stamp: images.stamp.stamp11 },
  { id: 12, name: '관악산', image: images.mountain.mountain8, stamp: images.stamp.stamp12 },
]

export default function Climbed() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openModal])

  return (
    <>
      <section className="climbed-wrap">
        <div className="climbed-head">
          <div className="climbed-copy">
            <h3 className="climbed-title">정복한 산</h3>
            <p className="climbed-text">
              정복한 산을 스탬프로 기록하고 나만의 등산 발자취를 남겨보세요.
            </p>
          </div>

          <button type="button" className="climbed-btn" onClick={handleOpen}>
            전체보기
          </button>
        </div>

        <div className="climbed-grid">
          {climbedList.map((item) => (
            <div className="climbed-item" key={item.id}>
              <div className="climbed-card">
                <img src={item.image} alt={item.name} className="climbed-img" />
                <div className="climbed-dim"></div>
                <img src={item.stamp} alt={`${item.name} 스탬프`} className="climbed-stamp" />

                <div className="climbed-info">
                  <span className="climbed-name">{item.name}</span>
                  <img src={heartIcon} alt="좋아요" className="climbed-heart" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {openModal && (
        <div className="climbed-back" onClick={handleClose}>
          <div className="climbed-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="climbed-close"
              onClick={handleClose}
              aria-label="닫기"
            >
              ×
            </button>

            <div className="climbed-head">
              <div className="climbed-copy">
                <h3 className="climbed-title">정복한 산</h3>
                <p className="climbed-text">
                  정복한 산을 스탬프로 기록하고 나만의 등산 발자취를 남겨보세요.
                </p>
              </div>
            </div>

            <div className="climbed-grid">
              {climbedList.map((item) => (
                <div className="climbed-item" key={item.id}>
                  <div className="climbed-card">
                    <img src={item.image} alt={item.name} className="climbed-img" />
                    <div className="climbed-dim"></div>
                    <img src={item.stamp} alt={`${item.name} 스탬프`} className="climbed-stamp" />

                    <div className="climbed-info">
                      <span className="climbed-name">{item.name}</span>
                      <img src={heartIcon} alt="좋아요" className="climbed-heart" />
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