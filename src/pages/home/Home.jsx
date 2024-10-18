import React from "react";
import MenuRow from "../../componet/home/MenuRow";
import PopularCoffeeRow from "../../componet/home/PopularCoffeeRow";
import HeroSection from "../about/HeroSection";
import CountUpRow from "../../componet/home/CountUpRow";
import CarouselRow from "../about/CarouselRow";

function Home() {
  return (
    <div>
      <CarouselRow />
      <HeroSection
        desc1="ABOUT US"
        title="Organic & Fresh Coffee Provider Center"
        desc2="  Sed ut perspiciatis unde omnis iste natus error voluptate accusantiumdoloremque laudantium, totam rem aperiam eaque ipsa quae abilloinventore veritatis et quasi architecto beatae vitae dicta suntexplicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut oditaut fugit sed quia consequuntur magni dolores eos qui ratione"
        img1="/images/coffee05.jpg"
        desc3="Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae"
        img2="/images/coffee04.jpg"
        imageFirst
      />
      <MenuRow />
      <PopularCoffeeRow />
      <HeroSection
        desc1="WHY CHOOSE US"
        title="New London Coffee Founded For Extraordinary Test"
        desc2="  Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis"
        img1="/images/coffee05.jpg"
        desc3="Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae"
        img2="/images/coffee15.jpg"
        contentFirst
      />
      <CountUpRow />
    </div>
  );
}

export default Home;
