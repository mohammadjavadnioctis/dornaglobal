import { GetServerSideProps, NextPage } from "next";
import { NextRequest, NextResponse } from "next/server";
import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { AgentType, PropertyType } from "~/utils/types";
import Agents from "../Home/Partials/Agents/Agents";
import FeaturedExclusives from "../Home/Partials/FeaturedExclusives/FeaturedExclusives";
import AgentBaner from "./partials/Banner/AgentBanner";

interface StaffPageType {
  properties: PropertyType[];
  staff: AgentType;
}

const StaffPage: NextPage<StaffPageType> = memo((props) => {
  const { properties, staff } = props;

  return (
    <div>
      <AgentBaner agent={staff} />
      <FeaturedExclusives
        title={`Offered By ${staff.name}`}
        properties={properties}
      />
      <Agents />
    </div>
  );
});

if (isDev) {
  StaffPage.displayName = "StaffPage";
}

export default StaffPage;
