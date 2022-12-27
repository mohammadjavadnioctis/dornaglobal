import React, { FC, memo } from "react";
import { commafy, isDev } from "~/utils/helpers";
import Divider from "../Divider/Divider";
import Tag from "../Tag/Tag";
import { IoLocationOutline } from "react-icons/io5";

interface SumWithTextType {
  title?: string;
  tags?: string[];
  address?: Record<string, string>;
  price?: number;
}

const SumWithText: FC<SumWithTextType> = memo((props) => {
  const { title, tags, address, price } = props;
  let formattedPrice = price && commafy(price);
  const sampleTags = ["FEATURED", "FORSALE", "TEST"];

  //   formatting the addres for displaying it properly
  //   remove the blank fields in the address object
  let formattedAddress = address && Object.keys(address)
    .filter((k) => address![k] != null)
    .reduce((a, k) => ({ ...a, [k]: address![k] }), {});
  let displayableAddress = formattedAddress && Object.values(formattedAddress).map(
    (field) => ` ${field}`
  );
  return (
    <div className="container">
      <Divider />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
        <div>
          <h1 className="text-3xl font-normal font-['Playfair_Display'] text-[#222222]">
            {title}
          </h1>
          <div className="flex">
            {sampleTags.map((tag, index) => (
              <Tag
                text={tag}
                wrapperClassNames={index == 0 ? "!bg-accent" : ""}
                key={index}
              />
            ))}
          </div>
          <p className="flex items-center text-base font-normal text-[#636363]">
            <IoLocationOutline className="mr-2 w-5 h-5 flex items-center" />
            <span> {displayableAddress} </span>
          </p>
        </div>
        <div>
          <span className="text-3xl font-semibold font-[Dosis]">
            ₺{formattedPrice}
          </span>
        </div>
      </div>

      <Divider />
    </div>
  );
});

if (isDev) {
  SumWithText.displayName = "SumWithText";
}

export default SumWithText;
