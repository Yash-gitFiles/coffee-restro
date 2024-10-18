import React from "react";
import HeroInnerContain from "./HeroInnerContain";
import styles from "../../../styles/menu/menuRestaurant/heroInnerContain.module.css";
import Title from "../../../componet/common/Title";

function HeroInnerContaineRow() {
  const data = [
    {
      img: "/images/coffee05.jpg",
      title: "Chicken",
      prise: "$4.9",
      desc: "Sed ut perspiciatis unde",
    },
    {
      img: "/images/coffee05.jpg",
      title: "Salad Bowl",
      prise: "$199",
      desc: "Sed ut perspiciatis unde",
    },
    {
      img: "/images/coffee05.jpg",
      title: "Smoothie",
      prise: "$55.9",
      desc: "Sed ut perspiciatis unde",
    },
    {
      img: "/images/coffee05.jpg",
      title: "Gin Trifles",
      prise: "$37.5",
      desc: "Sed ut perspiciatis unde",
    },
  ];
  const componet = data.map((value, index) => {
    return <HeroInnerContain key={index} {...value} />;
  });
  return (
    <div>
      <div>
        <Title title="CHOOSE BEST OF" desc="Kaffen Menu" />
      </div>
      {componet}
    </div>
  );
}

export default HeroInnerContaineRow;
