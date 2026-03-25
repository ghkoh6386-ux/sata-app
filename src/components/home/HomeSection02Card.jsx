import React from 'react'
import star from '../../assets/img/home/star-search.png'
import timeIcon from '../../assets/img/home/time-search.png'
import infoIcon from '../../assets/img/home/info-search.png'
import graphIcon from '../../assets/img/home/graph-search.png'

export default function HomeSection02Card({
  img,
  title,
  subTitle,
  level,
  time,
  info,
  height,
}) {
  return (
    <div className="trail-card">
      <img className="trail-card-thumb" src={img} alt={title} />

      <div className="trail-card-dim" />

      <div className="trail-card-content">
        <h3>{title}</h3>
        <p>{subTitle}</p>

        <div className="trail-card-meta">
          <span>
            <img src={star} alt="" />
            {level}
          </span>
          <span>
            <img src={timeIcon} alt="" />
            {time}
          </span>
          <span>
            <img src={infoIcon} alt="" />
            {info}
          </span>
          <span>
            <img src={graphIcon} alt="" />
            {height}
          </span>
        </div>
      </div>
    </div>
  )
}