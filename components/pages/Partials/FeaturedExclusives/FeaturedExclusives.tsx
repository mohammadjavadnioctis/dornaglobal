import React from "react";
import Head from "~/components/Head/Head";
import PropertyCard from "~/components/PropertyCard/PropertyCard";
import SamplePropertiesData from "~/utils/data/SampleProperties";
console.log("here is the sample prop data: ", SamplePropertiesData[0].images);
const FeaturedExclusives = () => {
  return (
    <section className="">
      <div></div>
      <Head
        title="Our Featured EXclusives"
        subtitle="CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​"
        subtitleClassNames="text-subtitleColor tracking-[1px] font-medium leading-[1.5rem] font-[Dosis,_sans-serif]"
        containerClassNames="max-w-[600px] mx-auto my-[60px]"
      />

      <div className="w-full border-2 border-yellow-400 justify-center grid grid-cols-2 gap-2 xl:grid-cols-[repeat(3,_minmax(0,_350px))] xl:gap-4">
        {SamplePropertiesData.map((property) => {
          return <PropertyCard property={property} />;
        })}
      </div>
    </section>
  );
};

// {SamplePropertiesData.map((property) => {
//   console.log("a property", property);
//   return property.images && <img src={property?.images[0]} />;
// })}

export default FeaturedExclusives;
