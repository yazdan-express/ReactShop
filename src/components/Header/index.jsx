import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Link to="/" className={styles.option}>
          خانه<span className="icon-home"></span>
        </Link>

        <Link to="" className={styles.option}>
          سبد خرید<span className="icon-cart"></span>
        </Link>

        <Link to="" className={styles.option}>
          تماس با ما<span class="icon-phone"></span>
        </Link>
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
