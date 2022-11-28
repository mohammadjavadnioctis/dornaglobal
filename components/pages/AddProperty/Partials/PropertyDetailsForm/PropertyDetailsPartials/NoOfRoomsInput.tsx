import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const NoOfRoomsInput: FC = memo(() => {
  const [noOfRooms, setNoOfRooms] = useState<number>();

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Number of rooms"
        value={noOfRooms}
        onChange={(val) => setNoOfRooms(val)}
      
      />
    </div>
  );
});


if(isDev){
  NoOfRoomsInput.displayName = 'NoOfRoomsInput'
}



export default NoOfRoomsInput;
