import React from 'react'
import images from '../../data/MyPage'

export default function Point() {
  return (
    <>
      <div className="point">
        <h2>산타의 선물</h2>
        <div className="santa-point">
          <div className="santa-point-top">
            <figure><img src={images.etc.santaPoint} alt="santapoint" /></figure>
            <figure><img src={images.etc.santa} alt="santa" /></figure>
          </div>
          <div className="santa-point-bottom">
            <p>2026.04.01.00:01 기준 </p>
            <div className="mypoint">
              <span>128.045P</span>
              <button><img src={images.etc.payRenew} alt="renew" /></button>
            </div>
          </div>
        </div>
        <h3>네이버페이 포인트를 산타포인트로 전환 가능해요!</h3>
        <div className="naver-point-wrap">
          <button className="naver-point">
            <div className="naver">
              <img src={images.etc.naverpay} alt="naverpay" />
              <p><span>네이버페이 포인트</span> 1P</p>
            </div>
            <figure>
              <img src={images.etc.arrow} alt="arrow" />
            </figure>
            <div className="santa-pay">
              <img src={images.icon.logoPay} alt="" />
              <p><span>산타포인트</span> 1P</p>
            </div>
          </button>
        </div>
        <div className="stamp">
          <strong>산을 정복하고 포인트를 모아보세요!</strong>
          <div className="levels">
            <button className="level01">
              <h4><span>1단계</span> 3곳 <br />정복</h4>
              <p>1,000P</p>
              <img src={images.etc.payStamp} alt="paystamp" />
            </button>
            <button className="level02">
              <h4><span>2단계</span> 6곳 <br />정복</h4>
              <p>3,000P</p>
            </button>
            <button className="level03">
              <h4><span>3단계</span> 10곳 <br />정복</h4>
              <p>12,000P</p>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
