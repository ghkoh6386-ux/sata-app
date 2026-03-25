import React from 'react'
import CommunityHeart from '../../assets/img/community/heart-community.png'
import Communitypeople from '../../assets/img/community/people-community.png'
import Community from './../../pages/CommunityPage';
import Feet from '../../assets/img/community/feet.png'

export default function HomeSection01Card({
  img, title, heart, people, desc, date, tag1, tag2, tag3, difficulty
}) {
  const getRemainDate = (endDateStr) => {
    const parts = endDateStr.split(".");

    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const date = Number(parts[2]);

    const target = new Date(year, month - 1, date);
    const now = new Date();

    target.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffTime = target - now;
    const leftDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffTime > 0) return `D-${leftDays}`;
    if (diffTime === 0) return `D-Day`;
    if (diffTime < 0) return `모집 기한 마감`;
    return ;
  };
  return (
    <div className='card'>
      <img src={img} alt={title} className="card-main-img" />

      <div className="title-area">
        <img src={Feet} alt="" className="feet-icon" />
        <h3>{title}</h3>
        <span
          className={`badge ${difficulty === "초급"
            ? "easy"
            : difficulty === "중급"
              ? "medium"
              : "hard"
            }`}
        >
          {difficulty}
        </span>
      </div>

      <p>{desc}</p>

      <div className="info-area">
        <img src={CommunityHeart} alt="" /> {heart}
        <span>/</span>
        <img src={Communitypeople} alt="" /> {people}
      </div>

      <div className="date">모집 종료: {date} <span className="dday">{getRemainDate(date)}</span> </div>

      <div className="tags">
        <span>{tag1}</span>
        <span>{tag2}</span>
        <span>{tag3}</span>
      </div>

      <div className="btn-area">
        <button>산타하기</button>
      </div>
    </div>
  )
}
