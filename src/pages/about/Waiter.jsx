import React from "react";
import styles from "../../styles/about/waiter.module.css";

function Waiter(props) {
  const { title, desc, img, para1, para2 } = props;
  return (
    <div className={styles.waiterContainer}>
      <div className={styles.descContainer}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
        <div className={styles.innerDesc}>
          <p className={styles.para1}>{para1}</p>
          <p className={styles.para2}>{para2}</p>
        </div>
        <div className={styles.iconContainer}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default Waiter;
