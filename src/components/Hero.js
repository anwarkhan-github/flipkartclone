import React from 'react'

function Hero() {
    const hero = { 
        backgroundImage : "url('flipkartimgs/hero.jpg')",
        width: '99%',
        height : '280px'
    }
  return (
    <div>
      <div className="hero-box flex justify-center items-center mt-2">

        <div className="main-hero-box bg-cover" style={hero}></div>
      </div>
    </div>
  )
}

export default Hero
