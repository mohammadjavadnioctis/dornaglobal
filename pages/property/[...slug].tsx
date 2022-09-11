import { GetServerSideProps } from "next";
import { db } from "~/utils/config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import SampleProperties2 from "~/utils/data/SampleProperties2.json";
import fetchProperty from "~/utils/helpers/firebase/fetchProperty";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const fetchedProperty = await fetchProperty("5JAnhMSBW8BKyawenDSq");

  return {
    props: {
      property: fetchedProperty,
    },
  };
};

import React, { FC } from "react";
import { PropertyType } from "~/utils/types";
import Propertyslider from "~/components/pages/Property/partials/Propertyslider";
import PropertyPage from "~/components/pages/Property/PropertyPage";

interface PropertyPagesProps {
  property: PropertyType;
}

const Property: FC<PropertyPagesProps> = (props) => {
  const { property } = props;
  const { responsivePhotos } = property;
  // console.log("this is the property of the page", property);
  return (
    <div>
      <PropertyPage property={property} />
    </div>
  );
};

export default Property;
