import React, { useContext, useEffect, useState } from "react";
import Card from "../Card";
import styles from "./index.module.css";
import { Fav } from "../Layout";

const Cards = ({filteredProducts}) => {
  
  
  const {products , setProducts} = useContext(Fav);
  const [isLoading , setIsLoading] = useState();
  const [fetchError , setFetchError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setFetchError(true);
      });
      

  }, []);

  if(isLoading){
    return <h2 className={styles.loading}>در حال بارگذاری...</h2>
  }
  else{
    if(fetchError){
      return <h2 className={styles.loading}>خطا در بارگذاری! لحظاتی بعد مجددا تلاش کنید...</h2>
    }
    else{
      if(filteredProducts.length == 0){
        return (
          <div className={styles.container}>
            {products.map((item, index) => (
              <Card 
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              desc={item.description}
              />
            ))}
          </div>
        );
      } else {
        return (
          <div className={styles.container}>
            {filteredProducts.map((item, index) => (
              <Card 
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              desc={item.description}
              />
            ))}
          </div>
        )
      }
    }
  }
    
};

export default Cards;
