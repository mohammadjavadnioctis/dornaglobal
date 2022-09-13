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
  // @ts-ignore
  const { agentId } = fetchedProperty;
  console.log("agent id ", agentId);
  const fetcehdAgent = await fetchAgent(agentId ?? "");

  return {
    props: {
      property: fetchedProperty,
      agent: fetcehdAgent,
    },
  };
};

import React, { FC } from "react";
import { AgentType, PropertyType } from "~/utils/types";
import Propertyslider from "~/components/pages/Property/partials/Propertyslider";
import PropertyPage from "~/components/pages/Property/PropertyPage";
import fetchAgent from "~/utils/helpers/firebase/fetchAgent";

interface PropertyPagesProps {
  property: PropertyType;
  agent: AgentType;
}

const Property: FC<PropertyPagesProps> = (props) => {
  const { property, agent } = props;
  console.log("this is the property of the page", property);
  return (
    <div>
      <PropertyPage property={property} agent={agent} />
    </div>
  );
};

export default Property;
