import React, { useContext, useEffect } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import useConvertNums from "../../hooks/useConvertNums";
import { FavCount } from "../Layout";

const Header = () => {

  const { generated, handleConvertToPersianDigits } = useConvertNums();
  const {favouritedCount} = useContext(FavCount);

 
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Link to="/" className={styles.option}>
          خانه<span className="icon-home"></span>
        </Link>

        <div className={styles.cartController}>
          <Link to="" className={styles.option}>
            سبد خرید<span className="icon-cart"></span>
          </Link>
          {favouritedCount !== 0 && <div className={styles.cartItemCounts}>{favouritedCount}</div>}
          
        </div>
      
        <Link to="" className={styles.option}>
          تماس با ما<span className="icon-phone"></span>
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
