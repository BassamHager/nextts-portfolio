import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
// libs & packages
import { MdEmail, MdOutlineVerticalAlignTop } from "react-icons/md";
// import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// types
import { Social, SocialIconType } from "../../types/typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [isSsg, setIsSsg] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);
  const [hoverState, setHoverState] = useState<SocialIconType>({
    index: 0,
    isHovered: false,
  });

  useEffect(() => {
    setIsSsg(true);

    const handleHeaderShadow = () => {
      setHeaderShadow(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleHeaderShadow);
  }, [isSsg]);

  const setIconColor = (index: number): string => {
    /* contact icon */
    if (index === 10)
      return hoverState.index === 10 && hoverState.isHovered ? "blue" : "gray";
    /* social icons */
    return hoverState.index === index && hoverState.isHovered ? "#fff" : "gray";
  };
  const setIconBg = (index: number): string => {
    /* contact icon */
    if (index === 10)
      return hoverState.index === 10 && hoverState.isHovered
        ? "#fff"
        : "transparent";
    /* social icons */
    return hoverState.index === index && hoverState.isHovered
      ? ""
      : "transparent";
  };

  return (
    <div className={styles.headerWrapper}>
      <header
        className={`${styles.header} ${
          headerShadow ? styles.headerScrolling : ""
        }`}
        id="header"
      >
        {isSsg && (
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.socialIconsContainer}
          >
            {socials?.map((social, ind) => (
              <SocialIcon
                key={social?.url}
                id={social?.url}
                url={social?.url}
                fgColor={setIconColor(ind)}
                bgColor={setIconBg(ind)}
                onMouseOver={() =>
                  setHoverState({ index: ind, isHovered: true })
                }
                onMouseLeave={() =>
                  setHoverState({ index: ind, isHovered: false })
                }
                className={styles.socialIcon}
              />
            ))}
          </motion.div>
        )}
        {isSsg && (
          <Link href="#contact">
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className={styles.contactContainer}
              onMouseOver={() => setHoverState({ index: 10, isHovered: true })}
              onMouseLeave={() =>
                setHoverState({ index: 10, isHovered: false })
              }
            >
              <MdEmail className={styles.emailIcon} />
              <p className={styles.contactText}>Get In Touch</p>
            </motion.div>
          </Link>
        )}
      </header>

      {headerShadow && (
        <Link href="#hero">
          <button className={styles.toTopButton}>
            <MdOutlineVerticalAlignTop />
          </button>
        </Link>
      )}
    </div>
  );
}
