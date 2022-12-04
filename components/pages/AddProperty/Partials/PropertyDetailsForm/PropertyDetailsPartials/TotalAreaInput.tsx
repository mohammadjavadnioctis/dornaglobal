import React, { FC, memo, useState } from "react";
import { usePropertyContext } from "~/contexts/AddPropertyContext";
import { UiNumberInput } from "~/lib";
import { isDev } from "~/utils/helpers";


interface TotalAreaInputType {
  errorHandlingProp? : any
}


const TotalAreaInput: FC<TotalAreaInputType> = memo((props) => {
  // const [totalArea, setTotalArea] = useState<number>();
  const {errorHandlingProp} = props 

  const {details: {totalArea}, setDetails} = usePropertyContext()
    const handleChange = (event: number) => {
      setDetails(prevState => ({...prevState , totalArea: event }  ))
    }

  return (
    <div>
      {" "}
      <UiNumberInput
        label="Total area ( m2 )"
        value={totalArea}
        onChange={handleChange}
        parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
        {...errorHandlingProp}
      />
    </div>
  );
});



if(isDev){
  TotalAreaInput.displayName = 'TotalAreaInput'
}


export default TotalAreaInput;
