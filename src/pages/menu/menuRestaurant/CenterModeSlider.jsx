import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../../../styles/menu/menuRestaurant/centerModeSlider.module.css";

function CenterModeSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className={styles.imgContainer}>
            <img src="/images/coffee41.jpg" alt="01" />
          </div>
          <div className={styles.imgContainer}>
            <img src="/images/coffee42.jpg" alt="01" />
          </div>
          <div className={styles.imgContainer}>
            <img src="/images/coffee43.jpg" alt="01" />
          </div>
          <div className={styles.imgContainer}>
            <img src="/images/coffee44.jpg" alt="01" />
          </div>
          <div className={styles.imgContainer}>
            <img src="/images/coffee09.jpg" alt="01" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CenterModeSlider;
