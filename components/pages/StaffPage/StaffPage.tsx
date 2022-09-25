import { GetServerSideProps, NextPage } from "next";
import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { PropertyType } from "~/utils/types";
import Agents from "../Partials/Agents/Agents";
import FeaturedExclusives from "../Partials/FeaturedExclusives/FeaturedExclusives";
import AgentBaner from "./partials/Banner/AgentBanner";

interface StaffPageType {
  properties: PropertyType[];
}

const StaffPage: NextPage<StaffPageType> = memo((props) => {
  const { properties } = props;

  return (
    <div>
      <AgentBaner />
      <FeaturedExclusives title="Offered By John" properties={properties} />
      <Agents />
    </div>
  );
});

if (isDev) {
  StaffPage.displayName = "StaffPage";
}

export default StaffPage;
