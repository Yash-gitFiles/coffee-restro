import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideCarousel from "./SlideCarousel.jsx";

function CarouselRow() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const data = [
    {
      img: "/images/coffee01.jpg",
      title: "The London Coffee House",
      btn1: "Explore More",
      btn2: "Get Delivery",
    },
    {
      img: "/images/coffee02.jpg",
      title: "The Paris Coffee House",
      btn1: "Explore More",
      btn2: "Get Delivery",
    },
    {
      img: "/images/coffee03.jpg",
      title: "Great Cooffee Good Vibes",
      btn1: "Explore More",
      btn2: "Get Delivery",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <SlideCarousel
        key={index}
        img={value.img}
        title={value.title}
        btn1={value.btn1}
        btn2={value.btn2}
      />
    );
  });
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>{componet}</Slider>
      </div>
    </div>
  );
}

export default CarouselRow;
