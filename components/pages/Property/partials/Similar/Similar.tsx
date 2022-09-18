import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import { PropertyType } from "~/utils/types";

interface SimilarPropertiesType {
  properties: PropertyType[];
}
const SimilarProperties: FC = memo(() => {
  return <div>: FC</div>;
});

if (isDev) {
  SimilarProperties.displayName = "Similar Properties";
}

export default SimilarProperties;
