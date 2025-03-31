import { Dispatch, SetStateAction, useState } from "react";
// styles
import styles from "./socialIcons.module.scss";
// libs & packages
import { SocialIcon } from "react-social-icons";
import { Social, SocialIconType } from "@/types";
import { motion } from "framer-motion";
// types
type Props = {
  socials: Social[];
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const SocialIcons = ({ socials, setIsNavOpen }: Props) => {
  const [hoverState, setHoverState] = useState<SocialIconType>({
    index: -1,
    isHovered: false,
  });

  const getSocialIconColors = (index: number) => ({
    fgColor:
      hoverState.index === index && hoverState.isHovered ? "#fff" : "gray",
    bgColor:
      hoverState.index === index && hoverState.isHovered ? "" : "transparent",
  });

  return (
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
          {...getSocialIconColors(ind)}
          onMouseOver={() => setHoverState({ index: ind, isHovered: true })}
          onMouseLeave={() => setHoverState({ index: ind, isHovered: false })}
          className={styles.socialIcon}
          onClick={() => setIsNavOpen(false)}
        />
      ))}
    </motion.div>
  );
};

export default SocialIcons;
