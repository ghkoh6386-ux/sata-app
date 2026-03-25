import React from 'react'
import images from '../../data/MyPage'

export default function Profile() {
  return (
    <>
      <div className="photo">
        <div className="top">
          <h1>마이페이지</h1>
          <button className="edit">
            <img src={images.icon.edit} alt="" />
          </button>
        </div>
        <figure className="profile">
          <img src={images.etc.profile} alt="" />
        </figure>
        <h3>@3ITyarrrrrrr님</h3>
      </div>
      <div className="distance">
        <img src={images.icon.distance} alt="distance" />
      </div>
    </>
  )
}
