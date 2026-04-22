import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import MobileMenu from './MobileMenu'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/img/header/logo.png'
import MyPage from '../assets/img/header/user.png'
import { AuthContext } from '../components/AuthContext.jsx'
import "../css/header.css"
import { Menu } from 'lucide-react'

export default function Header() {
  const { isLogin, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    setIsMenuOpen(false)
    navigate('/login')
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`${location.pathname === '/mypage' ? 'white' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="inner" >
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <Nav />

          <div className="login">
            {!isLogin ? (
              <>
                <Link className="login" to="/login">로그인</Link>
                <Link to="#">회원가입</Link>
              </>
            ) : (
              <>
                <Link className="user" to="/mypage">
                  <img src={MyPage} alt="마이페이지" />
                </Link>
                <button className="logout" onClick={handleLogout}>
                  로그아웃
                </button>
              </>
            )}
          </div>

          <div className="menu-area">
            <button type="button" onClick={openMenu}>
              <Menu className="menu" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        isLogin={isLogin}
        onLogout={handleLogout}
      />
    </>
  )
}