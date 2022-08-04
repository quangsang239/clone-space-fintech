import React from "react";
import Industry from "./Industry";
import WhatWeThink from "./WhatWeThink";
import MarketingBusiness from "./MarketingBusiness";
import Digitalization from "./Digitalization";
import EngineeringStrategy from "./EngineeringStrategy";
import Technology from "./Technology";
import Programming from "./Programming";
import OurServices from "./OurServices";
import OurSkill from "./OurSkill";
import YourBusiness from "./YourBusiness";
import CreativeDesign from "./CreativeDesign";
import RecentProject from "./RecentProject/index";

const index = () => {
  return (
    <div className="relative">
      <WhatWeThink />
      <Industry />
      <MarketingBusiness />
      <Digitalization />
      <EngineeringStrategy />
      <Technology />
      <Programming />
      <OurServices />
      <OurSkill />
      <YourBusiness />
      <CreativeDesign />
      <RecentProject />
    </div>
  );
};

export default index;
