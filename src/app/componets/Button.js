import React from "react";
import { BiRocket } from "react-icons/bi";

export default function Button({ variant, link }) {
  let buttonClass = "py-4 px-8 flex rounded-full border-4 border-green text-white";
  if (variant === "bt-header") {
    buttonClass += "sm:w-max w-5/7";
  } else if (variant === "bt-contact") {
    buttonClass += " w-max m-auto";
  }

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="str-prj">
      <button className={buttonClass} onClick={handleClick}>
        <BiRocket className="text-2xl mr-2" /> Vamos começar hoje
      </button>
    </div>
  );
}
