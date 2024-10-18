import React from "react";
import Review from "./Review";
import styles from "../../styles/home/review.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../common/Title";

function ReviewRow() {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const data = [
    {
      img: "/images/coffee16.jpg",
      title: "Frederick S.France",
      profession: "Web Designer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam nemo recusandae nobis, eaque maxime.",
    },
    {
      img: "/images/coffee17.jpg",
      title: "James M. London",
      profession: "Lawyer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam nemo recusandae nobis, eaque maxime.",
    },
    {
      img: "/images/coffee18.jpg",
      title: "Olivia D. New York",
      profession: "Dentist",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam nemo recusandae nobis, eaque maxime.",
    },
    {
      img: "/images/coffee16.jpg",
      title: "Frederick S.France",
      profession: "Web Designer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam nemo recusandae nobis, eaque maxime.",
    },
    {
      img: "/images/coffee17.jpg",
      title: "James M. London",
      profession: "Lawyer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam nemo recusandae nobis, eaque maxime.",
    },
    {
      img: "/images/coffee18.jpg",
      title: "Olivia D. New York",
      profession: "Dentist",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam nemo recusandae nobis, eaque maxime.",
    },
  ];
  const componet = data.map((value, index) => {
    return (
      <Review
        key={index}
        img={value.img}
        title={value.title}
        profession={value.profession}
        desc={value.desc}
      />
    );
  });
  return (
    <div className={styles.mainContainer}>
      <div className="slider-container">
        <Title title="CUSTOMER FEEDBACK" desc="What Our Clients Say" />
        <Slider {...settings}>{componet}</Slider>
      </div>
    </div>
  );
}

export default ReviewRow;
