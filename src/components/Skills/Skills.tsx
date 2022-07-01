import styles from "./Skills.module.scss";
import cn from "classnames/bind";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id={"skills"} className={styles.skills}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("skills_title")}</h2>
        </div>
        <div className={styles.main}>
          <div data-aos="fade-up">
            <h3>Hard Skills</h3>
            <ul>
              <li>HTML5 (Responsive, Adaptive, BEM)</li>
              <li>CSS3 (SASS/SCSS, styles-components, CSS Modules)</li>
              <li>JavaScript (es6+)</li>
              <li>TypeScript</li>
              <li>React (Router, Hooks, React Hook Form, Devtools)</li>
              <li>Redux (Toolkit, Devtools)</li>
              <li>Axios, REST API, JSON</li>
              <li>Material UI, Tailwind, Ant Design</li>
              <li>Prettier, ESLint</li>
              <li>Npm / Yarn</li>
              <li>Git</li>
            </ul>
          </div>
          <div data-aos="fade-up">
            <h3>Soft Skills</h3>
            <ul>
              {Array(8)
                .fill("0")
                .map((i, idx) => (
                  <li key={idx}>{t(`skills_soft_${idx + 1}`)} </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
