import {
  AiOutlineExperiment,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

import styles from "./Navigation.module.scss";
import { useState } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("/#");
  return (
    <nav className={styles.nav}>
      <a
        href={"/#"}
        className={activeNav === "/#" ? styles.active : ""}
        onClick={() => setActiveNav("/#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? styles.active : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? styles.active : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <AiOutlineExperiment />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? styles.active : ""}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? styles.active : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navigation;
