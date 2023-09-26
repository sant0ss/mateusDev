import React from 'react';
import Image from "next/image";
import logo from "../images/sant0ss-white.png"
import MenuMobile from "../componets/mobile/MenuMobile";

export default function Header() {
  return(

      <div className="lados flex justify-between mt-12">
        
        <MenuMobile />

        <a href='/'>
        <Image src={logo} alt="logo" className="w-28 h-6" />
        </a>
        
      </div>

  )
}     