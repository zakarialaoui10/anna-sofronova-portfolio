import { IPortfolio } from "../@types/IPortfolio";
import portfolio1 from "../assets/portfolio/portfolio1.jpg";
import portfolio2 from "../assets/portfolio/portfolio2.jpg";
import portfolio3 from "../assets/portfolio/portfolio3.jpg";
import portfolio4 from "../assets/portfolio/portfolio4.jpg";
import portfolio5 from "../assets/portfolio/portfolio5.jpg";
import portfolio6 from "../assets/portfolio/portfolio6.jpg";
import portfolio7 from "../assets/portfolio/portfolio7.jpg";
import portfolio8 from "../assets/portfolio/portfolio8.jpg";
import portfolio9 from "../assets/portfolio/portfolio9.jpg";

export const portfolioData: IPortfolio[] = [
  {
    id: 1,
    name: "Ice-Cream Store App",
    tags: [
      "React",
      "Typescript",
      "Redux Toolkit",
      "Material UI",
      "Tailwind",
      "SCSS",
      "Adaptive",
    ],
    type: "React",
    link: "https://anysofronova.github.io/react-ts-ice-cream-app/",
    github: "https://github.com/anysofronova/react-ts-ice-cream-app",
    img: portfolio1,
  },
  {
    id: 2,
    name: "Perfume Ordering App",
    tags: ["React", "Typescript", "Redux Toolkit", "SCSS", "Adaptive"],
    type: "React",
    img: portfolio2,
    link: "https://anysofronova.github.io/react-marketplace-app/#/",
    github: "https://github.com/anysofronova/react-marketplace-app",
  },
  {
    id: 3,
    name: "Social Network App",
    tags: ["React", "Redux", "SCSS"],
    type: "React",
    img: portfolio3,
    link: "https://anysofronova.github.io/react-social-app/#/",
    github: "https://github.com/anysofronova/react-social-app",
  },
  {
    id: 4,
    name: "Travel App",
    tags: ["React", "SCSS", "Adaptive"],
    type: "React",
    img: portfolio4,
    link: "https://anysofronova.github.io/react-travel-website/",
    github: "https://github.com/anysofronova/react-travel-website",
  },
  {
    id: 5,
    name: "Tic-Tac-Toe App",
    tags: ["Next", "Typescript", "Tailwind", "SCSS", "Adaptive"],
    type: "Next",
    img: portfolio5,
    link: "https://nextjs-tic-tac-toe.vercel.app/",
    github: "https://github.com/anysofronova/nextjs-tic-tac-toe",
  },
  {
    id: 6,
    name: "ToDo App",
    tags: ["React", "SCSS", "Adaptive"],
    type: "React",
    img: portfolio6,
    link: "https://anysofronova.github.io/react-todo-advanced-app/",
    github: "https://github.com/anysofronova/react-todo-advanced-app",
  },
  {
    id: 7,
    name: "Portfolio Landing Page",
    tags: ["HTML", "SCSS", "Adaptive"],
    type: "Landing",
    img: portfolio7,
    link: "https://anysofronova.github.io/Denis_Novik/",
    github: "https://github.com/anysofronova/Denis_Novik",
  },
  {
    id: 8,
    name: "Karelia Travel",
    tags: ["HTML", "SCSS", "Adaptive"],
    type: "Landing",
    img: portfolio8,
    link: "https://anysofronova.github.io/Karelia/",
    github: "https://github.com/anysofronova/Karelia",
  },
  {
    id: 9,
    name: "Calculator App",
    tags: ["React", "SCSS", "Adaptive"],
    type: "React",
    img: portfolio9,
    link: "https://anysofronova.github.io/react-calculator-app/",
    github: "https://github.com/anysofronova/react-calculator-app",
  },
];
