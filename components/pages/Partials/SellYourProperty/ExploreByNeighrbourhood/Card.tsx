import React, { FC, memo } from "react";
import UiImage from "~/lib/Image";
import { isDev } from "~/utils/helpers";

interface category {
  title: string;
  subtitle: string;
  image: string;
  id: number;
}

interface CardProps {
  category: category;
  size?: "small" | "medium" | "large";
}

const Card: FC<CardProps> = memo((props) => {
  const { category, size } = props;
  const { image, subtitle, id, title } = category;

  let cardSize = (() => {
    switch (size) {
      case "small":
        return "row-end-[span_26]";
      case "medium":
        return "row-end-[span_52]";

      case "large":
        return "row-end-[span_78]";
      default:
        return "row-end-[span_26]";
    }
  })();

  // TODO: remove the api key

  return (
    <div
      className={`!relative group card my-4 mx-3 rounded-lg shadow-[0px_10px_20px_0px_rgb(0_0_0_/_20%)] overflow-hidden ${cardSize}`}
    >
      {/*  */}

      {/* background image container */}
      <div className="relative w-full h-full">
        <UiImage src={image} layout="fill" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full font-[Dosis_sans-serif] p-4 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all">
        <span className="block text-white text-xs font-semibold">
          {subtitle}
        </span>
        <span className="text-white text-xl font-semibold">{title}</span>
      </div>
    </div>
  );
});

if (isDev) {
  Card.displayName = "NeightbourhoodsCard";
}

export default Card;
