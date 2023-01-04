import React, { FC, forwardRef, memo } from "react";
import Head from "~/components/Head/Head";
import PropertiesSlider from "~/components/PropertiesSlider/PropertiesSlider";
import PropertyCard from "~/components/PropertyCard/PropertyCard";
import useTrans from "~/lib/useTranslate";
import SamplePropertiesData from "~/utils/data/SampleProperties";
import { isDev } from "~/utils/helpers";
import { PropertyType } from "~/utils/types";

interface FeaturedExclusivesType {
  title?: string;
  subtitle?: string;
  properties: PropertyType[];
  silmilar?: boolean;
  slidesPerView?: number;
  wrapperClassNames?: string;
  titleClassNames?: string;
  subtitleClassNames?: string;
  titleContainerClassNames?: string;
  ref?: any;
  showSliderButtons?: boolean;
}

const FeaturedExclusives: FC<FeaturedExclusivesType> = forwardRef<
  HTMLDivElement,
  FeaturedExclusivesType
>((props, ref) => {
  const {
    title = "Our Featured Exclusives",
    subtitle = "CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ",
    properties,
    silmilar = false,
    slidesPerView = 4,
    wrapperClassNames,
    titleClassNames,
    subtitleClassNames,
    titleContainerClassNames,
    showSliderButtons = true,
  } = props;
  const t = useTrans()
  return (
    <section className={`container ${wrapperClassNames}`} ref={ref}>
      <div></div>
      <Head
        title={title}
        subtitle={t(subtitle)}
        subtitleClassNames={`text-subtitleColor tracking-[1px] font-medium leading-[1.5rem] font-[Dosis,_sans-serif] ${subtitleClassNames}`}
        containerClassNames={`max-w-[600px] mx-auto my-[60px] ${titleContainerClassNames}`}
        titleClassnames={`${titleClassNames}`}
      />

      {/* TODO: create keys for this map */}
      <PropertiesSlider
        properties={properties}
        similar={silmilar}
        slidesPerView={slidesPerView}
        showButtons={showSliderButtons}
      />

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
