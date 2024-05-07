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
             
              <Container>Data Detective</Container>
              <Container>Conversational Agent</Container>
              <Container>Messaging Mentor</Container>
       
            
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
            <Container> Attribute Assigmnent</Container>
            <Container>Categorization engine </Container>
            <Container> Response labeling</Container>
            <Container>Message clarification </Container>

            <Container> Sales booster</Container>
            <Container>Conversation tagging</Container>
            <Container>Utterance categorization</Container>
            <Container>Interaction tagging</Container>
          
          
          </Marquee>
        </Looper2>

      </LooperCont>
    </>
  )
}

export default Looper
