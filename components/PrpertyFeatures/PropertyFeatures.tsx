import React, { memo, FC } from "react";
import { isDev } from "~/utils/helpers";
import { PropertyFeaturesType } from "~/utils/types";
import { BsCheckCircle } from "react-icons/bs";

interface PropertyFeaturesComponentType {
  features: PropertyFeaturesType[];
}

const PropertyFeatures: FC<PropertyFeaturesComponentType> = memo((props) => {
  const { features } = props;

  return (
    <div className={`p-10 bg-white rounded-xl mb-4 mt-4`}>
      <h2 className="text-titleColors text-lg font-playfair pb-10 mb-6 border-b border-gray-400">
        Property Features
      </h2>
      <div className="features-container grid grid-cols-3">
        {features.map((feature) => {
          const { featureName, featureTitle, id } = feature;
          return (
            <div className="flex items-center mb-2">
              <BsCheckCircle className="features mr-2" />
              <span>{featureTitle}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

if (isDev) {
  PropertyFeatures.displayName = "PropertyFeatures";
}

export default PropertyFeatures;
