import React from "react";
import { Link } from 'react-scroll';

const HoverNav = ({ target, children, altura }) => {
    return(
        <li className="pb-4 cursor-pointer hover:text-pretin">
            <Link activeClass="active" to={target} spy={true} smooth={true} offset={altura} duration={500} >{children}</Link>
        </li>
    )
}

export default HoverNav;