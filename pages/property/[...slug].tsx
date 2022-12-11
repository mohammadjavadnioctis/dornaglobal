import { GetServerSideProps } from "next";
import { db } from "~/utils/config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
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
  const fetchedProperty = await fetchProperty(propertyId ?? '', true) ;
  const parsedFetchedProperty = await JSON.parse(JSON.stringify(fetchedProperty))
  const agentId = (typeof parsedFetchedProperty?.agentId == 'string' &&  parsedFetchedProperty?.agentId.length > 0 ) ? parsedFetchedProperty?.agentId :  'xpRbGNtDWVYGzBkran8g'
  const fetcehdAgent = await fetchAgent(agentId);
  const parsedFetchedAgent = await JSON.parse(JSON.stringify(fetcehdAgent))
  const fetchSimilarProperties = await fetchProperties();
  return {
    props: {
      property: parsedFetchedProperty,
      similarProperties: fetchSimilarProperties,
      agent: parsedFetchedAgent,
    },
  };
};

import React, { FC } from "react";
import { AgentType, PropertyType, PropertyTypeV2 } from "~/utils/types";
import Propertyslider from "~/components/pages/Property/partials/Propertyslider";
import PropertyPage from "~/components/pages/Property/PropertyPage";
import fetchAgent from "~/utils/helpers/firebase/fetchAgent";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";

interface PropertyPagesProps {
  // property: PropertyType;
  property: PropertyTypeV2
  similarProperties: PropertyType[];
  agent: AgentType;
}

const Property: FC<PropertyPagesProps> = (props) => {
  const { property, agent, similarProperties } = props;
  return (
    <div>
      <PropertyPage
        property={property}
        agent={agent}
        similarProperties={similarProperties}
      />
    </div>
  );
};

export default Property;
