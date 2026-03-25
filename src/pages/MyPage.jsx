import React, { useEffect } from 'react'
import '../css/mypage.css'
import MypageSec01 from '../components/mypage/MypageSec01'
import MypageSec02 from '../components/mypage/MypageSec02'
import MypageSec03 from '../components/mypage/MypageSec03'

export default function MyPage() {
  useEffect(() => {
    document.body.classList.add('mypage-body')

    return () => {
      document.body.classList.remove('mypage-body')
    }
  }, [])

  return (
    <div className="mypage">
      <div className="contents">
        <MypageSec01 />
        <MypageSec02 />
        <MypageSec03 />
      </div>
    </div>
  )
}