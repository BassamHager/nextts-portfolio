import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
// styles
import styles from "./navItems.module.scss";
// external libs
import { motion } from "framer-motion";
// utils
import { cn } from "@/utils/cn";
// types
type Props = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const NavItems = ({ navItems, className, setIsNavOpen }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className={cn(styles.navItemsWrapper, className)}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn("group", styles.link)}
          onClick={() => setIsNavOpen(false)}
        >
          <span className={cn(styles.icon)}>{navItem.icon}</span>
          <span className={cn(styles.name)}>{navItem.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export default NavItems;
