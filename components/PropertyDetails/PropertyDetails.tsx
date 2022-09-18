import React, { memo, FC } from "react";
import { isDev } from "~/utils/helpers";
import { PropertyDetailsType } from "~/utils/types";

interface PropertyDetailsComponentType {
  details: PropertyDetailsType[];
}

const PropertyDetails: FC<PropertyDetailsComponentType> = memo((props) => {
  const { details } = props;

  return (
    <div className={`p-10 bg-white rounded-xl mb-4`}>
      <h2 className="text-titleColors text-lg font-playfair pb-10 mb-6 border-b border-gray-400">
        Property Details
      </h2>
      <div className="details_container flex">
        <table className="min-w-[300px] w-full border-collapse inline-block mr-3">
          <tbody>
            {details.slice(0, 6).map((detail, index) => {
              const { detailName, detailTitle, detailValue, id } = detail;
              return (
                <tr
                  className={`py-3 px-4 w-full
                                ${
                                  index == 1 || (index > 0 && index % 2 !== 0)
                                    ? "bg-gray-200"
                                    : ""
                                }
                `}
                  key={id}
                >
                  <td className="py-3 px-4 w-full whitespace-nowrap">
                    {detailTitle}
                  </td>
                  <td className="py-3 px-4 w-full whitespace-nowrap">
                    {detailValue}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="min-w-[300px] w-full border-collapse inline-block">
          <tbody>
            {details.slice(6, 12).map((detail, index) => {
              const { detailName, detailTitle, detailValue, id } = detail;

              return (
                <tr
                  className={`py-3 px-4 w-full
                ${
                  index == 1 || (index > 0 && index % 2 !== 0)
                    ? "bg-gray-200"
                    : ""
                }
                `}
                  key={id}
                >
                  <td className="py-3 px-4 w-full whitespace-nowrap">
                    {detailTitle}
                  </td>
                  <td className="py-3 px-4 w-full whitespace-nowrap">
                    {detailValue}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
});

if (isDev) {
  PropertyDetails.displayName = "PropertyDetails";
}

export default PropertyDetails;
