import React, { FC, memo, useEffect, useState } from "react";
import { isDev } from "~/utils/helpers";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "~/utils/config/firebase";
import { FiltersType } from "~/utils/types";
import Filters from "./Partials/Filters/Filters";
import PropertyCard from "~/components/PropertyCard/PropertyCard";
import { useSearchProperties } from "~/contexts/SearchPropertiesContext";

const SearchPage: FC = memo(() => {
  const {fetchedProperties} = useSearchProperties()


  // const fetchBasedOnFilters: any = async () => {
  //   let pageCount = false;
  //   const queryConstraints = [];
  //   const q = query(
  //     collection(db, "properties"),
  //     where("agentId", "==", "Zd58oroNdd7pC5kuKT4C"),
  //     where("pageViewCount", "==", 140)
  //   );

  //   const querySnapshot = await getDocs(q);



  //     // if (docSnap.exists()) {
  // //   return { ...docSnap.data(), id: docSnap.id };
  // // } else {
  // //   console.log("No such agent document!");
  // // }

  //   const data = querySnapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  // };

  // fetchBasedOnFilters();

    // const fetchPropertiesBasedOnFliters =  async () => {
    //   let pageCount = false;
    //   const q = query(
    //     collection(db, "properties"),
    //     where("agentId", "==", "Zd58oroNdd7pC5kuKT4C"),

    //     where("pageViewCount", "==", 140)
    //   );

    //   const querySnapshot = await getDocs(q);
    //   const data = querySnapshot.docs.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id,
    //   }));
    // }
  
  return (
    <div className="container !pl-0">
      <div className="relative min-h-[80vh] grid grid-cols-8 gap-3">
      <div className="col-span-2  rounded-xl">
        <Filters />
      </div>
        <div className="col-span-6 grid grid-cols-4 gap-4">
          {
            fetchedProperties && (
              fetchedProperties.map(property => (<PropertyCard key={property.id} property={property} />))
            )
          }
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  SearchPage.displayName = "SearchPage";
}

export default SearchPage;
