import React from "react";
import styles from "../../styles/about/branchese.module.css";

function Branches(props) {
  const { img } = props;
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src={img} alt="01" />
      </div>
    </div>
  );
}

export default Branches;
