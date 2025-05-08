import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import useConvertNums from "../../hooks/useConvertNums";
import { Fav } from "../Layout";

const Header = ({setFilteredProducts}) => {

  const { generated, handleConvertToPersianDigits } = useConvertNums();
  const {products ,favouritedCount} = useContext(Fav);
  const [isSearchClicked , setIsSearchClicked] = useState(false);
  const inputRef = useRef('');
  const location = useLocation();

  useEffect(() => {
      handleConvertToPersianDigits(favouritedCount);
  }, [favouritedCount]);

  useEffect(() => {
    if(isSearchClicked && inputRef.current)
    {
      inputRef.current.focus();
    }
  } , [isSearchClicked])
  
  const handleSearchClick = () => {
    if(isSearchClicked === false)
    {
      setIsSearchClicked(prev => !prev);
    }
    else
    {
      setIsSearchClicked(prev => !prev);
    }
  }

  const handleSearch = () => {
    const value = inputRef.current.value;
    const newProductsList = products.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    setFilteredProducts(newProductsList);
  }

  const handleReset = () => {
    setFilteredProducts([]);
    inputRef.current.value = "";
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.options}>
        <Link to="/" className={styles.option}>
          خانه<span className="icon-home"></span>
        </Link>

        <div className={styles.cartController}>
          <Link to="/cart" className={styles.option}>
            سبد خرید<span className="icon-cart"></span>
          </Link>
          {favouritedCount !== 0 && <div className={styles.cartItemCounts}>{generated}</div>}
          
        </div>
      
        <Link to="/contact-us" className={styles.option}>
          تماس با ما<span className="icon-phone"></span>
        </Link>

        {location.pathname === '/' && (
          <div className={styles.option} onClick={handleSearchClick}>
          جستجو<span className="icon-search"></span>
          </div>
        )}
        
        {isSearchClicked === true && location.pathname === '/' && (
        <div className={styles.searchbox}>
          <input className={styles.innerSearch} type="text" placeholder="نام محصول را تایپ کنید..." ref={inputRef} />
          <div className={`${styles.searchbutton} ${styles.searchbuttonColor}`} onClick={handleSearch}>بگرد!</div>
          <div className={`${styles.searchbutton} ${styles.resetbuttonColor}`} onClick={handleReset}>ریست</div>
        </div>
        )
        }
        
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
    </>  
  );
};

export default Header;
