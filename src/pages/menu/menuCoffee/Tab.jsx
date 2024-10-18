import React from "react";
import styles from "../../../styles/menu/menuCoffee/coffeeTab.module.css";

function Tab(props) {
  const { activeTab, setActiveTab } = props;
  function handleClick(index) {
    setActiveTab(index);
    // console.log("activeTab", activeTab);
  }
  return (
    <div>
      <ul className={styles.ulContainer}>
        <li
          onClick={function () {
            handleClick(0);
          }}
        >
          All
        </li>
        <li
          onClick={function () {
            handleClick(1);
          }}
        >
          Fast Food
        </li>
        <li
          onClick={function () {
            handleClick(2);
          }}
        >
          Hot Coffee
        </li>
        <li
          onClick={function () {
            handleClick(3);
          }}
        >
          Desert
        </li>
      </ul>
    </div>
  );
}

export default Tab;
