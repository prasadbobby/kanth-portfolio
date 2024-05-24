"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import HamBurgerMenu from "./HamBurgerMenu";
import navLinks from "./json/navLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <Link href="/" scroll={false}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={45}
          height={30}
          className={styles.pb_logo}
        />
      </Link>

      {/* this is hamburger menu */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        whileFocus={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        className={`${styles.hamburger_container} ${
          open ? styles.close_hamburger : null
        }`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={styles.cross_icon} />
        <span className={styles.cross_icon} />
      </motion.div>

      <AnimatePresence mode="wait">
        {open ? <HamBurgerMenu setOpen={setOpen} /> : null}
      </AnimatePresence>

      <nav className={styles.nav_links_container}>
        {navLinks.map((data) => {
          const { label, path, target } = data;

          if (label === "Home") {
            return null;
          }

          return (
            <Link href={path} key={label} target={target} scroll={false}>
              {pathname === path ? `• ${label}` : label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
