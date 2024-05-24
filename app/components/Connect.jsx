import React from "react";
import AnimatedButton from "./commonComponents/AnimatedButton";
import styles from "../styles/connect.module.css";
import socialLinks from "./json/socialLinks";

const Connect = () => {
  const d = new Date();
  const offSetTime = d.getTimezoneOffset();
  const istOffset = 5 * 60 + 30;
  const totalOffset = offSetTime + istOffset;
  const istTime = new Date(d.getTime() + totalOffset * 60000);

  const amOrPm = () => {
    const hours = istTime.getHours();
    if (hours >= 12) {
      return "PM";
    }
    return "AM";
  };

  const hours = () => {
    const hrs = istTime.getHours();
    if (hrs <= 9) {
      return `0${hrs}`;
    } else {
      return hrs;
    }
  };

  const minutes = () => {
    const min = istTime.getMinutes();
    if (min <= 9) {
      return `0${min}`;
    } else {
      return min;
    }
  };

  const formattedTime = `${istTime.getHours() > 12 ? hours() - 12 : hours()}:${
    minutes() + ` ${amOrPm()}`
  } IST`;

  return (
    <section
      className={styles.parent_container}
      data-bgcolor="#eeeeee"
      data-textcolor="#181818"
    >
      <p className={styles.heading}>Connect</p>

      <footer>
        <section className={styles.connect_links_container}>
          <AnimatedButton>
            <a
              href="mailto:reshikanth153@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connect_links}
            >
              reshikanth153@gmail.com
            </a>
          </AnimatedButton>
          <AnimatedButton>
            <a
              href="tel:+918639032864"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connect_links}
            >
              +91 8639032864
            </a>
          </AnimatedButton>
        </section>

        <section className={styles.footer_details_container}>
          <div className={styles.footer_moredetails_container}>
            <div className={styles.footer_meta_container}>
              <span>Version</span>
              <p>2024 © Edition</p>
            </div>

            <div className={styles.footer_meta_container}>
              <span>Local Time</span>
              <p>{formattedTime}</p>
            </div>
          </div>

          <div className={styles.footer_meta_container}>
            <span>Socials</span>

            <div className={styles.social_links}>
              {socialLinks.map((details, index) => {
                const { name, url } = details;
                return (
                  <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={index}
                  >
                    {name}
                  </a>
                );
              })}
            </div>
            <hr className={styles.divider} />
          </div>
        </section>
      </footer>
    </section>
  );
};

export default Connect;
