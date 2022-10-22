import React, { FC, memo, useEffect, useState } from "react";
import ChooseCategorySteps from "~/utils/data/ChoseCategorySteps";
import { isDev } from "~/utils/helpers";
import { CategoryStepsType, DealType } from "~/utils/types";

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
  const [chosenPropertyCategory, setChosenPropertyCategory ] = useState({})


  const handleChosenCategory = (Chosencategory: any)=>{
    console.log('category name is: ', Chosencategory)
    const {categoryName, dealTypes  } = Chosencategory
    setChosenCategoryInfo(prevState => ({...prevState, category: Chosencategory.categoryName}))
    setChosenPropertyCategory(categoryName)
    setDealTypes(dealTypes)
  }


  const handleChooseDeal = (deal: DealType)=> {
    console.log('this is the deal: ', deal)
    const {dealName} = deal
    setChosenCategoryInfo(prevState => ({...prevState, dealType: dealName}))

  }
  
  useEffect(()=>{
      console.log('this si dealtypes; ', dealTypes)
  },[dealTypes])



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
      {/* <div className="third-step border border-blue-400 h-full w-32">
        <ul className="pl-4 border-2 border-accent-300 bg-accent-100 rounded-xl">
          {ChooseCategorySteps.map((step) => {
            const { categoryLabel, id } = step;

            return (
              <li key={id} className={`text-sm my-2`}>
                {categoryLabel}
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
    </div>
  );
});

if (isDev) {
  ChooseCategory.displayName = "ChooseCategory";
}

export default ChooseCategory;