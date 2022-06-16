import cn from "classnames/bind";

import styles from "./About.module.scss";
import photo from "../../assets/img-about.png";

const About = () => {
  return (
    <section id={"about"} className={styles.about}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>Get to know</h3>
          <h2>About me</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <img src={photo} alt="img" />
          </div>
          <div className={styles.info}>
            <p>
              My name is Anna, I am 24 years old, I am Junior Front-End
              Developer located in Turkey. I have been learning front-end for
              about 1 year. I am looking to take on work and to increase my
              skills as a Web Developer.{" "}
            </p>
            <p>
              I like learning new technologies and use them to create cool
              things. My personal qualities are ability to achieve goals,
              effective time planning, perseverance, ability to easily maintain
              business and professional relationships, desire for professional
              development.{" "}
            </p>
            <p>
              When I work at every task, I learn something new, I am not afraid
              to ask for help and advice. It is important for me to complete the
              task quickly and effectively. It is important for me not only to
              gain experience, but also to take my place in a team where I can
              be useful, with which I can move into the future, contributing to
              the common deal.
            </p>
            <a href="#contact" className={"btn btn-primary-variant"}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
