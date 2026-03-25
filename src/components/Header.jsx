import React, { useContext } from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/img/header/logo.png'
import MyPage from '../assets/img/header/user.png'
import { AuthContext } from '../components/AuthContext.jsx'
import "../css/header.css"
import { Menu } from 'lucide-react';

export default function Header() {
  const { isLogin, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    navigate('/login')
  }
  return (
    <header>
      <div className="inner">
        <Link className='logo' to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Nav />
        <div className='login'>
          {!isLogin ? (
            <>
              <Link className='login' to="/login">로그인</Link>
              <a href="#">회원가입</a>
            </>
          ) : (
            <>
              <Link className='user' to='/mypage'>
                <img src={MyPage} alt="" />
              </Link>
              <button className='logout' onClick={handleLogout}>
                로그아웃
              </button>
            </>
          )}
        </div>
        <div className="menu-area">
          <button>
            <Menu className='menu' color="white" width='40px' height='40px'/>
          </button>
        </div>
      </div>
    </header>
  )
}
