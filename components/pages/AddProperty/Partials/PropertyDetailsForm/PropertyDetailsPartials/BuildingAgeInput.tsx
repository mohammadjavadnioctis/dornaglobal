import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

const BuildingAgeInput: FC = memo(() => {
  // const [buildingAge, setBuildingAge] = useState<number>();

  const {details: {buildingAge}, setDetails} = usePropertyContext()

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , buildingAge: event}))
  }


  return (
    <div>
      {" "}
      <UiNumberInput
        label="Building Age"
        placeholder=""
        value={buildingAge}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
      />
    </div>
  );
});



if(isDev){
  BuildingAgeInput.displayName = 'BuildingAgeInput'
}


export default BuildingAgeInput;
