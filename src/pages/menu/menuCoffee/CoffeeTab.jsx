import React from "react";
import Tab from "./Tab";

function CoffeeTab(props) {
  const { activeTab, setActiveTab } = props;
  return (
    <div>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default CoffeeTab;
