import React from "react";
import styles from "../styles/experience.module.css";

const Experience = () => {
  return (
    <section>
      <div className={styles.heading_container}>
        <p className={styles.heading}>Experience</p>
      </div>

      <div className={styles.experience_parent_container}>
        <div className={styles.experience_container}>
          <h2 className={styles.timeline}>Now</h2>
          <span>
            <h2>Bussiness development/developer</h2>
            <p>Tagoor Labs </p>
          </span>
        </div>
      </div>

      <div className={styles.experience_parent_container}>
        <div className={styles.experience_container}>
          <h2 className={styles.timeline}>2022</h2>
          <span>
            <h2>Angular Developer</h2>
            <p>Qcount</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
