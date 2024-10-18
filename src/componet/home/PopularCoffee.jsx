import React from "react";
import styles from "../../styles/home/popularCoffee.module.css";

function PopularCoffee(props) {
  const { img, title, desc, prise } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
      <div className={styles.descContainer}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p className={styles.prise}>{prise}</p>
      </div>
    </div>
  );
}

export default PopularCoffee;
