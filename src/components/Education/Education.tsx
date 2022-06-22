import cn from "classnames/bind";
import { BsCalendar4Week, BsPinMap } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

import styles from "./Education.module.scss";
import Courses from "./Courses/Courses";

const Education = () => {
  return (
    <section id={"education"} className={styles.education}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>
            <FormattedMessage id={"common_title"} />
          </h3>
          <h2>
            <FormattedMessage id={"education_title"} />
          </h2>
        </div>
        <div className={styles.main}>
          <div className={styles.university}>
            <div className={styles.item}>
              <div className={styles.degree}>
                <FormattedMessage id={"education_bachelor_name"} />
                <div className={styles.topic}>
                  <FormattedMessage id={"education_bachelor_topic"} />
                </div>
                <div className={styles.gpa}>
                  <FormattedMessage id={"education_bachelor_gpa"} />
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  <FormattedMessage id={"education_university_name"} />
                </div>
                <div className={styles.about}>
                  <div>
                    <BsCalendar4Week />
                    <span>2015 – 2019</span>
                  </div>
                  <div>
                    <BsPinMap />
                    <span>
                      <FormattedMessage id={"education_university_place"} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.degree}>
                <FormattedMessage id={"education_magistracy_name"} />
                <div className={styles.topic}>
                  <FormattedMessage id={"education_magistracy_topic"} />
                </div>
                <div className={styles.gpa}>
                  <FormattedMessage id={"education_magistracy_gpa"} />
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  <FormattedMessage id={"education_university_name"} />
                </div>
                <div className={styles.about}>
                  <div>
                    <BsCalendar4Week />
                    <span>2019 – 2021</span>
                  </div>
                  <div>
                    <BsPinMap />
                    <span>
                      <FormattedMessage id={"education_university_place"} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.courses}>
          <Courses />
        </div>
      </div>
    </section>
  );
};

export default Education;
