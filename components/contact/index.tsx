// styles
import styles from "./contact.module.scss";
// external libs & packages
import { useForm, Resolver } from "react-hook-form";
import { MdWifiCalling3, MdMarkEmailRead } from "react-icons/md";
import { SiGooglemaps, SiWhatsapp, SiTelegram } from "react-icons/si";
// types
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

const Contact = () => {
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
          <span className={styles.decoratedText}>Let&apos;s Talk.</span>
        </h4>

        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfo}>
            <SiWhatsapp className={styles.contactIcon} />
            <p className={styles.contactText}>+31 6 8587 2817</p>
          </div>
          <div className={styles.contactInfo}>
            <MdWifiCalling3 className={styles.contactIcon} />
            <p className={styles.contactText}>+971 58 520 3114</p>
          </div>
          <div className={styles.contactInfo}>
            <SiTelegram className={styles.contactIcon} />
            <p className={styles.contactText}>@BassamHager</p>
          </div>

          <div className={styles.contactInfo}>
            <MdMarkEmailRead className={styles.contactIcon} />
            <p className={styles.contactText}>b2dndr1@gmail.com</p>
          </div>

          <div className={styles.addressContainer}>
            <div className={styles.contactInfo}>
              <SiGooglemaps className={styles.contactIcon} />
              <p className={styles.contactText}>
                2324AW, Leiden, <span> The Netherlands </span>
              </p>
            </div>

            <div className={styles.contactInfo}>
              <SiGooglemaps className={styles.contactIcon} />
              <p className={styles.contactText}>
                AlKhan, Sharjah, <span>UAE</span>
                {` `}{" "}
                <u>
                  <em>
                    <small>(CURRENT)</small>
                  </em>
                </u>
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className={styles.contactForm}>
          <input {...register("name")} placeholder="Name" />
          <input {...register("email")} placeholder="Email" type="email" />

          <input {...register("subject")} placeholder="Subject" />

          <textarea {...register("message")} placeholder="Message" />

          <button className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
