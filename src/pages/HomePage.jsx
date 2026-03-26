import React from 'react'
import Hero from "../components/Hero"
import HomeSection01 from '../components/home/HomeSection01'
import '../css/homePage.css' 
import HomeSection02 from '../components/home/HomeSection02'
import { Link } from 'react-router-dom'
import { Search } from "lucide-react";
import HomeSection03 from '../components/home/HomeSection03'
import HomeSection04 from '../components/home/HomeSection04'

export default function HomePage() {
  return (
    <>
      <div className="homepage">
      <Hero video="/video/HomePage.mp4"
        titleImg="/img/home/h1.png"
        subtitle="등산의 시작부터 기록까지. 쉽고, 재밌게"
      />
      <div className="search">
        <Link to="/search" className="search-box">
          <p className='searchText'>오르고 싶은 산을 찾아보세요</p>
          <Search className='search-logo'/>
        </Link>
      </div>
    </div >
      <HomeSection01/>
      <HomeSection02/>
      <HomeSection03/>
      <HomeSection04/>
    </>
  )
}

