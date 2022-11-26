import React, { FC, memo, useState } from "react";
import { UiNumberInput } from "~/lib";

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

export default NoOfRoomsInput;
