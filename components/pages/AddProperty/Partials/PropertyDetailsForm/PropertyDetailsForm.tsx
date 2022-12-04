import { DocumentReference } from "firebase/firestore";
import React, { FC, memo } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiButton, uiUseForm } from "~/lib";
import { isDev } from "~/utils/helpers";
import AddressInput from "./PropertyDetailsPartials/AddressInput";
import AydatInput from "./PropertyDetailsPartials/AydatInput";
import BalconyInput from "./PropertyDetailsPartials/BalconyInput";
import BuildingAgeInput from "./PropertyDetailsPartials/BuildingAgeInput";
import BuildingAge from "./PropertyDetailsPartials/BuildingAgeInput";
import FloorNoInput from "./PropertyDetailsPartials/FloorNoInput";
import FurnishedInput from "./PropertyDetailsPartials/FurnishedInput";
import LivingAreaInput from "./PropertyDetailsPartials/LivingAreaInput";
import NoOfBathroomsInput from "./PropertyDetailsPartials/NoOfBathroomsInput";
import NoOfRoomsInput from "./PropertyDetailsPartials/NoOfRoomsInput";
import PriceInput from "./PropertyDetailsPartials/PriceInput";
import PropertyDescriptionInput from "./PropertyDetailsPartials/PropertyDescriptionInput";
import PropertyTitleInput from "./PropertyDetailsPartials/PropertyTitleInput";
import TitleDeedStatusinput from "./PropertyDetailsPartials/TitleDeedStatusinput";
import TotalAreaInput from "./PropertyDetailsPartials/TotalAreaInput";
import TotalNoOfFloorsInput from "./PropertyDetailsPartials/TotalNoOfFloorsInput";

interface PropertyDetailsFormType {
  // ref: DocumentReference
}


const PropertyDetailsForm: FC<PropertyDetailsFormType> = (props) => {
  // const { ref } = props
  const { UploadProperty, details, setDetails } = usePropertyContext()
  const { title, price, titleDeedStatus, livingArea, totalArea, floor, totalFloorCount, aydat, buildingAge } = details



  const formErrorHandling = uiUseForm({
    initialValues: { title, price, titleDeedStatus, livingArea, totalArea, floor, totalFloorCount, aydat, buildingAge   },
    validateInputOnBlur: true,
    validate: {
      title: (value: any) => ((value && value.length > 3) ? null : 'this field is required'),
      price: (value: any) => ((value && value > 0) ? null : 'price can not be empty or 0'),
      titleDeedStatus: (value: any) => ((value && value.length > 3) ? null : 'please choose an option'),
      livingArea: (value: any) => ((value && value > 0) ? null : 'Living Area can not be empty or 0'),
      totalArea: (value: any) => ((value && value > 0) ? null : 'Total Area can not be empty or 0'),
      floor: (value: any) => ((value) ? null : 'please provide the floor number'),
      totalFloorCount: (value: any) => ((value) ? null : 'please provide the total floor count'),
      aydat: (value: any) => ((value >= 0) ? null : 'please provide the amount'),
      buildingAge: (value: any) => ((value >= 0) ? null : 'please provide the age of the building'),

      
    }
  })


  const handleError = (errors: typeof formErrorHandling.errors) => {
    if (errors.name) {
      // showNotification({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      // showNotification({ message: 'Please provide a valid email', color: 'red' });
    }
    console.log('the errors are : ',errors)
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log('form submitted ')
  //   UploadProperty()

  // }
  const handleSubmit = (e: typeof formErrorHandling.values) => {
    // e.preventDefault()
    
    console.log('form handleSubmit: ', e)
    // UploadProperty()
    // @ts-ignore
    setDetails(prevState => ({...prevState, ...e}))

  }
  return (
    <div className="outer_wrapper bg-white container rounded-lg py-7">
      <h3 className="text-2xl mb-20">Property Details Form</h3>
      <form onSubmit={formErrorHandling.onSubmit(handleSubmit, handleError)}>
        <div className="inner_wrapper grid grid-cols-2 gap-y-16 gap-x-4">
          <div className="col-span-2">
            <PropertyTitleInput wrapperClassNames="" ErrorHandlingProp={{ ...formErrorHandling.getInputProps('title') }} />
          </div>
          <div className="col-span-2 ">
            <PropertyDescriptionInput />
          </div>
          <PriceInput errorHandlingProp={{ ...formErrorHandling.getInputProps('price') }} />
          <TitleDeedStatusinput errorHandlingProp={{ ...formErrorHandling.getInputProps('titleDeedStatus') }}/>
          <LivingAreaInput errorHandlingProp={{ ...formErrorHandling.getInputProps('livingArea') }}/>
          <TotalAreaInput errorHandlingProp={{ ...formErrorHandling.getInputProps('totalArea') }} />
          <NoOfRoomsInput />
          <NoOfBathroomsInput />
          <FloorNoInput  errorHandlingProp={{ ...formErrorHandling.getInputProps('floor') }} />
          <TotalNoOfFloorsInput errorHandlingProp={{ ...formErrorHandling.getInputProps('totalFloorCount') }}/>
          <AydatInput errorHandlingProp={{ ...formErrorHandling.getInputProps('aydat') }}/>
          <BuildingAgeInput errorHandlingProp={{ ...formErrorHandling.getInputProps('buildingAge') }}/>
          <FurnishedInput />
          <BalconyInput />
        </div>
        <AddressInput wrapperClassNames="my-16" />
        {/* <button type="submit" className="w-16 h-10 border border">Submit</button>  */}
        <UiButton
          variant="filled"
          size="lg"
          color="#E9C46A"
          uppercase
          className="bg-accent hover:bg-accent-600 transition-all w-full mt-8 mb-4"
          type="submit"
        >
          Submit
        </UiButton>
      </form>
    </div>
  );
};

if (isDev) {
  PropertyDetailsForm.displayName = "PropertyDetailsForm";
}

export default PropertyDetailsForm;
