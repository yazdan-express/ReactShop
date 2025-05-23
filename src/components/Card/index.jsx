import React, { useContext, useEffect } from "react";
import styles from "./index.module.css";
import useConvertNums from "../../hooks/useConvertNums";
import { Fav } from "../Layout";
import { toast } from "react-toastify";

const Card = ({ id , title, image, price, desc }) => {
  const { generated, handleConvertToPersianDigits } = useConvertNums();
  const { setFavouritedCount, favouritedProducts, setFavouritedProducts } =
    useContext(Fav);

  const isFilled = favouritedProducts.includes(id);

  useEffect(() => {
    handleConvertToPersianDigits(price);
  }, []);

  const handleFill = () => {
    if (isFilled) {
      setFavouritedCount((prev) => prev - 1);
      setFavouritedProducts((prev) => prev.filter((item) => item !== id));
      const toastTitle = `...${title.substr(0 , 9)}`;
      toast.warning(`محصول با نام ${toastTitle} از سبد خرید حذف شد.`)
    } else {
      setFavouritedCount((prev) => prev + 1);
      setFavouritedProducts((prev) => [...prev, id]);
      const toastTitle = `...${title.substr(0 , 9)}`;
      toast.success(`محصول با نام ${toastTitle} به سبد خرید اضافه شد.`)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div className={styles.desc}>
        <p>{desc}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.svg}>
          {isFilled === false ? (
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 109.57"
              onClick={handleFill}
            >
              <g>
                <path d="M65.46,19.57c-0.68,0.72-1.36,1.45-2.2,2.32l-2.31,2.41l-2.4-2.33c-0.71-0.69-1.43-1.4-2.13-2.09 c-7.42-7.3-13.01-12.8-24.52-12.95c-0.45-0.01-0.93,0-1.43,0.02c-6.44,0.23-12.38,2.6-16.72,6.65c-4.28,4-7.01,9.67-7.1,16.57 c-0.01,0.43,0,0.88,0.02,1.37c0.69,19.27,19.13,36.08,34.42,50.01c2.95,2.69,5.78,5.27,8.49,7.88l11.26,10.85l14.15-14.04 c2.28-2.26,4.86-4.73,7.62-7.37c4.69-4.5,9.91-9.49,14.77-14.52c3.49-3.61,6.8-7.24,9.61-10.73c2.76-3.42,5.02-6.67,6.47-9.57 c2.38-4.76,3.13-9.52,2.62-13.97c-0.5-4.39-2.23-8.49-4.82-11.99c-2.63-3.55-6.13-6.49-10.14-8.5C96.5,7.29,91.21,6.2,85.8,6.82 C76.47,7.9,71.5,13.17,65.46,19.57L65.46,19.57z M60.77,14.85C67.67,7.54,73.4,1.55,85.04,0.22c6.72-0.77,13.3,0.57,19.03,3.45 c4.95,2.48,9.27,6.1,12.51,10.47c3.27,4.42,5.46,9.61,6.1,15.19c0.65,5.66-0.29,11.69-3.3,17.69c-1.7,3.39-4.22,7.03-7.23,10.76 c-2.95,3.66-6.39,7.44-10,11.17C97.2,74.08,91.94,79.12,87.2,83.66c-2.77,2.65-5.36,5.13-7.54,7.29L63.2,107.28l-2.31,2.29 l-2.34-2.25l-13.6-13.1c-2.49-2.39-5.37-5.02-8.36-7.75C20.38,71.68,0.81,53.85,0.02,31.77C0,31.23,0,30.67,0,30.09 c0.12-8.86,3.66-16.18,9.21-21.36c5.5-5.13,12.97-8.13,21.01-8.42c0.55-0.02,1.13-0.03,1.74-0.02C46,0.48,52.42,6.63,60.77,14.85 L60.77,14.85z" />
              </g>
            </svg>
          ) : (
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 107.41"
              style={{ fill: "red" }}
              onClick={handleFill}
            >
              <g>
                <path
                  style={{ border: "1px solid black" }}
                  d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
                />
              </g>
            </svg>
          )}
        </div>
        <div>{generated} دلار</div>
      </div>
    </div>
  );
};

export default Card;
