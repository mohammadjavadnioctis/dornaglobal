import React, { FC, memo } from "react";
import Head from "~/components/Head/Head";
import PropertiesSlider from "~/components/PropertiesSlider/PropertiesSlider";
import PropertyCard from "~/components/PropertyCard/PropertyCard";
import SamplePropertiesData from "~/utils/data/SampleProperties";
import { isDev } from "~/utils/helpers";
import { PropertyType } from "~/utils/types";

interface FeaturedExclusivesType {
  title?: string;
  properties: PropertyType[];
}

const FeaturedExclusives: FC<FeaturedExclusivesType> = memo((props) => {
  const { title = "Our Featured Exclusives", properties } = props;
  return (
    <section className="container">
      <div></div>
      <Head
        title={title}
        subtitle="CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​"
        subtitleClassNames="text-subtitleColor tracking-[1px] font-medium leading-[1.5rem] font-[Dosis,_sans-serif]"
        containerClassNames="max-w-[600px] mx-auto my-[60px]"
      />

      {/* TODO: create keys for this map */}
      <PropertiesSlider properties={properties} />

      {/* <div className="w-full justify-center grid grid-cols-2 gap-2 xl:grid-cols-[repeat(3,_minmax(0,_350px))] xl:gap-4">
        {SamplePropertiesData.map((property) => { */}
      {/* @ts-ignore */}
      {/* return <PropertyCard key={property.id} property={property} />; */}
      {/* })}
      </div> */}
    </section>
  );
});

if (isDev) {
  FeaturedExclusives.displayName = "FeaturedExclusives";
}

export default FeaturedExclusives;
