import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";


interface TotalNoOfFloorsType {
  errorHandlingProp?: any
}


const TotalNoOfFloorsInput: FC<TotalNoOfFloorsType> = memo((props) => {
  const {errorHandlingProp} = props
  // const [totalFloorCount, setTotalFloorCount] = useState<number>();

  const {details: {totalFloorCount}, setDetails} = usePropertyContext()

  const handleChange = (event: number) => {
    setDetails(prevState => ({...prevState , totalFloorCount: event}))
  }


  return (
    <div>
      {" "}
      <UiNumberInput
        label="Total floor count"
        placeholder="how many floors are there in total"
        value={totalFloorCount}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
        {...errorHandlingProp}
      />
    </div>
  );
});


if(isDev){
  TotalNoOfFloorsInput.displayName = 'TotalNoOfFloorsInput'
}



export default TotalNoOfFloorsInput;
