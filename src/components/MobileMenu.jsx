import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/mobilemenu.css'
import { ChevronDown, X } from 'lucide-react'
import mobileLogo from '../assets/img/header/logo.png'
import mobileCharacter from '../assets/img/mobilemenu/leaf.png'

export default function MobileMenu({ isOpen, onClose, isLogin, onLogout }) {
  const [openAccordion, setOpenAccordion] = useState(null)

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
      setOpenAccordion(null)
    }
  }, [isOpen])

  const handleAccordionToggle = (menu) => {
    setOpenAccordion((prev) => (prev === menu ? null : menu))
  }

  const isCommunityOpen = openAccordion === 'community'
  const isSafeOpen = openAccordion === 'safe'

  return (
    <>
      <div
        className={`mobile-menu-dim ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />

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
              className={`mobile-nav-toggle ${isCommunityOpen ? 'active' : ''}`}
              onClick={() => handleAccordionToggle('community')}
              aria-expanded={isCommunityOpen}
            >
              <span>커뮤니티</span>
              <ChevronDown
                className={`mobile-arrow ${isCommunityOpen ? 'open' : ''}`}
                size={18}
              />
            </button>

            <div className={`mobile-sub-menu ${isCommunityOpen ? 'open' : ''}`}>
              <Link to="/community" onClick={onClose}>산타할사람</Link>
              <Link to="/community/review" onClick={onClose}>산타일기</Link>
              <Link to="/community/team" onClick={onClose}>산꿀팁</Link>
              <Link to="/community/lab" onClick={onClose}>등산템연구소</Link>
            </div>
          </div>

          <div className="mobile-nav-item">
            <Link to="/place" onClick={onClose}>산타의 핫스팟</Link>
          </div>

          <div className="mobile-nav-item has-sub">
            <button
              type="button"
              className={`mobile-nav-toggle ${isSafeOpen ? 'active' : ''}`}
              onClick={() => handleAccordionToggle('safe')}
              aria-expanded={isSafeOpen}
            >
              <span>산타가 지켜줄게</span>
              <ChevronDown
                className={`mobile-arrow ${isSafeOpen ? 'open' : ''}`}
                size={18}
              />
            </button>

            <div className={`mobile-sub-menu ${isSafeOpen ? 'open' : ''}`}>
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