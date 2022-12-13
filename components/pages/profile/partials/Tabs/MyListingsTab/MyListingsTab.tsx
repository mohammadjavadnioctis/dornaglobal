import React, { FC, memo } from "react";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";
import NoResults from "~/components/NoResult/NoResult";
import { isDev } from "~/utils/helpers";
import { PropertyUploadContextType } from "~/utils/types";
import PropertyRow from "./PropertyRow";


interface MyListingsType {
  listedProperties: PropertyUploadContextType[];
}




const MyListingsTab: FC<MyListingsType> = memo((props) => {
  const { listedProperties } = props
  return (
    <div className="w-full h-full p-4">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-accent-600">My Listings</h2>
          <h3 className="text-sm opacity-60"> all Listings </h3>
        </div>

        <ListyourPropertyButton />
      </div>
      <div className="mt-7">
        {
          listedProperties.map(property => (
            <PropertyRow property={property} />
          )
          )
        }
        {!listedProperties && <NoResults />}

      </div>
    </div>
  );
});

if (isDev) {
  MyListingsTab.displayName = "MyListingsTab";
}

export default MyListingsTab;
