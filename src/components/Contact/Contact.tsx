import styles from "./Contact.module.scss";
import cn from "classnames/bind";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section id={"contact"} className={styles.contact}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>Get In Touch</h3>
          <h2>Contact me</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.messages}>
            <div>
              <div className={styles.icon}>
                <AiOutlineMail />
              </div>

              <h4>Email</h4>
              <a
                href="mailto:anysofronova@yandex.ru"
                target={"_blank"}
                rel="noreferrer"
              >
                anysofronova@yandex.ru
              </a>
            </div>
            <div>
              <div className={styles.icon}>
                <BsTelegram />
              </div>
              <h4>Telegram</h4>
              <a
                href="https://t.me/Anna_Fawn"
                target={"_blank"}
                rel="noreferrer"
              >
                @Anna_Fawn
              </a>
            </div>
          </div>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
