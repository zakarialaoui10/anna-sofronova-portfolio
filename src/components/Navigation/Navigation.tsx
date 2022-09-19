import {
  AiOutlineArrowUp,
  AiOutlineExperiment,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { RiComputerLine, RiServiceLine } from "react-icons/ri";
import { TbSchool } from "react-icons/tb";

import styles from "./Navigation.module.scss";
import useScrollspy from "../../hooks/useScrollspy";

const Navigation = () => {
  const ids = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "portfolio",
    "contact",
  ];
  const { activeId, scroll } = useScrollspy(ids, 2);
  return (
    <nav className={styles.nav}>
      {ids.map((i) => (
        <a
          href={`#${i}`}
          key={i}
          className={i === activeId ? styles.active : ""}
        >
          {i === "home" && <AiOutlineHome />}
          {i === "about" && <AiOutlineUser />}
          {i === "education" && <TbSchool />}
          {i === "experience" && <AiOutlineExperiment />}
          {i === "skills" && <RiServiceLine />}
          {i === "portfolio" && <RiComputerLine />}
          {i === "contact" && <AiOutlineMessage />}
        </a>
      ))}
      {scroll > 800 && (
        <div className={styles.up}>
          <a href={"#home"}>
            <AiOutlineArrowUp />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
