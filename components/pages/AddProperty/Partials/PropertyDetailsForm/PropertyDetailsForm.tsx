import React, { FC, memo } from "react";
import { isDev } from "~/utils/helpers";
import AddressInput from "./PropertyDetailsPartials/AddressInput";
import FloorNoInput from "./PropertyDetailsPartials/FloorNoInput";
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
        </div>
        <AddressInput wrapperClassNames="my-16" />
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

if (isDev) {
  PropertyDetailsForm.displayName = "PropertyDetailsForm";
}

export default PropertyDetailsForm;
