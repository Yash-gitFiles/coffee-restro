import React from "react";
import Title from "../common/Title";
import styles from "../../styles/home/popularCoffee.module.css";
import PopularCoffee from "./PopularCoffee";

function PopularCoffeeRow() {
  const data = [
    {
      img: "/images/coffee09.jpg",
      title: "Americano Coffee",
      desc: "2/3 espresso, 1/3 streamed milk",
      prise: "$4.9",
    },
    {
      img: "/images/coffee10.jpg",
      title: "Espresso Coffee",
      desc: "2/3 espresso, 1/3 streamed milk",
      prise: "$4.9",
    },
    {
      img: "/images/coffee11.jpg",
      title: "Barista Pouring Syrup",
      desc: "2/3 espresso, 1/3 streamed milk",
      prise: "$3.5",
    },
    {
      img: "/images/coffee12.jpg",
      title: "Cold - Coffee",
      desc: "2/3 espresso, 1/3 streamed milk",
      prise: "$6.0",
    },
    {
      img: "/images/coffee13.jpg",
      title: "Cappuccino Arabica",
      desc: "2/3 espresso, 1/3 streamed milk",
      prise: "$2.8",
    },
    {
      img: "/images/coffee14.jpg",
      title: "Milk Cream Coffee",
      desc: "2/3 espresso, 1/3 streamed milk",
      prise: "$7.5",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <PopularCoffee
        key={index}
        img={value.img}
        title={value.title}
        desc={value.desc}
        prise={value.prise}
      />
    );
  });
  return (
    <>
      <div>
        <Title title="CHOOSE BEST COFFEE" desc="Kaffen Popular Coffee Menu" />
      </div>
      <div className={styles.mainContainer}>{componet}</div>
    </>
  );
}

export default PopularCoffeeRow;
