import React from "react";
import Menu from "./Menu";
import styles from "../../styles/home/menu.module.css";

function MenuRow() {
  const data = [
    { img: "/images/coffee06.jpg", title: "Restaurant Menu" },
    { img: "/images/coffee07.jpg", title: "Coffee Menu" },
    { img: "/images/coffee08.jpg", title: "Food Services" },
  ];
  const componet = data.map((value, index) => {
    return <Menu key={index} img={value.img} title={value.title} />;
  });
  return <div className={styles.mainContainer}>{componet}</div>;
}

export default MenuRow;
