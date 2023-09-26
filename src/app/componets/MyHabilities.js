import React from "react";
import { habilidadesData } from "./Data"; 

const MyHability = ({ icon: Icon, title, description, languages, tools, iconClass }) => {
  return (
    <div className="hblt-single w-full py-2.5 px-5 pb-10">
      <Icon className={`mt-16 w-16 h-16 py-3 mx-auto ${iconClass}`} />
      <h2 className="mt-12 font-bold text-xl my-6">{title}</h2>
      <h3 className="text-base my-6 font-normal">{description}</h3>
      <h4 className="text-lg my-4 font-medium text-cyberpunk">Linguagens que eu ultilizo:</h4>
      <p className="text-base my-5">{languages}</p>
      <h4 className="text-lg font-medium text-cyberpunk">Ferramentas que eu domino:</h4>
      <ul className="my-5">
        {tools.map((tool, index) => (
          <li className="text-base my-2.5" key={index}>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MyHabilities = () => {
  return (
    <div className="lg:flex block max-w-7xl m-auto text-center shadow-xl bg-white text-pretin rounded-2xl relative md:bottom-32 bottom-40">
      {habilidadesData.map((habilidade, index) => (
        <MyHability {...habilidade} key={index} />
      ))}
    </div>
  );
};

export default MyHabilities;
