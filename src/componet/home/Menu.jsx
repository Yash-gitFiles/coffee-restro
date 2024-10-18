import React from "react";
import styles from "../../styles/home/menu.module.css";

function Menu(props) {
  const { img, title } = props;
  return (
    <div>
      <div className={styles.menuContainer}>
        <div className={styles.imgDescContainer}>
          <img src={img} alt="01" />
          <h4 className={styles.title}>{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Menu;
