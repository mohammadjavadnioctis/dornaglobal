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
    activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>,
    nextStep: () => void,
    prevStep: () => void

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
  noOfBathRooms: 0,
  noOfBedRooms: 0,
  price: 0,
  titleDeedStatus: '',
  usageStatus: null,
  yearBuilt: null,
  livingArea: 0,
  totalArea: 0,
  totalFloorCount: undefined,
  aydat: 0,
  buildingAge: null,
  id:  '',
  isVarified: false,
  deposit: 0,
  listingStatus: 'Listing in progress',
  mediaUrls : {images: null, videos: null},
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
    formFields: null,
  });
  const { user } = useAuth()
  const [details, setDetails] = useState<PropertyUploadContextType>(initialDetails);
  const [docRef, setDocRef] = useState<DocumentReference>()


  const UploadProperty = async () => {
  const response = await setDoc(docRef as DocumentReference<DocumentData> , {...details, chosenCategoryInfo, user: {email: user?.email, uid: user?.uid}}) 
  console.log('this is response: ', response)
  alert('property uploaded')

}

  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () =>
  setActiveStep((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
  setActiveStep((current) => (current > 0 ? current - 1 : current));


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


  useEffect(()=>{
    let ref = doc(collection(db, "testproperties"));
    // let parsedRef =  JSON.stringify(ref)
    console.log('ref: ',ref)
    let id = ref?.id
    setDocRef(ref)
    setDetails(prevDetails => ({...prevDetails, id}))
  },[])


useEffect(() => {
  console.log('details from context changed: ', details)
} ,[details])

  const value: any = useMemo(
    () => ({
      details,
      setDetails,
      chosenCategoryInfo,
      setChosenCategoryInfo,
      UploadProperty,
      docRef,
      setDocRef,
      activeStep,
      setActiveStep,
      prevStep,
      nextStep
    }),
    [chosenCategoryInfo, details, setDetails, setChosenCategoryInfo, UploadProperty, docRef, setDocRef, activeStep,
      setActiveStep,
      prevStep,
      nextStep]
  );
  return (
    <AddPropertyContext.Provider value={value}>
      {children}
    </AddPropertyContext.Provider>
  );
};
