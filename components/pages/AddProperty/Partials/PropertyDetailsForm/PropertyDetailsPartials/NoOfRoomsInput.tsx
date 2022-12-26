import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";


interface NoOfBedroomsInputType {
  errorHandlingProp?: any;
}


const NoOfRoomsInput: FC<NoOfBedroomsInputType> = memo((props) => {
  // const [noOfRooms, setNoOfRooms] = useState<number>();
  const {errorHandlingProp} = props
  const {details: {noOfBedRooms}, setDetails} = usePropertyContext()

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , noOfBedRooms: event}))
  }


  return (
    <div>
      {" "}
      <UiNumberInput
        label="Number of rooms"
        value={noOfBedRooms}
        onChange={handleChange}
        {...errorHandlingProp}
      />
    </div>
  );
});


if(isDev){
  NoOfRoomsInput.displayName = 'NoOfRoomsInput'
}



export default NoOfRoomsInput;
