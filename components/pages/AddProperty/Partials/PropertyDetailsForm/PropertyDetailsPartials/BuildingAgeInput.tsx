import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";

interface BuildingAgeInputType {
  errorHandlingProp?: any
}


const BuildingAgeInput: FC<BuildingAgeInputType> = memo((props) => {
  // const [buildingAge, setBuildingAge] = useState<number>();
  const {errorHandlingProp} = props
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
        value={buildingAge as (number | undefined)}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
        {...errorHandlingProp}
      />
    </div>
  );
});



if(isDev){
  BuildingAgeInput.displayName = 'BuildingAgeInput'
}


export default BuildingAgeInput;
