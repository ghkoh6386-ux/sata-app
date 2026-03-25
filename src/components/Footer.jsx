import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/footer/footer-logo.png'
import '../css/footer.css'
import kakao from '../assets/img/footer/kakao-talk.png'
import insta from '../assets/img/footer/instagram.png'
import youtube from '../assets/img/footer/youtube.png'

export default function Footer() {
  return (
    <footer>
        <div className="top">
          <div className="footer-logo">
            <Link to='/'>
              <img src={logo} alt="santa" />
            </Link>
          </div>
          <p className="address">서울 강서구 화곡로</p>
        </div>
        <div className="bot">
          <div className="bot-left">
            <ul className="info">
              <li>사업자등록번호 : 333-81-02917</li>
              <li>통신판매업신고번호 : 제 2026-서울강서--04127</li>
              <li>대표자 : 홍길동 문의 / 제안 : santa@sanjoa.com</li>
              <li>연락처 : 0507-0177-1793</li>
            </ul>
            <ul className="policy">
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>위치기반서비스</li>
            </ul>
          </div>
          <div className="bot-right">
            <ul className="sns">
              <li>
                <img src= {kakao} alt="kakao-talk" />
              </li>
              <li>
                <img src= {insta} alt="instagram" />
              </li>
              <li>
                <img src= {youtube} alt="youtube" />
              </li>
            </ul>
            <p className="copy">Copyright ⓒ 2026 산타. All Rrights Resreved.</p>
          </div>
        </div>
    </footer>
  )
}
