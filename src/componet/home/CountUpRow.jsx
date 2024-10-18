import React from "react";
import Counter from "./Counter";
import Title from "../common/Title";
import styles from "../../styles/home/countUp.module.css";

function CountUpRow() {
  const data = [
    {
      number: "256",
      title: "Premium Clients",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      number: "362",
      title: "Expert Members",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      number: "753",
      title: "Winning Awards",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];
  const componet = data.map((value, index) => {
    return (
      <Counter
        key={index}
        number={value.number}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <>
      <Title title="Our Process Report" />
      <div className={styles.container}>{componet}</div>
    </>
  );
}

export default CountUpRow;
