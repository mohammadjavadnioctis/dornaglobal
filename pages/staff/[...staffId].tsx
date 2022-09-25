import { GetServerSideProps } from "next";
import React, { FC, memo } from "react";
import StaffPage from "~/components/pages/StaffPage/StaffPage";
import { isDev } from "~/utils/helpers";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { PropertyType } from "~/utils/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const properties = await fetchProperties();

  return {
    props: { properties },
  };
};

interface StaffPageType {
  properties: PropertyType[];
}

const Staff: FC<StaffPageType> = memo((props) => {
  const { properties } = props;

  return (
    <div>
      <StaffPage properties={properties} />
    </div>
  );
});

if (isDev) {
  Staff.displayName = "Staff";
}

export default Staff;
