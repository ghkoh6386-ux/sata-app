import React, { useState } from 'react'
import CommunityHeart from '../../assets/img/community/heart-community.png'
import Communitypeople from '../../assets/img/community/people-community.png'
import Community from './../../pages/CommunityPage';
import Feet from '../../assets/img/community/feet.png'

export default function HomeSection01Card({
  img, title, heart, people, desc, date, tag1, tag2, tag3, difficulty
}) {
  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState("confirm");
  const [isJoined, setIsJoined] = useState(false);

  //디데이
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
    return;

  };
  const isExpired = getRemainDate(date) === "모집 기한 마감";
  return (
    <>
      <div className={`card ${isExpired ? "expired-card" : ""}`}>
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
          <button
            onClick={() => {
              if (isExpired) return;
              setIsModalOpen(true);
              setStep("confirm");
            }}
            disabled={isExpired || isJoined}
            className={`join-btn 
                        ${isExpired ? "expired" : ""} 
                        ${isJoined ? "joined" : ""}`
                      }>
            {isExpired ? "모집 기한 마감" : isJoined ? "신청 완료" : "산타하기"}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {step === "confirm" && (
              <>
                <h2><span>{title}</span>에 참여하시겠습니까?</h2>
                <p className="info">선택한 모임에 참여하게 됩니다.</p>
                <p className="caution"> *산행 하루 전까지 취소 가능합니다.</p>

                <div className="modal-btns">
                  <button className="confirm"
                    onClick={() => { setIsJoined(true); setStep("success") }}>
                    예
                  </button>
                  <button className="cancel"
                    onClick={() => setIsModalOpen(false)}>
                    뒤로가기
                  </button>
                </div>
              </>
            )}
            {step === "success" && (
              <>
                <h2>참여 완료!</h2>
                <p className='info'>{title}에 참여되었습니다.</p>
                <button className="cancel"
                  onClick={() => setIsModalOpen(false)}>
                  닫기
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}