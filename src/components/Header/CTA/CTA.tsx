// import { FormattedMessage } from "react-intl";
import cv_ru from "../../../assets/CV-ru.pdf";
import cv_en from "../../../assets/CV-en.pdf";
import styles from "./CTA.module.scss";
import { useTranslation } from "react-i18next";

const CTA = ({ currentLocale }: { currentLocale: string }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.cta}>
      <a
        href={currentLocale === "ru" ? cv_ru : cv_en}
        download
        className={"btn"}
      >
        {t("header_CV")}
      </a>
      <a href={"#about"} className={"btn btn-primary"}>
        {t("common_button")}
      </a>
    </div>
  );
};

export default CTA;
