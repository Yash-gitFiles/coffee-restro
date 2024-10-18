import React from "react";
import styles from "../../../styles/menu/menuRestaurant/heroSectionForMenu.module.css";
import HeroInnerContaineRow from "./HeroInnerContaineRow";

function HeroSectionForMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.imgDescContainer}>
        <HeroInnerContaineRow />
        <HeroInnerContaineRow />
      </div>
    </div>
  );
}

export default HeroSectionForMenu;
