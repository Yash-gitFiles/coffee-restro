import React from "react";
import styles from "../../styles/pages/about/about.module.css";

function SlideCarousel(props) {
  const { img, title, btn1, btn2 } = props;
  return (
    <div className={styles.mainContainer}>
      <img src={img} alt="01" />
      <div className={styles.descContainer}>
        <h3>{title}</h3>
        <button>{btn1}</button>
        <button>{btn2}</button>
      </div>
    </div>
  );
}

export default SlideCarousel;
