import React from "react";
import styles from "../../styles/about/menu.module.css";

function MenuAbout(props) {
  const { img, title, desc } = props;
  return (
    <div className={styles.menuContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
      <div className={styles.descContainer}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default MenuAbout;
