import React from "react";
import Menu from "./MenuAbout";
import styles from "../../styles/about/menu.module.css";

function MenuRowAbout() {
  const data = [
    {
      img: "/images/coffee21.jpg",
      title: "Birthday Cakes",
      desc: " Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/coffee22.jpg",
      title: "Fresh Foods",
      desc: " Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/coffee23.jpg",
      title: "Skills Chefs",
      desc: " Lorem ipsum dolor sit amet.",
    },
    {
      img: "/images/coffee24.jpg",
      title: "Organic Juice",
      desc: " Lorem ipsum dolor sit amet.",
    },
  ];
  const componet = data.map((value, index) => {
    return (
      <Menu key={index} img={value.img} title={value.title} desc={value.desc} />
    );
  });
  return <div className={styles.menuRowContainer}>{componet}</div>;
}

export default MenuRowAbout;
