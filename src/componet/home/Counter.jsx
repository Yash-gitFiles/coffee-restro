import React from "react";
import styles from "../../styles/home/countUp.module.css";
import CountUp from "react-countup";

function Counter(props) {
  const { number, title, desc } = props;
  return (
    <div className={styles.counterContainer}>
      <div className={styles.numberContainer}>
        <CountUp end={number} />+
      </div>
      <div className={styles.descContainer}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Counter;
