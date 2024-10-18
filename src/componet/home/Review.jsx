import React from "react";
import styles from "../../styles/home/review.module.css";

function Review(props) {
  const { img, title, profession, desc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgWithDescContainer}>
        <div className={styles.imgContainer}>
          <img src={img} alt="" />
        </div>
        <div className={styles.imgInnerContainer}>
          <h2>{title}</h2>
          <p>{profession}</p>
        </div>
      </div>
      <div className={styles.descContainer}>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Review;
