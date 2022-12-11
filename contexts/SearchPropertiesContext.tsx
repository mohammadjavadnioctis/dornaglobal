import React, { FC, ReactNode, useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { FiltersType, PropertyType } from "~/utils/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "~/utils/config/firebase";

interface SearchPropertiesContextType {
  fetchedProperties?: PropertyType[];
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  fetchBasedOnFilters: () => null;
}
const initialFilters: FiltersType = {
  address: {
    city: "",
    district: "",
    neighbourhood: "",
  },
  balcony: false,
  dateListed: null,
  floor: null,
  furnished: null,
  heatingSystem: null,
  isInBuildingComplex: null,
  noOfBathRooms: null,
  noOfBedRooms: null,
  price: {
    maxPrice: null,
    minPrice: null,
  },
  titleDeedStatus: null,
  usageStatus: null,
  yearBuilt: null,
};

export const SearchPropertiesContext =
// @ts-ignore
  React.createContext<SearchPropertiesContextType>({ filters: initialFilters });

export const useSearchProperties = () => {
  return useContext(SearchPropertiesContext);
};

type SearchPropertiesProviderContextType = {
  children: ReactNode;
};

export const SearchPropertiesProvider: FC<
  SearchPropertiesProviderContextType
> = ({ children }) => {
  const [properties, setProperties] = useState<PropertyType[]>();

  const [filters, setFilters] = useState<FiltersType>(initialFilters);

  const fetchContextProperties = async () => {
    const fetchedProperties = await fetchProperties();
    setProperties(fetchedProperties as PropertyType[]);
    return fetchedProperties;
  };

  const fetchBasedOnFilters: any = async () => {
    let pageCount = false;
    const queryConstraints:any = [
      // where("agentId", "==", "Zd58oroNdd7pC5kuKT4C"),
      // where("pageViewCount", "==", 140),
    ];

    Object.keys(filters)?.forEach((key, index) => {
      switch (key) {
        case 'address':
          filters.address?.neighbourhood && queryConstraints.push(where('address.neighborhood', '==', filters.address?.neighbourhood))
          filters.address?.district && queryConstraints.push(where('address.district', '==', filters.address?.district))
      
        default:
          break;
      }
    })
    const q = query(
      collection(db, "properties"),
      ...queryConstraints
      // where("address.streetAddress", "==", "2505 Prospect St"),
      // where("pageViewCount", "==", 140)
    );

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProperties(data as PropertyType[]);
  };

 

  useEffect(() => {}, [properties]);

  useEffect(() => {
    fetchContextProperties();
  }, []);
  const value: any = useMemo(
    () => ({
      fetchedProperties: properties,
      filters,
      setFilters,
      fetchBasedOnFilters,
    }),
    [properties, filters, setFilters, fetchBasedOnFilters]
  );
  return (
    <SearchPropertiesContext.Provider value={value}>
      {children}
    </SearchPropertiesContext.Provider>
  );
};
