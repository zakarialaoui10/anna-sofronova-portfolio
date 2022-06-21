import styles from "./Portfolio.module.scss";
import cn from "classnames/bind";
import portfolio1 from "../../assets/portfolio1.webp";
import portfolio2 from "../../assets/portfolio2.webp";
import portfolio3 from "../../assets/portfolio3.webp";
import portfolio4 from "../../assets/portfolio4.webp";
import portfolio5 from "../../assets/portfolio5.webp";
import portfolio6 from "../../assets/portfolio6.webp";
import portfolio7 from "../../assets/portfolio7.webp";
import portfolio8 from "../../assets/portfolio8.webp";
import portfolio9 from "../../assets/portfolio9.webp";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

export type Item = {
  id: number;
  name: string;
  tags: string[];
  type: string;
  link: string;
  github: string;
  img?: string;
};
const portfolioItems: Item[] = [
  {
    id: 1,
    name: "Ice-Cream Store App",
    tags: [
      "React",
      "Typescript",
      "Toolkit",
      "Material UI",
      "Tailwind",
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
    tags: ["React", "SCSS"],
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
    tags: ["SCSS", "Adaptive"],
    type: "Landing",
    img: portfolio7,
    link: "https://anysofronova.github.io/Denis_Novik/",
    github: "https://github.com/anysofronova/Denis_Novik",
  },
  {
    id: 8,
    name: "Karelia Travel",
    tags: ["SCSS", "Adaptive"],
    type: "Landing",
    img: portfolio8,
    link: "https://anysofronova.github.io/Karelia/",
    github: "https://github.com/anysofronova/Karelia",
  },
  {
    id: 9,
    name: "Calculator App",
    tags: ["React", "SCSS"],
    type: "React",
    img: portfolio9,
    link: "https://anysofronova.github.io/react-calculator-app/",
    github: "https://github.com/anysofronova/react-calculator-app",
  },
];

const Portfolio = () => {
  return (
    <section id={"portfolio"} className={styles.portfolio}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>Get to know</h3>
          <h2>My Portfolio</h2>
        </div>
        <div className={styles.main}>
          {portfolioItems.map((i) => (
            <PortfolioItem key={i.id} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
