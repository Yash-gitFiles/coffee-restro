import React from "react";
import Branches from "./Branches";
import styles from "../../styles/about/branchese.module.css";

function BranchesRow() {
  const data = [
    { img: "/images/coffee29.jpg" },
    { img: "/images/coffee30.jpg" },
    { img: "/images/coffee31.jpg" },
    { img: "/images/coffee32.jpg" },
    { img: "/images/coffee33.jpg" },
    { img: "/images/coffee34.jpg" },
  ];
  const componet = data.map((value, index) => {
    return <Branches key={index} img={value.img} />;
  });
  return <div className={styles.branchRowContainer}>{componet}</div>;
}

export default BranchesRow;
