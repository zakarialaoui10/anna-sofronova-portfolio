import styles from "./PortfolioItem.module.scss";
import { IPortfolio } from "../../../@types/IPortfolio";

const PortfolioItem = ({ img, name, tags, github, link }: IPortfolio) => {
  return (
    <div className={styles.item} data-img={img}>
      <div className={styles.image}>
        <img src={img} alt="Portfolio Item" />
      </div>
      <h3>{name}</h3>
      <div className={styles.links}>
        <a href={link} target="_blank" rel="noreferrer">
          DEMO
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className={styles.tags}>
        {tags.map((i, idx) => (
          <div className={styles.tag} key={idx}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
