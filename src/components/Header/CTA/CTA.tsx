import { FormattedMessage } from "react-intl";
import cv from "../../../assets/cv.pdf";
import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={cv} download className={"btn"}>
        <FormattedMessage id={"header_CV"} />
      </a>
      <a href={"#about"} className={"btn btn-primary"}>
        <FormattedMessage id={"common_button"} />
      </a>
    </div>
  );
};

export default CTA;
