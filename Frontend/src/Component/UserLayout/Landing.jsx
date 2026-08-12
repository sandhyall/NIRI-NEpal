import React from 'react'
import Hero from '../Common/Hero'
import About from '../../Pages/About'
import Whattodo from '../Common/Whattodo'
import Impact from '../Common/OurImapct'
import Events from '../Common/Event'
import News from '../Common/News'
import CTA from '../../Pages/Cta'

function Landing() {
  return (
    <div>
        <Hero/>
        <About/>
        <Whattodo/>
        <Impact/>
        <Events/>
        <News/>
        <CTA/>
        
    </div>
  )
}

export default Landing