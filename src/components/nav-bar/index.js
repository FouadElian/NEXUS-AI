import React,{useState,useEffect} from 'react'
import { NavbarContainer,Nav,NavLogo,Icon,MenuItem,NavLinks,Menu,NavButton,NavButtonLink } from './elements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
function Navbar({toggle}) {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }
    ,[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
   
  
  return (
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                NexusAI
            </NavLogo>
            <Icon onClick={toggle}>
                <FaBars/>
            </Icon>
            <Menu>
                <MenuItem>
                    <NavLinks to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        About
                    </NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to='discover'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                   >
                        Discover
                    </NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        Services
                    </NavLinks>
                </MenuItem>
                <MenuItem>
                    <NavLinks to='signup'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        Sign Up
                    </NavLinks>
                </MenuItem>
            </Menu>
            <NavButton>
                <NavButtonLink to="/signin">
                    Sign In
                </NavButtonLink>
            </NavButton>
        </NavbarContainer>
    </Nav>
  )
}

export default Navbar
