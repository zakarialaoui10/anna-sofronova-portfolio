import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.linkedin.com/in/anna-sofronova-9975a81ab/"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/anysofronova"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://t.me/Anna_Fawn" target={"_blank"} rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
};

export default Socials;
