import React from "react";
import Waiter from "./Waiter";
import styles from "../../styles/about/waiter.module.css";

function WaiterRow() {
  const data = [
    {
      title: "Anthony J. Bowman",
      desc: "Senior Chefs",
      img: "/images/coffee25.jpg",
      para1: "bowmankf@gmail.com",
      para2: "+012 (345) 678 99",
    },
    {
      title: "Kenny V. Gonzalez",
      desc: "Senior Chefs",
      img: "/images/coffee26.jpg",
      para1: "gonzalezkf@gmail.com",
      para2: "+012 (345) 678 99",
    },
    {
      title: "Joseph M. Lawrence",
      desc: "Senior Chefs",
      img: "/images/coffee27.jpg",
      para1: "lawrencekf@gmail.com",
      para2: "+012 (345) 678 99",
    },
    {
      title: "Charles K. Smith",
      desc: "Senior Chefs",
      img: "/images/coffee28.jpg",
      para1: "smithkf@gmail.com",
      para2: "+012 (345) 678 99",
    },
  ];
  const componet = data.map((value, index) => {
    return (
      <Waiter
        key={index}
        title={value.title}
        desc={value.desc}
        img={value.img}
        para1={value.para1}
        para2={value.para2}
      />
    );
  });
  return <div className={styles.waiterRowContainer}>{componet}</div>;
}

export default WaiterRow;
