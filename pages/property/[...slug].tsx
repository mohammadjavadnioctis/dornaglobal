import { GetServerSideProps } from "next";
import { db } from "~/utils/config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import SampleProperties2 from "~/utils/data/SampleProperties2.json";
import fetchProperty from "~/utils/helpers/firebase/fetchProperty";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  let { slug } = query;
  let propertyId = (() => {
    if (slug && Array.isArray(slug)) {
      return slug[0];
    } else if (slug && typeof slug == "string") {
      return slug;
    }
  })();
  console.log("here is teh propertyId", propertyId);
  const fetchedProperty = await fetchProperty(propertyId ?? "");

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
  // console.log("this is the property of the page", property);
  return (
    <div>
      <PropertyPage property={property} />
    </div>
  );
};

export default Property;
