import React, {useState} from 'react'
import SideBar from '../components/side-bar';
import NavBar from '../components/nav-bar';
import HeroSection from '../components/hero';
import Info from '../components/info';
import { obj1 } from '../components/info/data';
import { obj2 } from '../components/info/data';
import { obj3  } from '../components/info/data';
import Services from '../components/services';
import Footer from '../components/footer';
import Looper from '../components/looper_section/looper';
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const  toggle = () => {
        setIsOpen(!isOpen);
    }
  ;
    
    return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle} />
      <HeroSection />
      <Looper />
      <Info {...obj1} /> 
      <Info {...obj2}/>
      <Services />
      <Info {...obj3}/>
      <Footer />

    </>
  )
};
 
export default Home
