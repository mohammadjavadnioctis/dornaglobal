import React, { FC, memo, useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import {usePropertyContext } from "~/contexts/AddPropertyContext";
import { UIButton } from "~/lib";
import ChooseCategorySteps from "~/utils/data/ChoseCategorySteps";
import { isDev } from "~/utils/helpers";
import {
  ChosenPropertyType,
  DealType,
  PropertySubCategoryType,
} from "~/utils/types";
//  import citiesData from '~/utils/data/mahalleV2.json'
import { addDoc, collection } from "firebase/firestore";
import { db } from "~/utils/config/firebase";


const ChooseCategory: FC = memo(() => {
 
  const {chosenCategoryInfo, setChosenCategoryInfo, nextStep} = usePropertyContext()
  const [dealTypes, setDealTypes] = useState<DealType[] | null>(null);
  const [isCategoryChosen , setIsCategoryChosen] = useState(false)
  const [chosenPropertyCategory, setChosenPropertyCategory] =
    useState<ChosenPropertyType | null>(null);
    const [rtData, setRTData] = useState(null)

  const [
    correspondingPropertyTypesToChosenDealType,
    setCorrespondingPropertyTypesToChosenDealType,
  ] = useState<PropertySubCategoryType[] | null | undefined>(null);

  const handleChosenCategory = (ChosenCategory: any) => {
    const { categoryName, dealTypes } = ChosenCategory;
    setChosenCategoryInfo((prevState) => ({
      ...prevState,
      category: ChosenCategory.categoryName,
    }));
    setChosenPropertyCategory(ChosenCategory);
    setDealTypes(dealTypes);
    setChosenCategoryInfo((prevState) => ({
      ...prevState,
      dealType: null,
      PropertyType: null,
      correspondingForm: null,
    }));
  };



  useEffect(() => {
    console.log('is strict mode on ? ')


  }, [])

  const uploadData = async () => {
    
    // await setDoc(doc(db, "cities" ), {
    //   name: "istanbul",
    //   state: "CA",
    //   country: "USA"ƒ
    // });
   
    // const slicedCitiesData = citiesData.slice(0, 20)
   
  
    // @ts-ignore
    // citiesData.map((data: any) => {
    //   addDoc(collection(db, 'neighboursV2', ), {
    //    ...data
    // })
    // })

//   try{

  
//   const q = await query(
//     collection(db, "neighbourhood"),
//     where('DistrictID', '==', 802)
//     );
//     const fetchedCity = await getDocs(q);
//     const theData = fetchedCity.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         console.log('query result : ', theData)
// }catch(error){
//   console.log('this is error', error)
// }
  //  @ts-ignore

  

  //   const data = querySnapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   addDoc(collection(db, 'cities'), {
  //     name: 'test name  ',
  //     type: 'bridge'
  // })



    // console.log('hi')

    //  const dbRef = await ref(RTdatabase);
    // console.log('this is dbRef', dbRef)
    // try{
    //   const getResponse = await get(child(dbRef, '/cities' ,))
    //   console.log('RTData: this is getResponse baby :', getResponse)

    // }catch (error) {
    //   console.log('the error is: ', error)
    // }


    // get(child(dbRef, '/')).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log('RTData: this is snapshot baby :', snapshot.val())
    //   } else {
    //     console.log('RTData: no data avalable ', snapshot)
    //   }
    // }).catch((error) => {
    //   console.error('RTData: this is error',error);
    // });
    //     const db = RTdatabase;
    //     const dbref = ref(db);
    //     onValue(dbref, (snapshot) => {
    //       const data = snapshot.val();
    //       setRTData(data)
    //     });

    
  }


  useEffect(() => {
    //     const dbRef = ref(getDatabase());
    // get(child(dbRef, '/')).then((snapshot) => {
    //   if (snapshot.exists()) {
    //   } else {
    //   }
    // }).catch((error) => {
    //   console.error('dataFetching: this is error',error);
    // });
      //   const db = RTdatabase;
      //   const dbref = ref(db);
      //   onValue(dbref, (snapshot) => {
      //     const data = snapshot.val();
      //     setRTData(data)
      //   });

    uploadData()

      } ,[])

    

  const handleChooseDeal = (deal: DealType) => {
    const { dealName, formFields} = deal;
    setChosenCategoryInfo((prevState) => ({
      ...prevState,
      dealType: dealName,
      PropertyType: null,
      formFields: formFields ?? null
    }));
  };

  const handleSelectPropertyType = (PropertyType: PropertySubCategoryType) => {
    const { propertyTypeName, formFields } = PropertyType;
    setChosenCategoryInfo((prevState) => ({
      ...prevState,
      PropertyType: propertyTypeName,
      formFields
    }));
  };

  

  useEffect(() => {
   
    if (chosenPropertyCategory) {
      setCorrespondingPropertyTypesToChosenDealType((prevState) => {
        switch (chosenCategoryInfo.dealType) {
          case "forsale":
            return chosenPropertyCategory.forSalePropertyTypes;
          case "rental":
            return chosenPropertyCategory.rentalPropertyTypes;
          case "dailyRental":
            return chosenPropertyCategory.dailyRentalPropertyTypes;
          default:
            setIsCategoryChosen(false)
            return null;
        }
      });
    }
  }, [chosenCategoryInfo?.dealType]);

  // validate if category is chosen
  useEffect(() => {
    const {PropertyType, category, formFields, dealType} = chosenCategoryInfo
    switch (category) {
      case 'residential':
        if(dealType && PropertyType){
          setIsCategoryChosen(true)
        }
        break;
      case 'commercial': 
      if(dealType && PropertyType){
        setIsCategoryChosen(true)
      }
        break;
      case 'land': 
      if(dealType){
        setIsCategoryChosen(true)
      }
        break;
      case 'bulding': 
      if(dealType){
        setIsCategoryChosen(true)
      }
        break
      default:
        break;
    }


  }, [chosenCategoryInfo]);

  const handleNextStep = ()=>{
    nextStep()
  }

  return (
    <div className="h-full">
      <h2 className="mb-8">Choose Category</h2>
      <div className="steps-container flex space-x-4 h-80 px-24 min-h-full">
        <div className="first-step h-full w-56 min-h-full">
          <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl min-h-full">
            {ChooseCategorySteps.map((category) => {
              const { categoryLabel, id, categoryName } = category;
              const isActive = categoryName === chosenCategoryInfo.category;
              return (
                <li
                  key={id}
                  className={`text-sm my-2 p-1 cursor-pointer select-none ${
                    isActive ? "bg-accent text-white" : ""
                  }`}
                  onClick={() => {
                    handleChosenCategory(category);
                  }}
                >
                  <div className="flex justify-between items-center px-2">
                    {categoryLabel}
                    {isActive && <BiChevronRight className="w-7 h-7" />}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {chosenCategoryInfo.category &&
          Array.isArray(dealTypes) &&
          dealTypes.length > 0 && (
            <div className="second-step h-full w-56 min-h-full">
              <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl min-h-full">
                {dealTypes.map((deal) => {
                  const { id, dealName, dealLable } = deal;
                  const isActive = dealName === chosenCategoryInfo.dealType;
                  return (
                    <li
                      key={id}
                      className={`text-sm my-2 p-1 cursor-pointer select-none ${
                        isActive ? "bg-accent text-white" : ""
                      }`}
                      onClick={() => handleChooseDeal(deal)}
                    >
                      <div className="flex justify-between items-center px-2">
                        {dealLable}
                        {isActive && <BiChevronRight className="w-7 h-7" />}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        {chosenCategoryInfo.category && (chosenCategoryInfo.category == 'residential' || chosenCategoryInfo.category == 'commercial') && chosenCategoryInfo.dealType && (
          <div className="third-step h-full w-56 min-h-full">
            <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl min-h-full">
              {correspondingPropertyTypesToChosenDealType &&
                correspondingPropertyTypesToChosenDealType.map(
                  (propertyCategory) => {
                    const { id, propertyTypeLabel, propertyTypeName } =
                      propertyCategory;
                    const isActive =
                      chosenCategoryInfo.PropertyType == propertyTypeName;
                    return (
                      <li
                        key={id}
                        className={`text-sm my-2 p-1 cursor-pointer select-none ${
                          isActive ? "bg-accent text-white" : ""
                        }`}
                        onClick={() => {
                          handleSelectPropertyType(propertyCategory);
                        }}
                      >
                        <div className="flex justify-between items-center px-2">
                          {propertyTypeLabel}
                          {isActive && <BiChevronRight className="w-7 h-7" />}
                        </div>
                      </li>
                    );
                  }
                )}
            </ul>
          </div>
        )}
        {
          isCategoryChosen && 
          <div className="is-catagory-chosen flex flex-col items-center justify-center w-56 min-h-full pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl min-h-ful">
              <IoCheckmarkCircleOutline className="w-24 h-24 text-accent" />
              <span className="text-sm ">Category is chosen</span>
              <UIButton onClick={handleNextStep} className={'border border-accent bg-accent text-white hover:bg-white hover:text-accent mt-4'}>Next step</UIButton>

            </div>
        }
      </div>
    </div>
  );
});

if (isDev) {
  ChooseCategory.displayName = "ChooseCategory";
}

export default ChooseCategory;
