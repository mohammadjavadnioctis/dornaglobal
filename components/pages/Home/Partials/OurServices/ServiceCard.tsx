import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import useTrans from "~/lib/useTranslate";
import { isDev } from "~/utils/helpers";

interface ServiceCardType {
  name?: string;
  description?: string;
  image?: string;
  id?: string;
}

const ServiceCard: FC<ServiceCardType> = memo((props) => {
  const { name, description, image, id } = props;
  const t = useTrans()
  return (
    <div className="w-full max-w-[360px] flex mb-5 p-4 ">
      <div className="h-full w-auto inline-flex">
        {image && <UiImage src={image} width={40} height={40} />}
      </div>
      <div className="w-full h-full pl-5 pr-8">
        <strong className="block font-semibold ">{name && t(name.toUpperCase())}</strong>
        <span className="block text-gray-600 mt-3 mb-5">{description && t(description.toLocaleUpperCase())}</span>
      </div>
    </div>
  );
});

if (isDev) {
  ServiceCard.displayName = "ServiceCard";
}

export default ServiceCard;
