import React from "react";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import HoverIcon from "./HoverIcon"; 

const SocialMedia = ({ variant }) => {
  let socialClass = "";
  if (variant === "sm-footer"){
    socialClass += "flex justify-center";
  }else if (variant === "sm-menu"){
    socialClass += "ml-3";
  }

  return (
    <div className={socialClass}>
      <div className="flex space-x-6 cursor-pointer text-white items-center">
        <HoverIcon href="mailto:contato@mateussantosdev.com" target="_blank" variant={variant}>
          <GoMail className="text-5xl"/>
        </HoverIcon>
        <HoverIcon href="https://api.whatsapp.com/send?phone=558596951897" target="_blank" variant={variant}>
          <BsWhatsapp className="" />
        </HoverIcon>
        <HoverIcon href="https://www.linkedin.com/in/mateus-santos-dev/" target="_blank" variant={variant}>
          <BsLinkedin />
        </HoverIcon>
        <HoverIcon href="https://github.com/sant0ss" target="_blank" variant={variant}>
          <FiGithub />
        </HoverIcon>
      </div>
    </div>
  );
};

export default SocialMedia;
