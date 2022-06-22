import cn from "classnames/bind";
import { FormattedMessage } from "react-intl";

import styles from "./About.module.scss";
import photo from "../../assets/img-about.png";

const About = () => {
  return (
    <section id={"about"} className={styles.about}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>
            <FormattedMessage id={"common_title"} />
          </h3>
          <h2>
            <FormattedMessage id={"about_title"} />
          </h2>
        </div>
        <div className={styles.main}>
          <div className={styles.info1}>
            <p>
              <FormattedMessage id={"about_info1"} />
            </p>
            <p>
              <FormattedMessage id={"about_info2"} />
            </p>
          </div>
          <div className={styles.image}>
            <img src={photo} alt="img" />
          </div>
          <div className={styles.info2}>
            <p>
              <FormattedMessage id={"about_info3"} />
            </p>
            <a href={"#contact"} className={"btn btn-primary-variant"}>
              <FormattedMessage id={"common_button"} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
