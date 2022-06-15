import cn from "classnames/bind";
import { BsCalendar4Week, BsPinMap } from "react-icons/bs";

import styles from "./Education.module.scss";
import Courses from "./Courses/Courses";

const Education = () => {
  return (
    <section id={"education"} className={styles.education}>
      <div className={cn("container", styles.container)}>
        <div className={styles.title}>
          <h3 className={"text-light"}>Get to know</h3>
          <h2>My Education</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.university}>
            <div className={styles.item}>
              <div className={styles.degree}>
                B.S. in Information Technology
                <div className={styles.topic}>
                  Topic of thesis: Development of methods of constructing
                  compositional embeddings
                </div>
                <div className={styles.gpa}>GPA: 4.00 / 4.00</div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  Peoples' Friendship University
                </div>
                <div className={styles.about}>
                  <div>
                    <BsCalendar4Week />
                    <span>2015 – 2019</span>
                  </div>
                  <div>
                    <BsPinMap />
                    <span>Moscow, Russia</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.degree}>
                M.S. in Information Technology
                <div className={styles.topic}>
                  Topic of thesis: Distributive semantics methods and word
                  embeddings for cross-language analysis of legal documents
                </div>
                <div className={styles.gpa}>GPA: 3.96 / 4.00</div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  Peoples' Friendship University
                </div>
                <div className={styles.about}>
                  <div>
                    <BsCalendar4Week />
                    <span>2019 – 2021</span>
                  </div>
                  <div>
                    <BsPinMap />
                    <span>Moscow, Russia</span>
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
