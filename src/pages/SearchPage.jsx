import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowLeft } from "lucide-react"
import Hero from "../components/Hero"
import images from '../data/searchPage'
import regionData from '../data/searchPageRegion'
import '../css/searchPage.css'

export default function SearchPage() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [selectedMountain, setSelectedMountain] = useState(null)
  const [isMountainModalOpen, setIsMountainModalOpen] = useState(false)

  const openMountainModal = (mountain) => {
    setSelectedMountain(mountain)
  }
  const closeMountainModal = () => {
    setSelectedMountain(null)
  }
  const closeAllModal = () => {
    setSelectedMountain(null)
    setSelectedRegion(null)
  }


  return (
    <div className='searchpage-wrap'>
      <div className="searchpage">
        <Hero
          video="/video/SearchPage.mp4"
          titleImg="/img/search/h1.png"
          subtitle="내가 오르고 싶은 산을 찾아볼 수 있어요"
        />
      </div>

      <section className="searchpage-section">
        <div className="text-area">
          <p>오르고 싶은 산을 지도에서도 찾아보세요</p>
        </div>

        <figure className='cloud'>
          <img src={images.cloud} alt="cloud" />
        </figure>

        <figure className='map'>
          <img src={images.map} alt="map" />
          <button className="ganwon" onClick={() => setSelectedRegion("강원도")}>강원도</button>
          <button className="gyeonggi" onClick={() => setSelectedRegion("경기도")}>경기도</button>
          <button className="chungcheong" onClick={() => setSelectedRegion("충청도")}>충청도</button>
          <button className="jeolla" onClick={() => setSelectedRegion("전라도")}>전라도</button>
          <button className="gyeongsang" onClick={() => setSelectedRegion("경상도")}>경상도</button>
          <button className="jeju" onClick={() => setSelectedRegion("제주도")}>제주도</button>
        </figure>

        <figure className='rabbit'>
          <img src={images.rabbit} alt="rabbit" />
        </figure>

        <figure className='bottom'>
          <img src={images.bottom} alt="bg" />
        </figure>
      </section>

      {(selectedRegion || selectedMountain) && (
        <div className="modal-overlay" onClick={closeAllModal}></div>
      )}

      {selectedRegion && (
        <div className="modal-map" onClick={(e) => e.stopPropagation()}>

          <div className="top">
            <h1>&lt; {selectedRegion} &gt;</h1>
            <button type="button" onClick={() => setSelectedRegion(null)}>
              <X className='close' />
            </button>
          </div>

          <div className="mountains">
            {regionData[selectedRegion].map((mountain) => (

              <div className="mountain" key={mountain.id}>
                <figure>
                  <img src={mountain.img} alt={mountain.name} />
                </figure>

                <div className="text-area">
                  <h3>{mountain.name}</h3>
                  <span>정상높이 {mountain.height}</span>
                  <p>{mountain.desc}</p>

                  <div className="btn-area">
                    <button
                      type="button"
                      onClick={() => openMountainModal(mountain)}
                    >
                      코스 보러가기
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>

        </div>
      )}

      {selectedMountain && (
        <div className="modal-mountain-info" onClick={(e) => e.stopPropagation()}>
          <div className="top">
            <button type="button" onClick={() => setSelectedMountain(null)}>
              <ArrowLeft className='back-btn' />
            </button>
            <h1>{selectedMountain.name}</h1>
            <button type="button" onClick={closeAllModal}>
              <X className='close' />
            </button>
          </div>

          <figure>
            <img className='photo' src={selectedMountain.img} alt="photo" />
            <div className="distance">
              <img className='micon' src={images.mIcon} alt="mountainIcon" />
              <h4>{selectedMountain.height}</h4>
            </div>
          </figure>

          <div className="courses">
            {
              selectedMountain.courses.map((course, index) => (
                <div className="course" key={index}>
                  <div className="top">
                    <h3>{course.name}</h3>
                  </div>
                  <p>{course.desc || "코스 설명 없음"}</p>
                  <div className="distance">
                    <span>거리</span>
                    <strong>{course.distance}</strong>
                  </div>
                  <div className="time">
                    <span>시간</span>
                    <strong>{course.time}</strong>
                  </div>
                  <h4 className={`level ${course.level === "쉬움"
                    ? "easy"
                    : course.level === "보통"
                      ? "medium"
                      : "hard"
                    }`}
                  >
                    {course.level}
                  </h4>
                </div>
              ))
              }
          </div>
           <div className="btn-area">
              <Link to='/community'>모임찾기</Link>
            </div>
        </div>
      )}
    </div>
  )
}




