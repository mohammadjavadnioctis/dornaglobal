import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const NoOfRoomsInput: FC = memo(() => {
  // const [noOfRooms, setNoOfRooms] = useState<number>();

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
      
      />
    </div>
  );
});


if(isDev){
  NoOfRoomsInput.displayName = 'NoOfRoomsInput'
}



export default NoOfRoomsInput;
