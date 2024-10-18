import React from "react";
import styles from "../../styles/about/about.module.css";
import CountUpRow from "../../componet/home/CountUpRow";
import MenuRow from "./MenuRowAbout";
import WaiterRow from "./WaiterRow";
import BranchesRow from "./BranchesRow";

function About() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src="/images/coffee20.jpg" alt="" />
        <h3>About us</h3>
      </div>
      <div>
        <CountUpRow />
        <MenuRow />
        <WaiterRow />
        <BranchesRow />
      </div>
    </div>
  );
}

export default About;
