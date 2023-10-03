import { FaLayerGroup, FaCode } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

export const habilidadesData = [
    {
      icon: FaLayerGroup,
      title: "DESIGNER",
      description: "Valorizo simplicidade, padrões limpos e interações planejadas em design.",
      whatIUse: "O que eu gosto de fazer",
      languages: "UX, UI, Web, Logos",
      tools: [
        "Photoshop",
        "Illustrator",
        "Figma",
        "Font Awesome",
        "Elementor",
      ],
      iconClass: "icon-design",
    },
    {
        icon: FaCode,
        title: "FRONT-END",
        description: "Prezo eficiência em conteúdo, design e interações para experiências web cativantes.",
        whatIUse: "Linguagens que eu utilizo",
        languages: "HTML, CSS, SASS, LESS, JavaScript",
        tools: [
          "Angular",
          "Bootstrap",
          "React",
          "Next.js",
          "Typerscript",
          "Gulp",
          "jQuery",
          "Wordpress",
        ],
        iconClass: "icon-frontend",
      },
      {
        icon: BsGearFill,
        title: "BACK-END",
        description: "Valorizo conteúdo simples, design claro e interações intencionais, integrando dados para funcionalidades robustas.",
        whatIUse: "Linguagens que eu utilizo",
        languages: "PHP",
        tools: ["Laravel", "Slim", "MongoDb", "MySql", "Wordpress"],
        iconClass: "icon-backend",
      },
  ];
  