"use client";

import Image from "next/image";
// styles
import styles from "./footer.module.scss";
// external libs
import { FaLocationArrow } from "react-icons/fa6";
// data
import { socialMedia } from "@/data";
// components
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.textAndButtonContainer}>
        <h1>
          Elevate <span>your</span> digital presence to new heights
        </h1>

        <p>
          Reach out to me and let&apos;s discuss how I can help you to unleash
          your digital beast.
        </p>

        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className={styles.copyrightAndIconsContainer}>
        <p>Copyright © 2024 Bassam Hager</p>

        <div className={styles.iconsContainer}>
          {socialMedia.map((info) => (
            <div key={info.id} className={styles.iconContainer}>
              <Image src={info.img} alt="social icon" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
