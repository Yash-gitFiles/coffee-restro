import React from "react";
import styles from "../../styles/common/title.module.css";

function Title(props) {
  const { title, desc } = props;
  return (
    <div className={styles.titleContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default Title;
