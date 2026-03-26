import React, { useEffect, useState } from 'react';
import courseBg from '../../assets/img/hotspot/background-course-m.png';

export default function PlaceCardPhoto() {
  const [photoList, setPhotoList] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}photo.json`)
      .then((res) => res.json())
      .then((data) => {
        setPhotoList(data);
      });
  }, []);

  const openModal = (item) => {
    setSelectedPhoto(item);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <section id="photo">
        <div className="photo-area">
          {photoList.map((photoZone) => (
            <div className="swiper-slide" key={photoZone.id}>
              <div className="photo-slide" onClick={() => openModal(photoZone)}>
                <img src={photoZone.images[0]} alt={photoZone.title} />
                <div className="photo-text">
                  <span className="photo-loca">{photoZone.title}</span>
                  <span className="photo-desc">{photoZone.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedPhoto && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>

          <div className="photo-modal">
            <button type="button" className="close-btn" onClick={closeModal}>
              ✕
            </button>

            <div className="photo-modal-inner">
              <div className="photo-visual">
                <div className="photo-visual-frame">
                  <img
                    className="photo"
                    src={selectedPhoto.images[0]}
                    alt={selectedPhoto.title}
                  />
                </div>
              </div>

              <div className="photo-info-panel">
                <div className="photo-head">
                  <span className="photo-badge">PHOTO SPOT</span>
                  <h2>{selectedPhoto.title}</h2>
                  <p>{selectedPhoto.desc}</p>
                </div>

                <div className="photo-info-card spot-card">
                  <span className="info-label">포토존 소개</span>
                  <h3>{selectedPhoto.spot}</h3>
                  <p>{selectedPhoto.intro}</p>
                </div>

                <div className="photo-info-grid">
                  <div className="photo-info-card compact">
                    <span className="info-label">추천 시간</span>
                    <p className="info-strong">{selectedPhoto.time}</p>
                  </div>

                  <div className="photo-info-card compact">
                    <span className="info-label">촬영 포인트</span>
                    <p>{selectedPhoto.tip}</p>
                  </div>
                </div>
              </div>
            </div>

            <img className="photo-modal-deco" src={courseBg} alt="" />
          </div>
        </>
      )}
    </>
  );
}