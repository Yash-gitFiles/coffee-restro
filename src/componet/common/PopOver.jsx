import React from "react";
import styles from "../../styles/common/popover.module.css";

function PopOver(props) {
  const { showPopOver } = props;

  return (
    <div
      className={`${styles.popOverContainer} ${
        showPopOver ? styles.visible : ""
      }`}
    >
      <div className={styles.msgContainer}>Pop Over</div>
    </div>
  );
}

export default PopOver;
