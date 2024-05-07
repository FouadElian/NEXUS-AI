import React from 'react'
import { LooperCont, Container,Looper1,Looper2 } from './looperElements'
import Marquee from "react-fast-marquee";
const Looper = () => {

 
 
  return (
    <>
      <LooperCont>
    
      
        <Looper1>
        <Marquee
        gradient={false}
        speed={150}
        autoFill={false}
        
        
        style={{ marginLeft: '50px' }} 
        >
         
              <Container> Tag Generation </Container>
              <Container> Customer Support </Container>
              <Container> Legal AI </Container>
              <Container> HealthCare</Container>
              <Container> ChatBot </Container>
              <Container> Sales Booster </Container>
             
              <Container>QA bot </Container>
       
            
          </Marquee>
        </Looper1>
       
   
     

        <Looper2>
        <Marquee
         gradient={false}
         speed={150}
         autoFill={false}
        
        
         direction='right'
         style={{ marginLeft: '50px' }}
 >
            <Container> Tag Generation </Container>
            <Container> sdsfsdf</Container>
            <Container>dfsfdsfsf </Container>
            <Container> sdfsfsdf</Container>
            <Container>Fssf </Container>

            <Container> fsdfsdfsf</Container>
            <Container>fewfa </Container>
            <Container>ewafsfsd </Container>
            <Container>Fssf </Container>
          
          
          </Marquee>
        </Looper2>

      </LooperCont>
    </>
  )
}

export default Looper
