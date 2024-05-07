import React from 'react'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './serviceElements';
import Icon1 from '../../images/undraw_firmware_re_fgdy.svg';
import Icon2 from '../../images/undraw_stranded_traveler_pdbw.svg';
import Icon3 from '../../images/undraw_chat_bot_re_e2gj.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Our Services
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Create the Impossible</ServicesH2>
            <ServicesP>We help you in creating new Innovative technologies</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Access from Anywhere</ServicesH2>
            <ServicesP>Access your account from anywhere in the World with Wifi</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>Weekly meetings with our Experts.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
