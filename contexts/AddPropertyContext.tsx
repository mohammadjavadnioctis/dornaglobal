import React, { FC, ReactNode, useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { ChosenCategoryInfoType, FiltersType, PropertyType, PropertyUploadContextType } from "~/utils/types";
import { collection, query, where, getDocs, setDoc, DocumentReference, DocumentData, doc, Timestamp, serverTimestamp } from "firebase/firestore";
import { db } from "~/utils/config/firebase";
import { firestore } from "firebase-admin";
import { useAuth } from "./AuthContext";



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
    UploadProperty: () => Promise<void>,
    docRef: DocumentReference,
    setDocRef: React.Dispatch<React.SetStateAction<DocumentReference<DocumentData> | undefined>>
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
  totalFloorCount: undefined,
  aydat: undefined,
  buildingAge: undefined,
  id:  undefined,
  isVarified: false,
  timestamp: serverTimestamp()
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
  const { user } = useAuth()
  const [details, setDetails] = useState<PropertyUploadContextType>(initialDetails);
  const [docRef, setDocRef] = useState<DocumentReference>()


  const UploadProperty = async () => {
  const response = await setDoc(docRef as DocumentReference<DocumentData> , {...details, chosenCategoryInfo, user}) 
  console.log('this is response: ', response)
  alert('property uploaded')

}

useEffect(()=>{
  console.log('docRef changed; ', docRef)
},[docRef])
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
  useEffect(() => {
    console.log('this is the chosenCategoryInfo from the context: ', chosenCategoryInfo)
  }, 
  [chosenCategoryInfo]);


  useEffect(()=>{
    let ref = doc(collection(db, "testproperties"));
    // let parsedRef =  JSON.stringify(ref)
    console.log('ref: ',ref)
    let id = ref?.id
    setDocRef(ref)
    setDetails(prevDetails => ({...prevDetails, id}))
  },[])

  const value: any = useMemo(
    () => ({
      details,
      setDetails,
      chosenCategoryInfo,
      setChosenCategoryInfo,
      UploadProperty,
      docRef,
      setDocRef
    }),
    [chosenCategoryInfo, details, setDetails, setChosenCategoryInfo, UploadProperty, docRef, setDocRef]
  );
  return (
    <AddPropertyContext.Provider value={value}>
      {children}
    </AddPropertyContext.Provider>
  );
};
