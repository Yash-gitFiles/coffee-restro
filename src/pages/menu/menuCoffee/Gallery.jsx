import React from "react";
import styles from "../../../styles/menu/menuCoffee/coffeeGallery.module.css";
import Modal from "../../../componet/common/Modal";

function Gallery(props) {
  function handle() {
    console.log("123");
  }
  const { img } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" onClick={handle} />
      </div>
      <Modal />
    </div>
  );
}

export default Gallery;
