import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

interface LivinNoOfBathroomsInputType {
  errorHandlingProp?: any;
}

const NoOfBathroomsInput: FC<LivinNoOfBathroomsInputType> = memo((props) => {
  // const [NoOfBathrooms, setNoOfBathrooms] = useState<number>();
  const {errorHandlingProp} = props
  const {details: {noOfBathRooms}, setDetails} = usePropertyContext()

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , noOfBathRooms: event}))
  }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Number of bathrooms"
        value={noOfBathRooms}
        onChange={handleChange}
        // parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
        {...errorHandlingProp}
      />
    </div>
  );
});



if(isDev){
  NoOfBathroomsInput.displayName = 'NoOfBathroomsInput'
}


export default NoOfBathroomsInput;
