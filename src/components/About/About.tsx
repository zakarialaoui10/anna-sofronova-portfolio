import cn from "classnames/bind";

import styles from "./About.module.scss";
import photo from "../../assets/img-about.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id={"about"} className={styles.about}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("about_title")}</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.info1} data-aos="fade-left">
            <p>{t("about_info1")}</p>
            <p>{t("about_info2")}</p>
          </div>
          <div className={styles.image} data-aos="fade-right">
            <img src={photo} alt="img" />
          </div>
          <div className={styles.info2} data-aos="fade-left">
            <p>{t("about_info3")}</p>
            <a href={"#contact"} className={"btn btn-primary-variant"}>
              {t("common_button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
