import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { data, Link, useLocation } from "react-router-dom";
import useConvertNums from "../../hooks/useConvertNums";
import { Fav } from "../Layout";

const Header = ({setFilteredProducts , setCategoryItems}) => {

  const { generated, handleConvertToPersianDigits } = useConvertNums();
  const {products ,favouritedCount} = useContext(Fav);
  const [isSearchClicked , setIsSearchClicked] = useState(false);
  const [isDropdownClicked , setIsDropdownClicked] = useState(false);
  const [category , setCategory] = useState('');
  const cats = useRef(["کالای الکترونیک" , "بدلیجات" , "لباس مردانه" ,"لباس زنانه"]); 
  const catsmain = useRef(["electronics","jewelery","men's clothing","women's clothing"]); 
  const inputRef = useRef('');
  const location = useLocation();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => {
      setCategoryItems(data);
    })
  } , [category]);

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

  const handleDropdownClick = () => {
    setIsDropdownClicked(prev => !prev);
  }

  const handleCatClick = (itemIndex) => {
    const cat = catsmain.current[itemIndex];
    setCategory(cat);
    setIsDropdownClicked(false);
  } 

  const handleResetCat = () => {
    setCategoryItems([]);
    setIsDropdownClicked(false);
  }

  return (
    <>
    
    <div className={styles.container}  >
      {location.pathname === '/' && (
      <div className={styles.cats} style={!isDropdownClicked ? {opacity : 0 , visibility : 'hidden'} : {opacity : 1 , visibility : 'visible'}}>
        <ul style={{listStyle : 'none' , width : '10%'}}>
          <li>
            دسته بندی ها
            <ul style={{listStyle : 'circle' , listStylePosition : 'inside' , cursor : 'pointer'}}>
              <li onClick={handleResetCat} >تمام محصولات</li>
              {cats.current.map((item , index) => <li key={index} onClick={() => handleCatClick(index)}>{item}</li>)}
            </ul>
          </li>
        </ul>
      </div>
      )}
      <div className={styles.options}>
        {location.pathname === '/' && (
        <div className={styles.dropdown} onClick={handleDropdownClick}>
          <div className={`${styles.line} ${isDropdownClicked ? styles.line1active : ''}`}></div>
          <div className={`${styles.line} ${isDropdownClicked ? styles.line2active : ''}`}></div>
          <div className={`${styles.line} ${isDropdownClicked ? styles.line3active : ''}`}></div>
        </div>
        )}

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
