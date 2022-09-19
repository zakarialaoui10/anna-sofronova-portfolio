import cn from "classnames/bind";
import { BsCalendar4Week, BsPinMap } from "react-icons/bs";

import styles from "./Education.module.scss";
import Courses from "./Courses/Courses";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Education = () => {
  const { t } = useTranslation();
  const currentLocale = Cookies.get("i18next") || "en";
  return (
    <section id={"education"} className={styles.education}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("education_title")}</h2>
        </div>
        <div className={styles.main} data-aos="fade-up">
          <div className={styles.university}>
            <div className={styles.item}>
              <div className={styles.degree}>
                {t("education_bachelor_name")}
                <div className={styles.topic}>
                  {t("education_bachelor_topic")}
                </div>
                <div className={styles.gpa}>{t("education_bachelor_gpa")}</div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  <a href={currentLocale === 'ru' ? 'https://www.rudn.ru/' : 'https://eng.rudn.ru/'} target={"_blank"}
                     rel="noreferrer">{t("education_university_name")}</a>
                </div>
                <div className={styles.about}>
                  <div>
                    <BsCalendar4Week />
                    <span>2015 – 2019</span>
                  </div>
                  <div>
                    <BsPinMap />
                    <span>{t("education_university_place")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.degree}>
                {t("education_magistracy_name")}
                <div className={styles.topic}>
                  {t("education_magistracy_topic")}
                </div>
                <div className={styles.gpa}>
                  {t("education_magistracy_gpa")}
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  <a href={currentLocale === 'ru' ? 'https://www.rudn.ru/' : 'https://eng.rudn.ru/'} target={"_blank"}
                     rel="noreferrer">{t("education_university_name")}</a>
                </div>
                <div className={styles.about}>
                  <div>
                    <BsCalendar4Week />
                    <span>2019 – 2021</span>
                  </div>
                  <div>
                    <BsPinMap />
                    <span>{t("education_university_place")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.courses} data-aos="fade-up">
          <Courses />
        </div>
      </div>
    </section>
  );
};

export default Education;
