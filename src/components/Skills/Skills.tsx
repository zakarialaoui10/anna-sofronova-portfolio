import styles from "./Skills.module.scss";
import cn from "classnames/bind";
import { FormattedMessage } from "react-intl";

const Skills = () => {
  return (
    <section id={"skills"} className={styles.skills}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>
            <FormattedMessage id={"common_title"} />
          </h3>
          <h2>
            <FormattedMessage id={"skills_title"} />
          </h2>
        </div>
        <div className={styles.main}>
          <div>
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
          <div>
            <h3>Soft Skills</h3>
            <ul>
              <li>
                <FormattedMessage id={"skills_soft_1"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_2"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_3"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_4"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_5"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_6"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_7"} />
              </li>
              <li>
                <FormattedMessage id={"skills_soft_8"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
