import { GetServerSideProps } from "next";
import React, { FC, memo } from "react";
import StaffPage from "~/components/pages/StaffPage/StaffPage";
import { isDev } from "~/utils/helpers";
import fetchAgent from "~/utils/helpers/firebase/fetchAgent";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { AgentType, PropertyType } from "~/utils/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const properties = await fetchProperties();

  const { query } = context;
  const { staffId } = query;

  let agentId = (() => {
    if (staffId && Array.isArray(staffId)) {
      return staffId[0];
    } else if (staffId && typeof staffId == "string") {
      return staffId;
    }
  })();

  const fetchedAgent = await fetchAgent(agentId ?? "");

  console.log("this is fetchedAgent: ", fetchedAgent);

  return {
    props: { properties, staff: fetchedAgent },
  };
};

interface StaffPageType {
  properties: PropertyType[];
  staff: AgentType;
}

const Staff: FC<StaffPageType> = memo((props) => {
  const { properties, staff } = props;

  return (
    <div>
      <StaffPage properties={properties} staff={staff} />
    </div>
  );
});

if (isDev) {
  Staff.displayName = "Staff";
}

export default Staff;
