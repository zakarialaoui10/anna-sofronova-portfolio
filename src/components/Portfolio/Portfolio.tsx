import styles from "./Portfolio.module.scss";
import cn from "classnames/bind";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { FormattedMessage } from "react-intl";
import { portfolioData } from "../../data/portfolio-data";

const Portfolio = () => {
  return (
    <section id={"portfolio"} className={styles.portfolio}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>
            <FormattedMessage id={"common_title"} />
          </h3>
          <h2>
            <FormattedMessage id={"portfolio_title"} />
          </h2>
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
