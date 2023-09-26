import React from "react";
import HoverNav from "../HoverNav";

import SocialMedia from "../SocialMedia";

export function Menu() {
    return (
      <nav className="menuToggle">
        <ul> 
          <HoverNav target="habilidades" altura={-200}>
					  Habilidades
          </HoverNav>
          <HoverNav target="projetos" altura={50}>
					  Projetos
          </HoverNav>
					<HoverNav target="contato">
            Entre em Contato
          </HoverNav>
          <SocialMedia variant="sm-menu"/>
				</ul>
      </nav>
    );
  }
  