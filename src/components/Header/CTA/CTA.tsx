import cv from "../../../assets/cv.pdf";

import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={cv} download className={"btn"}>
        Download CV
      </a>
      <a href={"#contact"} className={"btn btn-primary"}>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
