import React from 'react'
import images from '../../data/MyPage'

const albumList = [
  { id: 1, image: images.album.album1},
  { id: 2, image: images.album.album2},
  { id: 3, image: images.album.album3}
]

export default function Album() {
  return (
    <section className="album-wrap">
      <div className="album-head">
        <div className="album-copy">
          <h3 className="album-title">
            등산 앨범
          </h3>
          <p className="album-text">
            산에서의 기억과 풍경을 기록해보세요.
          </p>
        </div>
        <button type="button" className="album-btn" /* onClick={handleOpen} */>
          전체보기
        </button>
      </div>

        <div className="album-grid">
          {albumList.map((item)=> (
            <div className="album-list" key={item.id}>
              <img src={item.image} alt="앨범 이미지" />
            </div>
          )
          )}
        </div>
        
      </section>
  )
}
