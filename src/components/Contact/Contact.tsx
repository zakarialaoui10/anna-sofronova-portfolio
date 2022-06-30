import styles from "./Contact.module.scss";
import cn from "classnames/bind";
import { FaTelegramPlane, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id={"contact"} className={styles.contact}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("contact_title")}</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.messages}>
            <div>
              <div className={styles.icon}>
                <FaEnvelope />
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
                <FaTelegramPlane />
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
            <div>
              <div className={styles.icon}>
                <FaLinkedinIn />
              </div>
              <h4>Linked In</h4>
              <a
                href="https://github.com/anysofronova"
                target={"_blank"}
                rel="noreferrer"
              >
                @anna-sofronova
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
