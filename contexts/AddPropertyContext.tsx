import React, { FC, ReactNode, useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { ChosenCategoryInfoType, FiltersType, PropertyType, PropertyUploadContextType } from "~/utils/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "~/utils/config/firebase";



// interface PropertyDetailsType extends FiltersType {
//     title: string,
//     description: string 
// }

interface AddPropertyContextContextType {
    chosenCategoryInfo: ChosenCategoryInfoType,
    setChosenCategoryInfo: React.Dispatch<React.SetStateAction<ChosenCategoryInfoType>>
    media: any;
    details: PropertyUploadContextType;
    setDetails: React.Dispatch<React.SetStateAction<PropertyUploadContextType>>
}


const initialDetails: PropertyUploadContextType  = {
    title: '',
    description: '',
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
  noOfBathRooms: undefined,
  noOfBedRooms: undefined,
  price: undefined,
  titleDeedStatus: null,
  usageStatus: null,
  yearBuilt: null,
  livingArea: undefined,
  totalArea: undefined,
};

export const AddPropertyContext =
// @ts-ignore
  React.createContext<AddPropertyContextContextType>({ details: initialDetails });

export const usePropertyContext = () => {
  return useContext(AddPropertyContext);
};

type SearchPropertiesProviderContextType = {
  children: ReactNode;
};

export const AddPropertyProvider: FC<
  SearchPropertiesProviderContextType
> = ({ children }) => {
  const [chosenCategoryInfo, setChosenCategoryInfo] =
  useState<ChosenCategoryInfoType>({
    category: null,
    dealType: null,
    PropertyType: null,
    correspondingForm: null,
  });
  const [details, setDetails] = useState<PropertyUploadContextType>(initialDetails);

//   const fetchContextProperties = async () => {
//     const fetchedProperties = await fetchProperties();
//     setProperties(fetchedProperties as PropertyType[]);
//     return fetchedProperties;
//   };

//   const fetchBasedOnFilters: any = async () => {
//     let pageCount = false;
//     const queryConstraints:any = [
//       // where("agentId", "==", "Zd58oroNdd7pC5kuKT4C"),
//       // where("pageViewCount", "==", 140),
//     ];

//     Object.keys(details)?.forEach((key, index) => {
//       switch (key) {
//         case 'address':
//             details.address?.neighbourhood && queryConstraints.push(where('address.neighborhood', '==', details.address?.neighbourhood))
//             details.address?.district && queryConstraints.push(where('address.district', '==', details.address?.district))
      
//         default:
//           break;
//       }
//     })
//     const q = query(
//       collection(db, "properties"),
//       ...queryConstraints
//       // where("address.streetAddress", "==", "2505 Prospect St"),
//       // where("pageViewCount", "==", 140)
//     );

//     const querySnapshot = await getDocs(q);

//     const data = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     setProperties(data as PropertyType[]);
//   };

  useEffect(() => {
    console.log('this is the details from the context: ', details)
  }, 
  [details]);


  const value: any = useMemo(
    () => ({
      details,
      setDetails,
      chosenCategoryInfo,
      setChosenCategoryInfo
    }),
    [chosenCategoryInfo, details, setDetails]
  );
  return (
    <AddPropertyContext.Provider value={value}>
      {children}
    </AddPropertyContext.Provider>
  );
};
