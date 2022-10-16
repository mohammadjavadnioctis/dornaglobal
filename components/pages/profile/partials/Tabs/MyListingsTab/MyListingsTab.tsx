import React, { FC, memo } from "react";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";
import NoResults from "~/components/NoResult/NoResult";
import { isDev } from "~/utils/helpers";

const MyListingsTab: FC = memo(() => {
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
        <NoResults />
      </div>
    </div>
  );
});

if (isDev) {
  MyListingsTab.displayName = "MyListingsTab";
}

export default MyListingsTab;
