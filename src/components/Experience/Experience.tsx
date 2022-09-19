import { useTranslation } from "react-i18next";
import styles from "./Experience.module.scss";
import cn from "classnames/bind";
import { BsCalendar4Week, BsPinMap } from "react-icons/bs";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id={"experience"} className={styles.experience}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("experience_title")}</h2>
        </div>
        <div className={styles.main}>
          <div data-aos="fade-up" className={styles.item}>
            <h3>{t("experience_info1")}</h3>
            <h4>{t("experience_name1")}</h4>
            <div className={styles.list}>
              <p>{t("experience_list11")}</p>
              <p>{t("experience_list12")}</p>
              <p>{t("experience_list13")}</p>
            </div>
            <div className={styles.about}>
              <div>
                <BsCalendar4Week />
                <span>01.2019 – 06.2021</span>
              </div>
              <div>
                <BsPinMap />
                <span>{t("experience_place1")}</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.item}>
            <h3>{t("experience_info2")}</h3>
            <h4>{t("experience_name2")}</h4>
            <div className={styles.list}>
              <p>{t("experience_list21")}</p>
              <p>{t("experience_list22")}</p>
              <p>{t("experience_list23")}</p>
            </div>
            <div className={styles.about}>
              <div>
                <BsCalendar4Week />
                <span>10.2021 – 09.2022</span>
              </div>
              <div>
                <BsPinMap />
                <span>{t("experience_place2")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
