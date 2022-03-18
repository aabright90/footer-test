import React, { useState, useEffect } from "react";
import DesktopView from './views/DesktopView'
import MobileView from './views/MobileView'

const Footer = ({ desktopFooter, mobileFooter }) => {

  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    const width = window.screen.width
    // Capture screen width px on render
    setScreenWidth(width)
  },[])

  const renderViews = () => {
    // displays views based on screen width
    if(screenWidth < 481) {
      return <MobileView data={mobileFooter} />
    } else {
      return <DesktopView data={desktopFooter}/>
    }
  }

  return (
    <footer className='footer'>
      {renderViews()}
    </footer>
  );
};

export default Footer;