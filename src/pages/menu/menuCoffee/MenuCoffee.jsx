import React, { useState } from "react";
import styles from "../../../styles/menu/menuCoffee.module.css";
import Title from "../../../componet/common/Title";
import CoffeeTab from "./CoffeeTab";
import CoffeeGallery from "./CoffeeGallery";
import BranchesRow from "../../about/BranchesRow";

function MenuCoffee() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
        <Title title="CHOOSE BEST OF" desc="Kaffen Coffee Menu" />
      </div>
      <div>
        <CoffeeTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <CoffeeGallery activeTab={activeTab} />
      </div>
      <div className={styles.reservationContainer}>
        <div className={styles.imgOneContainer}>
          <img src="/images/coffee11.jpg" alt="" />
        </div>
        <div className={styles.formContainer}>
          <Title title="BOOKING TABLE" desc="Make Your Reservation" />
          <form action="#">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="number" placeholder="Mobile No." />
            <input type="date" placeholder="dd-mm-yyyy" />
            <button>BOOKING A TABLE</button>
          </form>
        </div>
        <div className={styles.imgTwoContainer}>
          <img src="/images/coffee41.jpg" alt="" />
        </div>
      </div>
      <BranchesRow />
    </div>
  );
}

export default MenuCoffee;
