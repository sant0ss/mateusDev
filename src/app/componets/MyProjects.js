import React from 'react';
import Image from "next/image";
import GameImg from "../images/GAME-PROJECT.png"
import InstImg from "../images/INST-IMG.png"
import SerImg from "../images/SERVICE.png"
import StaImg from "../images/STATIC.png"

const projectData = [
  { id: 1, imgSrc: GameImg, altText: "Game Project", link_site: "https://sant0ss.github.io/game_page/",
  about_project:"Um aplicativo de jogo emocionante para entusiastas, repleto de desafios divertidos."},
  { id: 2, imgSrc: InstImg, altText: "Institu Project", link_site: "https://sant0ss.github.io/institucion_page/",
  about_project:"Um site que destaca a missão e os valores de uma organização."},
  { id: 3, imgSrc: SerImg, altText: "Service Project", link_site: "https://sant0ss.github.io/service_page/",
  about_project:"Um serviço confiável, caracterizado por qualidade e confiança."},
  { id: 4, imgSrc: StaImg, altText: "Static Project", link_site: "https://sant0ss.github.io/static_page/",
  about_project:"Um serviço eficiente que atende às necessidades dos clientes."},
];


function MyProjects() {
  const items = projectData.map((project) => (
    <div className="proj-box-single m-auto w-3/4 drop-shadow relative" key={project.id}>
    <Image src={project.imgSrc} alt={project.altText} className="m-auto rounded-xl shadow-lg" />
    <div className="overlay rounded-xl">
      <p className='text-white text-center w-3/4 py-4 text-base'>{project.about_project}</p>
      <a href={project.link_site} className="btn-link" target='_blank'>Visite o Site</a>
    </div>
  </div>
  ));

  return (
    <div className="mt-12 grid xl:grid-cols-2 grid-cols-1 gap-12 lg:mx-24 mx-0">
      {items}
    </div>
  );
}

export default MyProjects;

