import styles from "./Portfolio.module.scss";
import cn from "classnames/bind";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { portfolioData } from "../../data/portfolio-data";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id={"portfolio"} className={styles.portfolio}>
      <div className={cn("container", styles.container)} data-aos="fade-up">
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("portfolio_title")}</h2>
        </div>
        <div className={styles.main}>
          {portfolioData.map((i) => (
            <PortfolioItem key={i.id} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
