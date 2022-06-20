import { useEffect, useState } from "react";
import {
  AiOutlineExperiment,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { RiComputerLine, RiServiceLine } from "react-icons/ri";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("/#");
  const [scroll, setScroll] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScroll(-bodyOffset.top);
    if (scroll < 780) setActiveNav("/#");
    else if (scroll < 1500) setActiveNav("#about");
    else if (scroll < 2300) setActiveNav("#education");
    else if (scroll < 3100) setActiveNav("#skills");
    else if (scroll < 3800) setActiveNav("#portfolio");
    else setActiveNav("#contact");
  };

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
        href={"#about"}
        className={activeNav === "#about" ? styles.active : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href={"#education"}
        className={activeNav === "#education" ? styles.active : ""}
        onClick={() => setActiveNav("#education")}
      >
        <AiOutlineExperiment />
      </a>
      <a
        href={"#skills"}
        className={activeNav === "#skills" ? styles.active : ""}
        onClick={() => setActiveNav("#skills")}
      >
        <RiServiceLine />
      </a>
      <a
        href={"#portfolio"}
        className={activeNav === "#portfolio" ? styles.active : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <RiComputerLine />
      </a>
      <a
        href={"#contact"}
        className={activeNav === "#contact" ? styles.active : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navigation;
