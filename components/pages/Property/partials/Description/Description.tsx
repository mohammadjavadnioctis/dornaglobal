import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";

interface DescriptionType {
  title?: string;
  description: string;
}

const Description: FC<DescriptionType> = memo((props) => {
  const { title = "Description", description } = props;
  return (
    <div className="w-full border-2 border-red-400 p-10 bg-white">
      <h3 className="font-['Playfair_Display'] text-lg pb-10 border-b border-gray-400 mb-6">
        {title}
      </h3>
      <div>
        <p className="text-base font-normal text-[#222222c7]">{description}</p>
      </div>
    </div>
  );
});

if (isDev) {
  Description.displayName = "Description";
}

export default Description;
