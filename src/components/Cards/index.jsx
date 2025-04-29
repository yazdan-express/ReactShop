import React, { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./index.module.css";
const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {products.map((item, index) => (
        <Card 
        key={index}
        title={item.title}
        image={item.image}
        price={item.price}
        desc={item.description}
        />
      ))}
    </div>
  );
};

export default Cards;
