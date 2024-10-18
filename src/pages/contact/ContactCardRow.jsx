import React from "react";
import ContactCard from "./ContactCard";
import styles from "../../styles/concat/contactCard.module.css";

function ContactCardRow() {
  const data = [
    {
      title: "Main Location",
      para1: "55 Main Street, 2nd Block,3rd Floor, New York",
      para2: "394 Main Street, 2nd Block,3rd Floor, USA",
    },
    {
      title: "Email Address",
      para1: "supportkaffen@gmail.com",
      para2: "supportkaffen@gmail.com",
    },
    {
      title: "Phone Number",
      para1: "+012 (345) 678 99123456780",
      para2: "+012 (345) 678 99123456780",
    },
  ];
  const componet = data.map((value, index) => {
    return (
      <ContactCard
        key={index}
        title={value.title}
        para1={value.para1}
        para2={value.para2}
      />
    );
  });
  return <div className={styles.container}>{componet}</div>;
}

export default ContactCardRow;
