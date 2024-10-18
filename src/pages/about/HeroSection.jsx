import React from "react";
import styles from "../../styles/home/heroSection.module.css";

function HeroSection(props) {
  const { desc1, title, desc2, img1, desc3, img2, contentFirst, imageFirst } =
    props;
  if (contentFirst) {
    return (
      <div className={styles.container}>
        <div className={styles.descContainer}>
          <p>{desc1}</p>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.descParaContainer}>{desc2}</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={img2} alt="img2" />
        </div>
      </div>
    );
  }
  if (imageFirst) {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={img2} alt="img3" />
        </div>
        <div className={styles.descContainer}>
          <p>{desc1}</p>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.descParaContainer}>{desc2}</p>
          <div className={styles.descInnerContainer}>
            <img src={img1} alt="img4" />
            <p>{desc3}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
