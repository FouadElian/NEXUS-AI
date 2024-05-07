import React from 'react'
import { SideContainer,Icon,CloseIcon,SideBarLink,SideButtonWrap,SideBarWrapper,SideMenu,SideButtonLink } from './sideElements'
const SideBar = ({isOpen,toggle}) => {
  return (
    <SideContainer isOpen={isOpen} onClick={toggle}> {/* here this is to make sure the container closes when we click somewhere*/}
      <Icon onClick={toggle}> {/* here this is to make sure the icon closes when we click it*/}
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideMenu>
        <SideButtonWrap>
          <SideButtonLink to="/signin" onClick={toggle}> 
            Sign In
          </SideButtonLink>
        </SideButtonWrap>
    </SideBarWrapper>
    </SideContainer>
  )
}

export default SideBar
