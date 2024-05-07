import React from 'react'
import Video from '../../video/video.mp4'
import {motion} from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { HeroCont, HeroImg, VideoBg ,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './heroElements'
import { useState } from 'react';
import { Button } from '../buttonElement';
const HeroSection = () => {
    const [hover, setHover] = useState(false);
  
    const onHover = () => {
    setHover(!hover);
    }
    return (
    <HeroCont>
      <HeroImg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroImg>
        <HeroContent>
            <HeroH1>
                <Typewriter 
                    
                    words={['Welcome to the Future']}
                    loop={1}
                    cursor
                    cursorStyle='...'
                    typeSpeed={150}
                />
              </HeroH1>
            <HeroP>
              <motion.p
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Sign up for a new account today and receive a new free personal assistant AI.
              </motion.p>
             
              </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}  primary='true' dark='true' >Start Now {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroCont>
  )
}

export default HeroSection
