import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import '../css/mobilemenu.css'

import mobileLogo from '../assets/img/header/logo.png'
import mobileCharacter from '../assets/img/header/mobile-character.png'

export default function MobileMenu({ isOpen, onClose, isLogin, onLogout }) {
  const [communityOpen, setCommunityOpen] = useState(false)
  const [safeOpen, setSafeOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setCommunityOpen(false)
      setSafeOpen(false)
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`mobile-menu-dim ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      ></div>

      <aside className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-top">
          <button type="button" className="mobile-close-btn" onClick={onClose}>
            <X size={26} strokeWidth={2} />
          </button>
        </div>

        <div className="mobile-menu-logo">
          <Link to="/" onClick={onClose}>
            <img src={mobileLogo} alt="산타 로고" />
          </Link>
        </div>

        <div className="mobile-auth">
          {!isLogin ? (
            <>
              <Link to="/login" onClick={onClose}>로그인</Link>
              <span>|</span>
              <Link to="/join" onClick={onClose}>회원가입</Link>
            </>
          ) : (
            <>
              <Link to="/mypage" onClick={onClose}>마이페이지</Link>
              <span>|</span>
              <button type="button" onClick={onLogout}>로그아웃</button>
            </>
          )}
        </div>

        <nav className="mobile-nav">
          <div className="mobile-nav-item">
            <Link to="/mypage" onClick={onClose}>마이페이지</Link>
          </div>

          <div className="mobile-nav-item">
            <Link to="/search" onClick={onClose}>산찾기</Link>
          </div>

          <div className="mobile-nav-item has-sub">
            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setCommunityOpen(!communityOpen)}
            >
              <span>커뮤니티</span>
              {communityOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div className={`mobile-sub-menu ${communityOpen ? 'open' : ''}`}>
              <Link to="/community" onClick={onClose}>산타랑수다</Link>
              <Link to="/community/review" onClick={onClose}>산타일기</Link>
              <Link to="/community/team" onClick={onClose}>산타팀</Link>
              <Link to="/community/lab" onClick={onClose}>등템연구소</Link>
            </div>
          </div>

          <div className="mobile-nav-item">
            <Link to="/place" onClick={onClose}>산타의 핫스팟</Link>
          </div>

          <div className="mobile-nav-item has-sub">
            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setSafeOpen(!safeOpen)}
            >
              <span>산타가 지켜줄게</span>
              {safeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div className={`mobile-sub-menu ${safeOpen ? 'open' : ''}`}>
              <Link to="/safe" onClick={onClose}>안전수칙</Link>
              <Link to="/faq" onClick={onClose}>FAQ</Link>
            </div>
          </div>
        </nav>

        <div className="mobile-character">
          <img src={mobileCharacter} alt="캐릭터" />
        </div>
      </aside>
    </>
  )
}