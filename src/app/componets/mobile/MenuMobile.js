import React from "react";
import useMenuAnimation from "./Animation"
import { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { Menu } from "./Menu";


export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);
  
    const scope = useMenuAnimation(isOpen);
  
    return (
      <div ref={scope}>
        <Menu />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      </div>
    );
}
