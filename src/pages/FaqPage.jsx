import React, { useState } from 'react'
import Hero from "../components/Hero"
import '../css/faq.css'
import images, { faqData } from '../data/Faq'
import { ChevronDown } from 'lucide-react'

export default function FaqPage() {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="faqpage-wrap">
      <div className="faqPage">
        <Hero
          video="/video/FaqPage.mp4"
          titleImg="/img/FAQ/h1.png"
          subtitle="산타가 답해주는 자주 묻는 질문"
        />
      </div>

      <div className="content">
        <div className="title">
          <img src={images.title} alt="title" />
          <p>서비스 이용 중 궁금한 점을 확인해보세요</p>
        </div>

        <div className="inner">
          <div className="faqs">
            {faqData.map((item) => {
              const isOpen = openId === item.id

              return (
                <div className="faq-item" key={item.id}>
                  <button
                    className="faq-question"
                    onClick={() => handleToggle(item.id)}
                    type="button"
                  >
                    <div className="text">
                      <span className="q-badge">Q</span>
                      <h3>{item.question}</h3>
                    </div>

                    <ChevronDown className={`down ${isOpen ? 'active' : ''}`} />
                  </button>

                  <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <figure className="bottom">
          <img src={images.bottom} alt="" />
        </figure>
      </div>
    </div>
  )
}