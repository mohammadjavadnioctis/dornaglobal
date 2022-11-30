import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const NoOfBathroomsInput: FC = memo(() => {
  // const [NoOfBathrooms, setNoOfBathrooms] = useState<number>();

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
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});



if(isDev){
  NoOfBathroomsInput.displayName = 'NoOfBathroomsInput'
}


export default NoOfBathroomsInput;
