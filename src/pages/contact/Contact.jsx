import React from "react";
import styles from "../../styles/concat/concat.module.css";
import ContactCardRow from "./ContactCardRow";
import ContactForm from "./ContactForm";
import CenterModeSlider from "../menu/menuRestaurant/CenterModeSlider";
import BranchesRow from "../about/BranchesRow";

function Contact() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src="/images/coffee19.jpg" alt="" />
        <h5>Contact Us</h5>
      </div>
      <ContactCardRow />
      <ContactForm />
      <CenterModeSlider />
      <BranchesRow />
    </div>
  );
}

export default Contact;
