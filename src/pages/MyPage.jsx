import React from 'react'
import '../css/mypage.css'
import images from '../data/MyPage'
import MypageSec01 from '../components/mypage/MypageSec01'
import MypageSec02 from '../components/mypage/MypageSec02'
import MypageSec03 from '../components/mypage/MypageSec03'

export default function MyPage() {
  return (
    <div className="mypage">
      <div className="contents">
        <MypageSec01 className="MypageSec01"/>        
        <MypageSec02 className="MypageSec02"/>                 
        <MypageSec03 className="MypageSec03"/>   
      </div>
    </div>
  )
}
