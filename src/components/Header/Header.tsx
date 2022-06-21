import cn from "classnames/bind";

import styles from "./Header.module.scss";
import MyPhoto from "../../assets/img-home.png";
import Socials from "./Socials/Socials";
import CTA from "./CTA/CTA";
import { useTheme } from "../../hooks/useTheme";
import { BsMoon, BsSun } from "react-icons/bs";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className={styles.header} id={"home"}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3>Hello I'm</h3>
          <h1>Anna Sofronova</h1>
          <h3 className={cn("text-light")}> FrontEnd Developer</h3>
        </div>
        <CTA />
        <div className={styles.me}>
          <div className={styles.social}>
            <Socials />
          </div>
          <div className={styles.photo}>
            <img src={MyPhoto} alt="me" />
          </div>
          <div className={styles.scrollDown}>
            <a href={"#contact"}>Scroll Down</a>
          </div>
        </div>
      </div>
      <div
        className={styles.switch}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </div>
    </header>
  );
};

export default Header;
