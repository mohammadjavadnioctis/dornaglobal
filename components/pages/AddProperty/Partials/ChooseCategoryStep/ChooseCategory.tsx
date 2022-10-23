import React, { FC, memo, useEffect, useState } from "react";
import ChooseCategorySteps from "~/utils/data/ChoseCategorySteps";
import { isDev } from "~/utils/helpers";
import { CategoryStepsType, ChosenPropertyType, DealType, PropertySubCategoryType } from "~/utils/types";

interface ChosenCategoryInfoType {
    category: null | string,
    dealType: null | string ,
    PropertyType: null  | string,
    correspondingForm: null  | string,
}

const ChooseCategory: FC = memo(() => {
  const [chosenCategoryInfo, setChosenCategoryInfo] = useState<ChosenCategoryInfoType>({
    category: null,
    dealType: null,
    PropertyType: null,
    correspondingForm: null,
  });
  const [dealTypes, setDealTypes] = useState<DealType[] | null>(null)
  const [chosenPropertyCategory, setChosenPropertyCategory ] = useState<ChosenPropertyType | null>(null)
  const [correspondingPropertyTypesToChosenDealType, setCorrespondingPropertyTypesToChosenDealType ] = useState<PropertySubCategoryType[] | null | undefined>(null)

  const handleChosenCategory = (ChosenCategory: any)=>{
    console.log('category name is: ', ChosenCategory)
    const {categoryName, dealTypes  } = ChosenCategory
    setChosenCategoryInfo(prevState => ({...prevState, category: ChosenCategory.categoryName}))
    setChosenPropertyCategory(ChosenCategory)
    setDealTypes(dealTypes)
    setChosenCategoryInfo(prevState => ({...prevState, dealType: null, PropertyType: null, correspondingForm: null}))
  }


  const handleChooseDeal = (deal: DealType)=> {
    console.log('this is the deal: ', deal)
    const {dealName} = deal
    setChosenCategoryInfo(prevState => ({...prevState, dealType: dealName, PropertyType: null}))
  }


  const handleSelectPropertyType = (PropertyType: PropertySubCategoryType)=>{
      console.log('this is the selected PropertyType:', PropertyType)
      const {propertyTypeName} = PropertyType
      setChosenCategoryInfo(prevState => ({...prevState, PropertyType: propertyTypeName }))
  }
  
  useEffect(()=>{
      console.log('this si dealtype of the chosencategory info; ', chosenCategoryInfo.dealType)
      if(chosenPropertyCategory){
        setCorrespondingPropertyTypesToChosenDealType(prevState => {
          switch (chosenCategoryInfo.dealType) {
            case 'forsale':
              return chosenPropertyCategory.forSalePropertyTypes;
            case 'rental' : 
              return chosenPropertyCategory.rentalPropertyTypes;
            case 'dailyRental': 
              return chosenPropertyCategory.dailyRentalPropertyTypes;
            default:
              return null;
            }
        })
      }
    
  },[chosenCategoryInfo.dealType])

  useEffect(()=>{
      console.log('this is chosen category: ', chosenPropertyCategory)
  },[chosenPropertyCategory])


  return (
    <div className="h-full border border-green-400">
      <h2 className="mb-8">Choose Category</h2>
    <div className="steps-container flex space-x-4 h-80">

      <div className="first-step border border-blue-400 h-full w-32">
        <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl">
          {ChooseCategorySteps.map((category) => {
            const { categoryLabel, id, categoryName } = category;
            const isActive = categoryName === chosenCategoryInfo.category
            return (
              <li key={id} className={`text-sm my-2 p-1 cursor-pointer select-none ${isActive ? 'bg-accent text-white' : ''}`} onClick={()=>{handleChosenCategory(category)}}>
                {categoryLabel}
              </li>
            );
          })}
        </ul>
      </div>
      {
        chosenCategoryInfo.category && Array.isArray(dealTypes) && dealTypes.length > 0 &&
      <div className="second-step border border-blue-400 h-full w-32">
        <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl">
          {dealTypes.map((deal) => {
            const { id, dealName, dealLable } = deal;
            const isActive = dealName === chosenCategoryInfo.dealType
            return (
              <li key={id} className={`text-sm my-2 p-1 cursor-pointer select-none ${isActive ? 'bg-accent text-white' : ''}`} onClick={()=> handleChooseDeal(deal)}>
                {dealLable}
              </li>
            );
          })}
        </ul>
      </div>
      }
      {
        chosenCategoryInfo.category && chosenCategoryInfo.dealType &&
        
          <div className="third-step border border-blue-400 h-full w-32">
            <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl">
              {correspondingPropertyTypesToChosenDealType && correspondingPropertyTypesToChosenDealType.map((propertyCategory) => {
                const {id, propertyTypeLabel, propertyTypeName } = propertyCategory;
                const isActive = chosenCategoryInfo.PropertyType == propertyTypeName
                return (
                  <li key={id} className={`text-sm my-2 p-1 cursor-pointer select-none ${isActive ? 'bg-accent text-white' : ''}`} onClick={()=>{handleSelectPropertyType(propertyCategory)}}>
                    {propertyTypeLabel}
                  </li>
                );
              })}
            </ul>
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
