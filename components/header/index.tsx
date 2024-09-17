"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// styles
import styles from "./header.module.scss";
// libs & packages
import { MdEmail, MdOutlineVerticalAlignTop } from "react-icons/md";
import { BiSolidChevronsDown } from "react-icons/bi";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// data
import { navItems } from "@/data";
// components
import { NavItems } from "../ui/navItems";
// types
import { Social, SocialIconType } from "@/types";
type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const [isSsg, setIsSsg] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showDownChevron, setShowDownChevron] = useState(true);
  const [hoverState, setHoverState] = useState<SocialIconType>({
    index: 0,
    isHovered: false,
  });

  useEffect(() => {
    setIsSsg(true);

    const handleHeaderShadow = () => {
      setIsScrolling(window.scrollY >= 100);
    };

    if (isScrolling) {
      setShowDownChevron(true);
    }

    window.addEventListener("scroll", handleHeaderShadow);
    return () => window.removeEventListener("scroll", handleHeaderShadow);
  }, [isSsg, isSsg && window?.scrollY]);

  const setIconFgColor = (index: number): string => {
    /* contact icon */
    if (index === 10) {
      return hoverState.index === 10 && hoverState.isHovered ? "blue" : "gray";
    }

    /* social icons */
    return hoverState.index === index && hoverState.isHovered ? "#fff" : "gray";
  };

  const setIconBg = (index: number): string => {
    /* contact icon */
    if (index === 10)
      return hoverState.index === 10 && hoverState.isHovered ? "#fff" : "";

    /* social icons bg */
    return hoverState.index === index && hoverState.isHovered
      ? ""
      : "transparent";
  };

  return (
    <div className={styles.headerWrapper}>
      {/* on landing */}
      {!isScrolling && (
        <header className={styles.header}>
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
                  fgColor={setIconFgColor(ind)}
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
                onMouseOver={() =>
                  setHoverState({ index: 10, isHovered: true })
                }
                onMouseLeave={() =>
                  setHoverState({ index: 10, isHovered: false })
                }
              >
                <MdEmail className={styles.emailIcon} />
                <p className={styles.contactText}>Get In Touch</p>
              </motion.div>
            </Link>
          )}

          <NavItems navItems={navItems} />
        </header>
      )}

      {/* on scrolling before hovering */}
      {isScrolling && showDownChevron && (
        <div
          className={styles.headerChevron}
          onMouseOver={() => setShowDownChevron(false)}
          onClick={() => setShowDownChevron(false)}
        >
          {showDownChevron && <BiSolidChevronsDown />}
        </div>
      )}

      {/* on scrolling after hovering */}
      {isScrolling && !showDownChevron && (
        <>
          <header
            className={styles.scrollingHeader}
            onMouseLeave={() => setShowDownChevron(true)}
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
                    fgColor={setIconFgColor(ind)}
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
                  onMouseOver={() =>
                    setHoverState({ index: 10, isHovered: true })
                  }
                  onMouseLeave={() =>
                    setHoverState({ index: 10, isHovered: false })
                  }
                >
                  <MdEmail className={styles.emailIcon} />
                  <p className={styles.contactText}>Get In Touch</p>
                </motion.div>
              </Link>
            )}

            <NavItems navItems={navItems} />
          </header>

          <div
            className={styles.overlay}
            onClick={() => setShowDownChevron(true)}
          />
        </>
      )}

      {/* toTopButton */}
      {isScrolling && (
        <div className={styles.toTopButtonContainer}>
          <Link href="#hero">
            <button className={styles.toTopButton}>
              <MdOutlineVerticalAlignTop />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
