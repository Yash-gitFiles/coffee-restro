import React from "react";
import Gallery from "./Gallery";
import { all, desert, fastFood, hotCoffee } from "../../../data/coffeeGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function CoffeeGallery(props) {
  const { activeTab } = props;
  const recepie = [all, fastFood, hotCoffee, desert];
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {recepie[activeTab].map((value, index) => {
            return <Gallery key={index} img={value.img} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default CoffeeGallery;
