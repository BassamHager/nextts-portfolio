import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
// styles
import styles from "./contactEmail.module.scss";
// libs & packages
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
// utils
import { cn } from "@/utils/cn";
// types
type Props = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};
const ContactEmail = ({ isNavOpen, setIsNavOpen }: Props) => {
  return (
    <Link
      href="#contact"
      className={cn(
        styles.emailLinkContainer,
        isNavOpen && styles.centeredEmailLinkContainer
      )}
      onClick={() => setIsNavOpen(false)}
    >
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.emailIconAndTextContainer}
      >
        <MdEmail className={styles.emailIcon} />
        <p className={styles.contactText}>Get In Touch</p>
      </motion.div>
    </Link>
  );
};

export default ContactEmail;
