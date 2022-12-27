import React from "react";
import styles from "./contact.module.scss";
// external libs & packages
import { useForm, Resolver } from "react-hook-form";
// icons
import { MdWifiCalling3, MdMarkEmailRead } from "react-icons/Md";
import { SiGooglemaps } from "react-icons/Si";
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values:
      values.name && values.email && values.subject && values.message
        ? values
        : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
          email: {
            type: "required",
            message: "This is required.",
          },
          subject: {
            type: "required",
            message: "This is required.",
          },
          message: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:b2dndr1@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}
    ${data.email}
    `;
  });
  return (
    <div className={styles.contactWrapper} id="contact">
      <h3 className={styles.sectionTitle}>Contact</h3>

      <div className={styles.contactContainer}>
        <h4 className={styles.descriptionText}>
          I have got just what you need.{` `}
          <span className={styles.decoratedText}>Lets Talk.</span>
        </h4>

        <div className={styles.contactLinesContainer}>
          <div className={styles.contactLineContainer}>
            <MdWifiCalling3 className={styles.contactIcon} />
            <p className={styles.contactText}>+31 6 8587 2817</p>
          </div>

          <div className={styles.contactLineContainer}>
            <MdMarkEmailRead className={styles.contactIcon} />
            <p className={styles.contactText}>b2dndr1@gmail.com</p>
          </div>

          <div className={styles.contactLineContainer}>
            <SiGooglemaps className={styles.contactIcon} />
            <p className={styles.contactText}>2324AW Leiden, The Netherlands</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className={styles.contactForm}>
          <div className={styles.firstRowInputsContainer}>
            <input
              {...register("name")}
              placeholder="Name"
              className={styles.contactInput}
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className={styles.contactInput}
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className={styles.contactInput}
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className={styles.contactInput}
          />
          <button className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}
