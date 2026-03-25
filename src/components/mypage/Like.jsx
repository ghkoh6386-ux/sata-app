import React from 'react'
import images from '../../data/MyPage'

const likeHeart = images.icon.likeHeart
const likeComment = images.icon.likeComment

const likeList = [
  {
    id: 1,
    image: images.icon.like1,
    title: "정상으로 향하는 우리의 산행",
    date: "2025.06.28",
    like: 24,
    comment: 16
  },
  {
    id: 2,
    image: images.icon.like2,
    title: "함께 오르면 더 즐거운 등산 모임",
    date: "2025.07.13",
    like: 48,
    comment: 32
  },
]

export default function Like() {
  return (
    <section className="like-wrap">
      <div className="like-head">
        <div className="like-copy">
          <h3 className="like-title">내가 좋아요 한 게시물</h3>
          <p className="like-text">
            좋아요한 게시물을 언제든지 다시 확인해보세요.
          </p>
        </div>
        <button type="button" className="like-btn">
          전체보기
        </button>
      </div>

      <div className="like-grid">
        {likeList.map((item) => (
          <div className="like-card" key={item.id}>
            <figure className='like-img'>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="text-area">
              <div className="text-top">
                <h4 className="title">{item.title}</h4>
                <span className="date">{item.date}</span>
              </div>
              <div className="text-bot">
                <div className="expression">
                  <span className="like-count">
                    <img src={likeHeart} alt="좋아요" />
                    {item.like}
                  </span>
                  <span className="comment-count">
                    <img src={likeComment} alt="댓글" />
                    {item.comment}
                  </span>
                </div>
                <button className="more">자세히 보기</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
