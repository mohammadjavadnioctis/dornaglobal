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
  handleFilterchange: (name: string, e: any) => void;
}
const initialFilters: FiltersType = {
 
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
          filters.address?.city && queryConstraints.push(where('address.city', '==', filters.address?.city))
          filters.address?.neighbourhood && queryConstraints.push(where('address.neighborhood', '==', filters.address?.neighbourhood))
          filters.address?.district && queryConstraints.push(where('address.district', '==', filters.address?.district))
        case 'price': 
         filters.price?.minPrice && queryConstraints.push(where('price', '>=', filters.price?.minPrice))
         filters.price?.maxPrice && queryConstraints.push(where('price', '<=', filters.price?.maxPrice))
         case 'noOfBedRooms': 
         filters.noOfBedRooms && queryConstraints.push(where('noOfBedRooms', '==', filters.noOfBedRooms))
         case 'noOfBathRooms': 
         filters.noOfBathRooms && queryConstraints.push(where('noOfBathRooms', '==', filters.noOfBathRooms))
         case 'floor': 
         filters.floor && queryConstraints.push(where('floor', '==', filters.floor))
         case 'titleDeedStatus': 
         filters.titleDeedStatus && queryConstraints.push(where('titleDeedStatus', '==', filters.titleDeedStatus))
         default:

          break;
      }
    })
    const q = query(
      collection(db, "testproperties"),
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

 

  const handleFilterchange = (name: string, e: any) => {
    // TODO : refactor this part
    switch (name) {
      case "city":
        setFilters((prevState) => ({
          ...prevState,
          address: { ...prevState?.address!, city: e },
        }));
        break;
      case "district":
        setFilters((prevState) => ({
          ...prevState,
          address: { ...prevState?.address!, district: e },
        }));
        break;
      case "neighbourhood":
        setFilters((prevState) => ({
          ...prevState,
          address: { ...prevState?.address!, neighbourhood: e },
        }));
        break;
      case "minPrice":
        setFilters((prevState) => ({
          ...prevState,
          price: { ...prevState?.price!, minPrice: e },
        }));
      case "maxPrice":
        setFilters((prevState) => ({
          ...prevState,
          price: { ...prevState?.price!, maxPrice: e },
        }));
      case "noOfRooms":
        setFilters((prevState) => ({
          ...prevState,
          noOfBedRooms: e,
        }));
      case "noOfBathRooms":
        setFilters((prevState) => ({
          ...prevState,
          noOfBathRooms: e,
        }));
      case "floorNo":
        setFilters((prevState) => ({
          ...prevState,
          floor: e,
        }));
      case "titleDeedStatus":
        setFilters((prevState) => ({
          ...prevState,
         titleDeedStatus: e
        }));
      default:
        break;
    }
  }



  useEffect(() => {
    fetchContextProperties();
  }, []);






  const value: any = useMemo(
    () => ({
      fetchedProperties: properties,
      filters,
      setFilters,
      fetchBasedOnFilters,
      handleFilterchange
    }),
    [properties, filters, setFilters, fetchBasedOnFilters, handleFilterchange]
  );
  return (
    <SearchPropertiesContext.Provider value={value}>
      {children}
    </SearchPropertiesContext.Provider>
  );
};
