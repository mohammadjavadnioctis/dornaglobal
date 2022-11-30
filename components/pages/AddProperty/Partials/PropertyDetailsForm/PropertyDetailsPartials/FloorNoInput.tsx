import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const FloorNoInput: FC = memo(() => {
  // const [floorNo, setFloorNo] = useState<number>();

  const {details: {floor}, setDetails} = usePropertyContext()

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , noOfBathRooms: event}))
  }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Floor number"
        placeholder="which floor is the property located at"
        value={floor  as number | undefined}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});


if(isDev){
  FloorNoInput.displayName = 'FloorNoInput'
}



export default FloorNoInput;
