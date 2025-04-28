import React from "react";
import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <a href="" className={styles.option}>خانه</a>
        <a href="" className={styles.option}>سبد خرید</a>
        <a href="" className={styles.option}>تماس با ما</a>
      </div>
      <div className={styles.title}>
        <img
          src="public/logo/802_fcbarcelona.jpg"
          alt=":*("
          className={styles.logo}
          title="چون خیلی بارسایی ام وگرنه مناسبی نداره :)"
        />
        <span className={styles.inTitle}>اولین فروشگاه من</span>
      </div>
    </div>
  );
};

export default Header;
