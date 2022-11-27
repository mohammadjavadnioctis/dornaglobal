import React, { FC, memo } from "react";
import { UiButton } from "~/lib";
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

const PropertyDetailsForm: FC = () => {

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('form submitted ')
  }

  return (
    <div className="outer_wrapper bg-white container rounded-lg py-7">
      <h3 className="text-2xl mb-20">Property Details Form</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inner_wrapper grid grid-cols-2 gap-y-16 gap-x-4">
          <div className="col-span-2">
            <PropertyTitleInput wrapperClassNames="" />
          </div>
          <div className="col-span-2 ">
            <PropertyDescriptionInput />
          </div>
          <PriceInput /> 
          <TitleDeedStatusinput />
          <LivingAreaInput />
          <TotalAreaInput />
          <NoOfRoomsInput />
          <NoOfBathroomsInput />
          <FloorNoInput />
          <TotalNoOfFloorsInput />
          <AydatInput />
          <BuildingAgeInput />
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
          className="bg-accent hover:bg-accent-600 transition-all w-full "
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
