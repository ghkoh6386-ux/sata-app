import React from 'react'
import Hero from "../components/Hero"
import '../css/safePage.css'
import safetitle from '../assets/img/safe/safetitle.png'

const emergency = [
  { title: '멈추기', desc: '무작정 이동 금지', icon: '/img/safe/hand.png' },
  { title: '위치 확보', desc: '위치 확인하기', icon: '/img/safe/gps.png' },
  { title: '구조 요청', desc: '119에 신고하기', icon: '/img/safe/phone-call.png' }
]

const checklist = [
  { title: '준비물 체크', desc: '물, 간식, 랜턴, 보조배터리 준비', icon: '/img/safe/checklist.png', character: '/img/safe/card1.png' },
  { title: '날씨 확인', desc: '비 · 강풍 예보 시 등산 취소', icon: '/img/safe/rain.png', character: '/img/safe/card2.png' },
  { title: '코스 확인', desc: '난이도와 거리 · 하산 시간 체크', icon: '/img/safe/mountain.png', character: '/img/safe/card3.png' }
]

const watch = [
  { title: '단독 산행 주의', desc: '2인 이상 동반, 산타할사람 이용하기', icon: '/img/safe/people.png' },
  { title: '위험 구간 조심', desc: '낙석 · 급경사 구간은 주의하기', icon: '/img/safe/warning1.png' },
  { title: '체온 유지', desc: '바람막이와 여벌 옷을 챙기기', icon: '/img/safe/temperature.png' }
]

const safetyRules = [
  { text: '지름길 이용 금지', icon: '/img/safe/cancel.png' },
  { text: '정해진 등산로 이탈 금지', icon: '/img/safe/cancel.png' },
  { text: '해 지기 전 하산', icon: '/img/safe/warning1.png' },
  { text: '체력 무리 금지', icon: '/img/safe/warning1.png' }
]

export default function SafePage() {
  return (
    <div className="safepage">
      <Hero
        video="/video/SafePage.mp4"
        titleImg="/img/safe/h1.png"
        subtitle="산타가 알려주는 등산 안전 가이드"
      />

      <section className="safe-section">
        <div className="safe-inner">
          <div className="safe-intro">
            <img className="safe-title" src={safetitle} alt="" />

            <div className="safe-text">
              <p>
                침착하게 <span>멈추고</span>, <span>위치</span>를 확인한 뒤
                <span> 구조</span>를 요청하세요
              </p>
            </div>

            <div className="safe-character">
              <img src="/img/safe/move-santa.gif" alt="산타 캐릭터" />
            </div>
          </div>

          <section className="safe-block">
            <div className="safe-badge">조난 시 행동</div>

            <div className="safe-cardss">
              {emergency.map((item) => (
                <article className="safe-card" key={item.title}>
                  <div className="safe-head">
                    <span className="safe-icon">
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="safe-block">
            <div className="safe-badge">등산 안전수칙</div>

            <div className="safe-cardss">
              {checklist.map((item) => (
                <article className="has-character" key={item.title}>
                  <div className="safe-head">
                    <span className="safe-icon">
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>

                  <p className='desc'>{item.desc}</p>

                  {item.character && (
                    <div className="card-character">
                      <img src={item.character} alt="" />
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="safe-careful">
              {watch.map((item) => (
                <article className="careful-card" key={item.title}>
                  <div className="safe-head">
                    <span className="safe-icon">
                      <img src={item.icon} alt={item.title} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="safe-rule">
            <div className="safe-badge">등산 중 주의사항</div>

            <div className="safe-ruless">
              <ul className="safe-rules-list">
                {safetyRules.map((item) => (
                  <li key={item.text}>
                    <img src={item.icon} alt="" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

