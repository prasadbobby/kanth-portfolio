"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/herosection.module.css";
import profliePic from "../../../public/profile_pic.jpeg";
import ImageSlide from "./ImageSlide";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInView(true);
    }, 1400);
  }, []);

  const sentence1 =
    "I excel in creating dynamic web applications and driving strategic growth through digital marketing and social media campaigns.";

  const sentence2 =
    "My unique blend of technical and business acumen ensures innovative solutions and successful project outcomes.";

  const heroSectionText =
    "I am Reshi Kanth, a skilled Angular developer and business development professional.";

  const heroSectionTextAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      transition: {
        delay: 0.25,
        staggerChildren: 0.015,
      },
    },
  };

  const sentencesTextAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      transition: {
        delay: 1,
        staggerChildren: 0.015,
      },
    },
  };

  const spanAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.hero_section_container}>
          <motion.p
            className={styles.heading}
            variants={heroSectionTextAnimation}
            animate={isInView ? "animate" : ""}
            initial="initial"
          >
            {heroSectionText.split(" ").map((word, index) => {
              return (
                <motion.span key={index} variants={spanAnimation}>
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </motion.p>

          <div className={styles.image_container}>
            <ImageSlide src={profliePic} className={styles.hero_section_pic} />
          </div>
        </div>

        <motion.p
          className={styles.content}
          variants={sentencesTextAnimation}
          animate={isInView ? "animate" : ""}
          initial="initial"
        >
          {sentence1.split(" ").map((word, index) => {
            return (
              <motion.span key={index} variants={spanAnimation}>
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>
        <br />

        <motion.p
          className={styles.content}
          variants={sentencesTextAnimation}
          animate={isInView ? "animate" : ""}
          initial="initial"
        >
          {sentence2.split(" ").map((word, index) => {
            return (
              <motion.span key={index} variants={spanAnimation}>
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>
      </section>
    </>
  );
};

export default HeroSection;
