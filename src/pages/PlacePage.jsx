import React from 'react'
import Hero from "../components/Hero"
import '../css/placePage.css'
import cafe from '../assets/img/hotspot/cafe.png'
import rest from '../assets/img/hotspot/rest.png'
import photo from '../assets/img/hotspot/photo.png'
import PlaceCard from '../components/place/PlaceCard'
import PlaceCardRest from '../components/place/PlaceCardRest'
import PlaceCardPhoto from '../components/place/PlaceCardPhoto'
import { useRef } from "react";

export default function PlacePage() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollTo = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="placepage">
      <Hero
        video="/video/PlacePage.mp4"
        titleImg="/img/hotspot/h1.png"
        subtitle="산타가 찾은 등산 후 들르는 핫플"
      />

      <div className="find">
        <button onClick={() => scrollTo(section1)} className="cafe">카페</button>
        <button onClick={() => scrollTo(section2)} className="rest">맛집</button>
        <button onClick={() => scrollTo(section3)} className="photo">포토존</button>
      </div>

      <section className="sec-cafe" ref={section1}>
        <div className="inner">
          <div className="text-area">
            <img className="hotspot" src={cafe} alt="hotspot-cafe" />
            <p className="sub-title">산행 중 잠깐 쉬어가기 좋은 감성 카페 모음</p>
          </div>
          <PlaceCard />
        </div>
      </section>

      <section className="sec-rest" ref={section2}>
        <div className="inner">
          <div className="text-area">
            <img className="hotspot" src={rest} alt="hotspot-rest" />
            <p className="sub-title">정상 찍고 내려오면 제일 먼저 생각나는 든든한 한 끼</p>
          </div>
          <PlaceCardRest />
        </div>
      </section>

      <section className="sec-photo" ref={section3}>
        <div className="inner">
          <div className="text-area photo-head">
            <img className="hotspot" src={photo} alt="hotspot-photo" />
            <p className="sub-title">산에서 만나는 최고의 포토타임</p>
          </div>
        </div>

        <div className="photo-full">
          <PlaceCardPhoto />
        </div>
      </section>
    </div>
  )
}