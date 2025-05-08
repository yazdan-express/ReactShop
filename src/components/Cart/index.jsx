import React, { useContext, useEffect, useMemo } from "react";
import { Fav } from "../Layout";
import Card from "../Card";
import styles from "./index.module.css";
import useConvertNums from "../../hooks/useConvertNums";
import { toast } from "react-toastify";

const Cart = ({setFilteredProducts}) => {
  const { products, favouritedProducts , favouritedCount} = useContext(Fav);
  const { generated, handleConvertToPersianDigits } = useConvertNums();
  
  useEffect(() => {
    setFilteredProducts([]);
  } , [])

  useEffect(() => {
    handleConvertToPersianDigits(total);
  } , [favouritedCount])
 
  const total = useMemo(() => {
    return products.reduce((sum , item) => {
      if(favouritedProducts.includes(item.id)){
        return sum + item.price;
      } else {
        return sum;
      }
    } , 0)
  } , [favouritedCount])


  const handleClick = () => {
    toast.info('شرمنده وقت نشد بنویسم این بخش و :)')
  }

  if (favouritedProducts.length != 0) {
    return (
        <div className={styles.container}>
          {products.map(
            (item, index) =>
              favouritedProducts.includes(item.id) && (
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  desc={item.description}
                />
              )
          )}
          <div className={styles.totalContainer}>
            <div className={styles.total}>
              <span className={styles.price}>
                هزینه قابل پرداخت : {generated}
              </span>
              <button className={styles.btn} onClick={handleClick}>ادامه و پرداخت</button>
            </div>
          </div>
        </div>
      );
  } else {
    return (
        <h3 className={styles.empty}>محصولی به سبد خرید خود اضافه نکرده اید!!!</h3>
    ) 
  }
  
};

export default Cart;
