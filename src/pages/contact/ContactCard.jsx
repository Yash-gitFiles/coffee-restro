import React from "react";
import styles from "../../styles/concat/contactCard.module.css";

function ContactCard(props) {
  const { title, para1, para2 } = props;
  return (
    <div className={styles.contactCardContainer}>
      <div className={styles.descContainer}>
        <h4>{title}</h4>
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
    </div>
  );
}

export default ContactCard;
