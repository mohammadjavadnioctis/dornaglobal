import React, { FC, memo, useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { UIButton } from "~/lib";
import ChooseCategorySteps from "~/utils/data/ChoseCategorySteps";
import { isDev } from "~/utils/helpers";
import {
  CategoryStepsType,
  ChosenPropertyType,
  DealType,
  PropertySubCategoryType,
} from "~/utils/types";

interface ChosenCategoryInfoType {
  category: null | string;
  dealType: null | string;
  PropertyType: null | string;
  correspondingForm: null | string;
}

const ChooseCategory: FC = memo(() => {
  const [chosenCategoryInfo, setChosenCategoryInfo] =
    useState<ChosenCategoryInfoType>({
      category: null,
      dealType: null,
      PropertyType: null,
      correspondingForm: null,
    });
  const [dealTypes, setDealTypes] = useState<DealType[] | null>(null);
  const [isCategoryChosen , setIsCategoryChosen] = useState(false)
  const [chosenPropertyCategory, setChosenPropertyCategory] =
    useState<ChosenPropertyType | null>(null);
  const [
    correspondingPropertyTypesToChosenDealType,
    setCorrespondingPropertyTypesToChosenDealType,
  ] = useState<PropertySubCategoryType[] | null | undefined>(null);

  const handleChosenCategory = (ChosenCategory: any) => {
    // console.log("category name is: ", ChosenCategory);
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

  const handleChooseDeal = (deal: DealType) => {
    // console.log("this is the deal: ", deal);
    const { dealName } = deal;
    setChosenCategoryInfo((prevState) => ({
      ...prevState,
      dealType: dealName,
      PropertyType: null,
    }));
  };

  const handleSelectPropertyType = (PropertyType: PropertySubCategoryType) => {
    // console.log("this is the selected PropertyType:", PropertyType);
    const { propertyTypeName } = PropertyType;
    setChosenCategoryInfo((prevState) => ({
      ...prevState,
      PropertyType: propertyTypeName,
    }));
  };

  useEffect(() => {
    // console.log(
    //   "this si dealtype of the chosencategory info; ",
    //   chosenCategoryInfo.dealType
    // );
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
  }, [chosenCategoryInfo.dealType]);

  // validate if category is chosen
  useEffect(() => {
    const {PropertyType, category, correspondingForm, dealType} = chosenCategoryInfo
    // console.log('useEffect executed')
    switch (category) {
      case 'residential':
        // console.log('chosen category is: residential')
        if(dealType && PropertyType){
          setIsCategoryChosen(true)
        }
        break;
      case 'commercial': 
      // console.log('chosen category is: commercial')
      if(dealType && PropertyType){
        setIsCategoryChosen(true)
      }
        break;
      case 'land': 
      // console.log('chosen category is: land')
      if(dealType){
        setIsCategoryChosen(true)
      }
        break;
      case 'bulding': 
      // console.log('chosen category is: building')
      if(dealType){
        setIsCategoryChosen(true)
      }
        break
      default:
        break;
    }


  }, [chosenCategoryInfo]);

  const nextStep = ()=>{
    console.log('this is the chosenCategoryINfo', chosenCategoryInfo)
  }

  return (
    <div className="h-full border border-green-400">
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
        {chosenCategoryInfo.category && (chosenCategoryInfo.category == 'residential' || 'commercial') && chosenCategoryInfo.dealType && (
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
              <UIButton onClick={nextStep} className={'border border-accent bg-accent text-white hover:bg-white hover:text-accent mt-4'}>Next step</UIButton>

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
