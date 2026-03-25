import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

export default function Nav() {
  const path = useLocation().pathname
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/search">
            <h3>산찾기</h3>
          </NavLink>
        </li>

        <li className={path.includes('/community') ? 'active' : ''}>
          <h3>커뮤니티</h3>
          <ul className="sub-menu">
            <li>
              <NavLink to="/community">
                <h4>산타할사람</h4>
              </NavLink>
            </li>
            <li>
              <h4>산타 일기</h4>
            </li>
            <li>
              <h4>산 꿀팁</h4>
            </li>
            <li>
              <h4>등산탬 연구소</h4>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/place">
            <h3>산타의 핫스팟</h3>
          </NavLink>
        </li>

        <li className={path.includes('/safe') || path.includes('/FAQ') ? 'active' : ''}>
          <h3>산타가 지켜줄게</h3>

          <ul className="sub-menu">
            <li>
              <NavLink to="/safe">
                <h4>안전수칙</h4>
              </NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">
                <h4>FAQ</h4>
              </NavLink>
            </li>
          </ul>
        </li>
      </ul >
    </nav >
  )
}