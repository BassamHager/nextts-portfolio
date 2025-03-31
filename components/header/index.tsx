import { useEffect, useState } from "react";
import Link from "next/link";
// styles
import styles from "./header.module.scss";
// libs & packages
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
// utils
import { cn } from "@/utils/cn";
// data
import { navItems } from "@/data";
// components
import NavItems from "../ui/navItems";
import SocialIcons from "../ui/socialIcons";
import ContactEmail from "../ui/contactEmail";
// types
import { Social } from "@/types";
type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  // internal state
  /**isScrolling
   * FOR: obv, after 100px handled in useEffect
   * VIEWS: all
   */
  const [isScrolling, setIsScrolling] = useState(false);
  /**isNavOpen
   * FOR: showing a button, should be visible only if isScrolling
   * VIEWS: all
   */
  const [isNavOpen, setIsNavOpen] = useState(false);

  // methods

  // watch & rerender
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.headerWrapper}>
      {/* on landing before scrolling down - [views: xs -> xl] */}
      {!isScrolling && !isNavOpen && (
        <header className={styles.header}>
          <SocialIcons socials={socials} setIsNavOpen={setIsNavOpen} />
          <ContactEmail isNavOpen={false} setIsNavOpen={setIsNavOpen} />
        </header>
      )}

      {/* nav chevron button - [views: xs -> xl] */}
      <button
        className={cn(
          styles.chevronButton,
          isNavOpen && styles.clickedChevronButton
        )}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <FaWindowClose /> : <CgMenuGridR />}
      </button>

      {/* on clicking chevronButton */}
      {isNavOpen && (
        // @todo: update fragment to proper element
        <nav className={styles.navMenu}>
          <SocialIcons socials={socials} setIsNavOpen={setIsNavOpen} />
          <ContactEmail isNavOpen setIsNavOpen={setIsNavOpen} />
          <NavItems navItems={navItems} setIsNavOpen={setIsNavOpen} />
        </nav>
      )}
      {/* toTopButton */}
      {isScrolling && !isNavOpen && (
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
