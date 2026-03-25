import React from 'react'

export default function Hero({ video, titleImg, subtitle }) {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1><img src={titleImg} alt="title" /></h1>
        <h2>{subtitle}</h2>
      </div>
    </section>
  )
}
