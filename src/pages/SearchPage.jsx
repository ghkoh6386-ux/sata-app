import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from "../components/Hero"
import { Search, X, ArrowLeft } from "lucide-react"
import images from '../data/searchPage'
import '../css/searchPage.css'

export default function SearchPage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [isMountainModalOpen, setIsMountainModalOpen] = useState(false)

  const openMapModal = () => {
    setIsMapModalOpen(true)
    setIsMountainModalOpen(false)
  }

  const closeMapModal = () => {
    setIsMapModalOpen(false)
  }

  const openMountainModal = () => {
    setIsMapModalOpen(false)
    setIsMountainModalOpen(true)
  }

  const closeMountainModal = () => {
    setIsMountainModalOpen(false)
  }

  const closeAllModal = () => {
    setIsMapModalOpen(false)
    setIsMountainModalOpen(false)
  }

  return (
    <div className='searchpage-wrap'>
      <div className="searchpage">
        <Hero
          video="/video/SearchPage.mp4"
          titleImg="/img/search/h1.png"
          subtitle="내가 오르고 싶은 산을 찾아볼 수 있어요"
        />

        <div className="search">
          <Link to="/search" className="search-box">
            <p className='searchText'>오르고 싶은 산을 검색해보세요</p>
            <Search className='search-logo' />
          </Link>
        </div>
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
          <button className="ganwon">강원도</button>
          <button className="gyeonggi">경기도</button>
          <button className="chungcheong">충청도</button>
          <button className="jeolla">전라도</button>
          <button className="gyeongsang" onClick={openMapModal}>경상도</button>
          <button className="jeju">제주도</button>
        </figure>

        <figure className='rabbit'>
          <img src={images.rabbit} alt="rabbit" />
        </figure>

        <figure className='bottom'>
          <img src={images.bottom} alt="bg" />
        </figure>
      </section>

      {(isMapModalOpen || isMountainModalOpen) && (
        <div className="modal-overlay" onClick={closeAllModal}></div>
      )}

      {isMapModalOpen && (
        <div className="modal-map">
          <div className="top">
            <h1>경상도</h1>
            <button type="button" onClick={closeMapModal}>
              <X className='close' />
            </button>
          </div>

          <div className="mountains">
            <div className="mountain">
              <figure>
                <img src={images.mountain1} alt="mountain" />
              </figure>

              <div className="text-area">
                <h3>지리산</h3>
                <span>정상높이 1,915m</span>
                <p>
                  전라도, 경상남도에 걸쳐 있는 산이며,
                  1967년 우리나라 최초의 국립공원으로 지정.
                  가을 단풍 시즌이 특히 인기.
                </p>
                <div className="btn-area"
                ><button type="button" onClick={openMountainModal}>코스 보러가기</button>
                </div>
              </div>
            </div>

            <div className="mountain">
              <figure>
                <img src={images.mountain2} alt="mountain" />
              </figure>

              <div className="text-area">
                <h3>팔공산</h3>
                <span>정상높이 1,192m</span>
                <p>
                  비로봉을 중심으로 다양한 봉우리와 능선을 이루며,
                  화강암과 변성 퇴적암으로 구성된 지질과 독특한
                  지형을 갖춘 자연경관을 보임. 2023년 국립공원으로
                  승격.
                </p>
                <div className="btn-area">
                  <button type="button">코스 보러가기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMountainModalOpen && (
        <div className="modal-mountain-info">
          <div className="top">
            <button type="button" onClick={openMapModal}>
              <ArrowLeft className='back-btn'/>
            </button>
            <h1>지리산</h1>
            <button type="button" onClick={closeMountainModal}>
              <X className='close' />
            </button>
          </div>

          <figure>
            <img className='photo' src={images.photo} alt="photo" />
            <div className="distance">
              <img className='micon' src={images.mIcon} alt="mountainIcon" />
              <h4>1915m</h4>
            </div>
          </figure>

          <div className="courses">
            <div className="course">
              <div className="top">
                <h3>장터목 코스</h3>
              </div>
              <p>중산리탐방안내소(순환)</p>
              <div className="distance">
                <span>거리</span>
                <strong>11.0km</strong>
              </div>
              <div className="time">
                <span>시간</span>
                <strong>7시간 18분</strong>
              </div>
              <h4>
                <img src={images.starYellow} alt="starYellow" /> 어려움
              </h4>
            </div>

            <div className="course">
              <div className="top">
                <h3>칼바위 코스</h3>
              </div>
              <p>중산리탐방안내소 → 천왕봉</p>
              <div className="distance">
                <span>거리</span>
                <strong>4.7km</strong>
              </div>
              <div className="time">
                <span>시간</span>
                <strong>3시간 32분</strong>
              </div>
              <h4>
                <img src={images.starYellow} alt="starYellow" /> 어려움
              </h4>
            </div>

            <div className="course">
              <div className="top">
                <h3>반야봉 코스</h3>
              </div>
              <p>노고단고개 → 반야봉</p>
              <div className="distance">
                <span>거리</span>
                <strong>5.4km</strong>
              </div>
              <div className="time">
                <span>시간</span>
                <strong>2시간 27분</strong>
              </div>
              <h4>
                <img src={images.starRed} alt="starRed" /> 보통
              </h4>
            </div>
          </div>

          <div className="btn-area">
            <Link to='/community'>모임찾기</Link>
          </div>
        </div>
      )}
    </div>
  )
}
