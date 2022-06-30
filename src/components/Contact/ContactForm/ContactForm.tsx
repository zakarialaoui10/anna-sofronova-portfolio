import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Inputs = {
  name: string;
  email: string;
  phone: number;
  message?: string;
};
const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const sendEmail: SubmitHandler<Inputs> = (formData: any) => {
    try {
      emailjs
        .send(
          "service_djyiggq",
          "template_nzyz4ph",
          formData,
          "NTd7BsrddBskI4LFc"
        )
        .then(
          () => {
            setOpen(true);
          },
          (error) => {
            console.log("Error:" + error.text);
          }
        );
      reset();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <label>{t("contact_name")}</label>
      <input
        {...register("name", {
          required: true,
          pattern: /[a-zA-zа-яА-Я]/gi,
          maxLength: 30,
        })}
        placeholder={t("contact_name")}
      />

      <label>Email: </label>
      <input
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+\.\S+$/gi,
        })}
        placeholder={"Email"}
      />

      <label>{t("contact_phone")}</label>
      <input
        {...register("phone", {
          required: true,
          pattern: /^\+?[1-9][0-9]{7,14}$/gi,
        })}
        placeholder={t("contact_phone")}
      />

      <label>{t("contact_message")}</label>
      <textarea {...register("message")} placeholder={t("contact_message")} />
      {errors?.name?.type === "maxLength" && (
        <p className={styles.error}>Name cannot exceed 30 characters</p>
      )}
      {errors?.email?.type === "pattern" && (
        <p className={styles.error}>Please enter a valid Email</p>
      )}
      {errors?.phone?.type === "pattern" && (
        <p className={styles.error}>Please enter a valid Phone Number</p>
      )}
      {(errors?.name?.type === "required" ||
        errors?.email?.type === "required" ||
        errors?.phone?.type === "required") && (
        <p className={styles.error}>The fields are required</p>
      )}
      <div className={styles.button}>
        <button className={"btn btn-primary"}>{t("contact_button")}</button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message="Message is sent!"
      />
    </form>
  );
};

export default ContactForm;
