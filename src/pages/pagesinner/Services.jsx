import React from "react";
import MenuRow from "../../componet/home/MenuRow";
import Title from "../../componet/common/Title";
import MenuRowAbout from "../about/MenuRowAbout";

function Services() {
  return (
    <div>
      <Title title="WE PROVIDE" desc="Kaffen Services One" />
      <MenuRow />
      <Title title="OUR AWESOME" desc="Kaffen Services Two" />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        services No.2 baki se........
      </h1>
      <Title title="OUR AWESOME" desc="Kaffen Services Three" />
      <MenuRowAbout />
    </div>
  );
}

export default Services;
