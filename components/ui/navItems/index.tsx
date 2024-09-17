"use client";

import Link from "next/link";
// styles
import styles from "./navItems.module.scss";
// external libs
import { motion } from "framer-motion";
// utils
import { cn } from "@/utils/cn";

export const NavItems = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
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
        >
          <span className={cn(styles.icon)}>{navItem.icon}</span>
          <span className={cn(styles.name)}>
            {navItem.name}
          </span>
        </Link>
      ))}
    </motion.div>
  );
};
