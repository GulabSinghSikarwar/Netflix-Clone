import React from 'react'
import NetFlixLogo from '../resources/images/logo.png'
import User from '../resources/images/user.png'
import styled from './Nav.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Nav() {

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const  [showProfile ,setShowProfile]=useState(true);
  const navigateToHome=()=>{
    console.log(showProfile);

    setShowProfile((state)=>{
      return (!state)

    })
    return navigate('/');

  }
  const navigateToProfile=()=>{
    console.log(showProfile);
    
    
    setShowProfile((state)=>{
      return (!state)
      
    })
    return navigate('/profile');
  }


  const TranstionNavBar = () => {
    console.log("call");
    if (window.scrollY > 100) {
      setShow(true)
    }
    else {
      setShow(false)
    }




  }
  useEffect(() => {
    window.addEventListener("scroll", TranstionNavBar)
    return () => window.removeEventListener("scroll", TranstionNavBar)

  }, [window.scrollY])
  // window.addEventListener('scroll', TranstionNavBar);


  return (
    <div className={(show) ? styled.nav_black : styled.nav}>
      <div className={styled.nav_contents}>

        <img onClick={() => navigate('/')} className={styled.nav_logo} src={NetFlixLogo} />
        <img onClick={(showProfile)?navigateToProfile:navigateToHome } className={styled.nav_avtar} src={User} />


        {/* <h1>This Is A NavBar</h1> */}
      </div>
    </div>

  )
}

export default Nav