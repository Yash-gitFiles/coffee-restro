import React from "react";
import styles from "../../../styles/menu/menuRestaurant/heroInnerContain.module.css";

function HeroInnerContain(props) {
  const { img, title, prise, desc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="01" />
      </div>
      <div className={styles.foodDescContainer}>
        <h4>{title}</h4>
        <p>{prise}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default HeroInnerContain;
