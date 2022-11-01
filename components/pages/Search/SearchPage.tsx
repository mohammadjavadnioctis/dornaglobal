import React, { FC, memo, useState } from "react";
import { isDev } from "~/utils/helpers";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "~/utils/config/firebase";
import { FiltersType } from "~/utils/types";
import Filters from "./Partials/Filters/Filters";

const SearchPage: FC = memo(() => {

  const fetchBasedOnFilters: any = async () => {
    let pageCount = false;
    const queryConstraints = [];
    const q = query(
      collection(db, "properties"),
      where("agentId", "==", "Zd58oroNdd7pC5kuKT4C"),
      where("pageViewCount", "==", 140)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("this is data :", data);
  };
  fetchBasedOnFilters();

  //   (async function () {
  //     let pageCount = false;
  //     const q = query(
  //       collection(db, "properties"),
  //       where("agentId", "==", "Zd58oroNdd7pC5kuKT4C"),

  //       where("pageViewCount", "==", 140)
  //     );

  //     const querySnapshot = await getDocs(q);
  //     const data = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log("this is data :", data);
  //   }
  // )()
  return (
    <div className="container !pl-0 border border-orange-400">
      <div className="relative min-h-[80vh] grid grid-cols-8 gap-3">
      <div className="col-span-2  rounded-xl h-[50vh]">
        <Filters />
      </div>
        <div className="col-span-4 border border-green-400">the right one</div>
      </div>
    </div>
  );
});

if (isDev) {
  SearchPage.displayName = "SearchPage";
}

export default SearchPage;
