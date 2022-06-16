import styles from "./Skills.module.scss";
import cn from "classnames/bind";

const Skills = () => {
  return (
    <section id={"skills"} className={styles.skills}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>Get to know</h3>
          <h2>My Skills</h2>
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
              <li>Time management</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Problem-solving</li>
              <li>Teamwork</li>
              <li>Creativity</li>
              <li>Interpersonal skills</li>
              <li>Attention to detail</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
